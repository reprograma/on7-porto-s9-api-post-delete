const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAll);
router.get("/tarefas", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postTarefa);
router.delete("/:id", controller.deleteTarefa);
router.delete("/", controller.deleteTarefaConcluida);

module.exports = router;
