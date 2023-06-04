const express = require("express");

const todosControllers = require("../controllers/todos-controllers");

const router = express.Router();

router.get("/", todosControllers.welcome);

router.get("/api/todos", todosControllers.fetchTodos);

router.post("/api/todos", todosControllers.addTodo);

router.patch("/api/todos/:id", todosControllers.updateTodo);

router.delete("/api/todos/:id", todosControllers.deleteTodo);

module.exports = router;
