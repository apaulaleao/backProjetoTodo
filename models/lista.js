const mongoose = require('mongoose');

const ListaModel = new mongoose.Schema({
  titulo: { type: String, required: true},
  descricao: { type: String, required: true},
  prioridade: { type: String, required: true},
  status: { type: String, required: true},
  prazo: { type: String, required: true },

})

const Lista = mongoose.model("lista", ListaModel);

module.exports = Lista;
