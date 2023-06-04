const { v4: uuid } = require("uuid");
const Todos = [
  {
    id: uuid(),
    text: "Learn React!",
    isComplete: true,
  },
  {
    id: uuid(),
    text: "Get ready for the exam!",
    isComplete: true,
  },
  {
    id: uuid(),
    text: "Master Frontend & Backened!",
    isComplete: false,
  },
];
module.exports = { Todos };
