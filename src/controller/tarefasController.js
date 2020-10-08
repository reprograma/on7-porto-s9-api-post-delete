const tarefas = require("../model/tarefas.json");
const fs = require("fs");
const { resourceUsage } = require("process");

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
  const { id, dataInclusao, concluido, descricao, nomeColaboradora } = req.body;
  tarefas.push({ id, dataInclusao, concluido, descricao, nomeColaboradora });

  fs.writeFile("./src/model/tarefas.json", JSON.stringify(tarefas), 'utf8', function(err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Arquivo atualizado com sucesso!");
  });

  res.status(201).send(tarefas);
};

const deleteTarefa = (req, res) => {
  const id = req.params.id;
  const tarefaFiltrada = tarefas.find((tarefa) => tarefa.id == id);
  const index = tarefas.indexOf(tarefaFiltrada);
  tarefas.splice(index, 1);

  fs.writeFile("./src/model/tarefas.json", JSON.stringify(tarefas), 'utf8', function(err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Arquivo atualizado com sucesso!");
  });

  res.status(200).send(tarefas);
};

const deleteTarefaConcluida = (req, res) => {
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluido == true);
  for (i = 0; i < tarefasConcluidas.length; i ++) {
    const index = tarefas.indexOf(tarefasConcluidas[i]);
    tarefas.splice(index, 1);
  }

  fs.writeFile("./src/model/tarefas.json", JSON.stringify(tarefas), 'utf8', function(err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Arquivo atualizado com sucesso!");
  });

  res.status(200).send(tarefas);
}

module.exports = {
  getAll,
  getById,
  postTarefa,
  deleteTarefa,
  deleteTarefaConcluida
};
