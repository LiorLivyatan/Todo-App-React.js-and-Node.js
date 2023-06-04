const { Todos } = require("../models/Todos");

const welcome = (req, res) => {
  res.send("Welcome to my ToDo App!");
};

const fetchTodos = (req, res) => {
  res.json(Todos);
};

const addTodo = (req, res) => {
  const newTodo = {
    id: req.body.id,
    text: req.body.text,
    isComplete: req.body.isComplete,
    isEditing: req.body.isEditing,
  };
  Todos.push(newTodo);
  res.json(newTodo);
};

const updateTodo = (req, res) => {
  const todoId = req.params.id;
  const toUpdate = Todos.find((todo) => todo.id === todoId);
  if (toUpdate) {
    toUpdate.isComplete = !toUpdate.isComplete;
    res.json(toUpdate);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

const deleteTodo = (req, res) => {
  const todoId = req.params.id;
  const todoIndex = Todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    const deletedTodo = Todos.splice(todoIndex, 1)[0];
    res.json(deletedTodo);
  } else {
    res.status(404).json({ message: "Todo not found!" });
  }
};

exports.welcome = welcome;
exports.fetchTodos = fetchTodos;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
