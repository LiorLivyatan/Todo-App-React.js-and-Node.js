import React from "react";
import Button from "../UI/Button";

function Todo(props) {
  return (
    <div className="todo">
      <p className={props.todo.isComplete ? "completed" : ""}>
        {props.todo.text}
      </p>
      <div>
        <Button
          onClick={props.complete}
          className={props.todo.isComplete ? "complete" : ""}
        >
          Done
        </Button>
        <Button onClick={props.delete}>Delete</Button>
      </div>
    </div>
  );
}

export default Todo;
