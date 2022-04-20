//metodo para criar as rotas
const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

//importando
routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);

module.exports = routes;
