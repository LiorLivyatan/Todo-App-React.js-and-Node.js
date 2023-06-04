import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          delete={() => props.delete(todo)}
          complete={() => props.complete(todo)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
