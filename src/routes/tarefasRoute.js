const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAll);
router.get("/tarefas", controller.getAll);
router.get("/:id", controller.getById);

module.exports = router;
