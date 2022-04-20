//metodo para criar as rotas
const routes = require("express").Router();
const TaskController = require("../controller/TaskController")

//importando
routes.get("/", TaskController.getAll)

module.exports = routes