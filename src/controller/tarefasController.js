
const tarefas = require("../model/tarefas.json");

const getAll = (req, res) => {
  console.log(req.url);
  res.status(200).send(tarefas);
};

const getById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(tarefas.find((tarefa) => tarefa.id == id));
};

module.exports = {
  getAll,
  getById,
};
