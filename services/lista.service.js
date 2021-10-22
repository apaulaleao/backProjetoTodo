// importo o model
const Lista = require('./../models/lista');

// Retorna todas as tarefas
class ListaService {
  // conecta com o modelo e retorna a lista de tarefas
findAll = async () => await Lista.find();

  
findById = async (id) => {
  return await Lista.findById(id);
  }

createLista = async (lista) => {
  return await Lista.create(lista);
  }

editLista = async (id, lista) => {
  return await Lista.updateOne({ _id: id }, lista);
  }

deleteLista = async (id) => {
  return await Lista.deleteOne({ _id: id});
  }

}


module.exports = ListaService;