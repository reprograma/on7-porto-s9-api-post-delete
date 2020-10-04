
const tarefas = require("../model/tarefas.json");

const getAll = (req, res) => {
  console.log(req.url);
  res.status(200).send(tarefas);
};

const getById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(tarefas.find((tarefa) => tarefa.id == id));
};

const postTarefa = (req, res) => {
  console.log(req.body);
  res.status(200).send(tarefas)
};

module.exports = {
  getAll,
  getById,
  postTarefa,
};
