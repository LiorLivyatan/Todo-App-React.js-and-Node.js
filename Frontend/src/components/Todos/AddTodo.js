import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddTodo(props) {
  const [enteredTask, setEnteredTask] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTask.length === 0) {
      return;
    }
    props.onAddTodo({
      id: uuid(),
      text: enteredTask,
      isComplete: false,
    });
    setEnteredTask("");
  };

  const taskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <div>
      <h1>Todo App!</h1>
      <form className="todo-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your task..."
          className="todo-input"
          value={enteredTask}
          onChange={taskHandler}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
