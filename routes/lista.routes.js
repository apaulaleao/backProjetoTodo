// importa o express
const express = require('express');
const ListaController = require('./../controllers/lista.controller');
// inicializo minha rota
const router = express.Router();
const listaController = new ListaController();

// [GET] /tarefas - Retorna a lista de tarefas
router.get('/', listaController.getLista);

// [GET] /tarefa/id - Returna uma unica tarefa por id
router.get('/:id', listaController.getListaById);

// [POST] /tarefa - Cria uma nova tarefa no banco de dados
router.post('/', listaController.createLista);

// [PUT] /tarefa/id - Atualiza uma nova tarefa de acordo com o objeto recebido pelo front
router.put('/:id', listaController.editLista);


// [DELTE] /tarefa/id - Excluir uma tarefa de acordo com o seu id
router.delete('/:id', listaController.deleteLista);

module.exports = router;


