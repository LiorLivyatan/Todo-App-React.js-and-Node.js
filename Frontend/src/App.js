import { useEffect, useState } from "react";
import axios from "axios";

import AddTodo from "./components/Todos/AddTodo";
import TodoList from "./components/Todos/TodoList";
import Card from "./components/UI/Card";

import "./App.css";

function App() {
  const [todosList, setTodosList] = useState([]);
  const baseURL = "http://localhost:3080";

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get(`${baseURL}/api/todos`);
      setTodosList(response.data);
    } catch (error) {
      console.log("Error fetching initial todos: ", error);
    }
  }

  async function addTodoHandler(todo) {
    try {
      const response = await axios.post(`${baseURL}/api/todos`, todo);
      setTodosList((prevList) => [...prevList, response.data]);
    } catch (error) {
      console.log("Can't add todo: ", error);
    }
  }

  async function completeHandler(todo) {
    try {
      const response = await axios.patch(`${baseURL}/api/todos/${todo.id}`);
      setTodosList((prevList) =>
        prevList.map((prev) =>
          prev.id === response.data.id
            ? { ...prev, isComplete: !prev.isComplete }
            : prev
        )
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function deleteTodoHandler(todo) {
    try {
      const response = await axios.delete(`${baseURL}/api/todos/${todo.id}`);
      setTodosList((prevList) =>
        prevList.filter((prev) => prev.id !== response.data.id)
      );
    } catch (error) {
      console.log("Error deleting todo: ", error);
    }
  }

  return (
    <Card className="App">
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList
        todos={todosList}
        delete={deleteTodoHandler}
        complete={completeHandler}
      />
    </Card>
  );
}

export default App;
