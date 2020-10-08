const express = require("express")
const bodyParser = require("body-parser")
const app = express()

//rotas
const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoute")

//configurar body parser
app.use(bodyParser.json());
// app.use(express.json()); - Podemos usar a propria função de parser de json do express, sem a necessidade de instalar o body parser 

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app
