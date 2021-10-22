const mongoose = require('mongoose');
// importamos o nosso servico
const ListaServices = require('../services/lista.service');

const listaService = new ListaServices();

class ListaController {
  
  getLista = async (req, res) => {
    const lista  = await listaService.findAll();
    res.send(lista);
  }

  getListaById = async (req, res) => {
    const id = req.params.id;

    // tratamento de erro se o id é valido ou nao
    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send({message:'Id Invalido'});
      return;
    }

    const lista = await listaService.findById(id);

    // tratamento de erro se existe a tarefa ou nao no banco de dados.
    if(!lista) {
      res.status(404).send({message:'Tarefa não encontrada'});
      return
    }

    res.status(200).send(lista);
  }

  createLista = async (req,res) => {
    const lista = req.body;
    const listaSalva = await listaService.createLista(lista)
    .then(() => {
      res.send({ message: `Tarefa criada com sucesso` });
    })
    .catch((err) => res.status(500).send({error: `erro no servidor: ${err}`}));
  }

  editLista = async (req, res) => {
    const id = req.params.id;
    const lista = req.body;
    await listaService.editLista(id, lista)
    .then(() => {
      res.status(200).send({message: 'Tarefa atualizada com sucesso'});
    })
    .catch((err) => res.status(500).send({error: `erro no servdor: ${err}`}));
  }

  deleteLista = async (req, res) => {
    const id = req.params.id;
    await listaService.deleteLista(id)
    .then(() => res.status(200).send({message: 'Tarefa excluida com sucesso'}));
  }
}

module.exports = ListaController;