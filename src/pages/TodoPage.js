import React, { useState, useContext, useEffect } from "react";
import './TodoPage.css';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { CredentialsContext } from "../App";
import { v4 as uuid } from "uuid";

// const LOCAL_STORAGE_KEY = "react-todo-list-toods";

export default function TodoPage() {

  const [todos, setTodos] = useState([]);
  const [credentials, setCredentials] = useContext(CredentialsContext);

  const persist = (newTodos) => {
    fetch(`http://localhost:4000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}`,
      },
      body: JSON.stringify(newTodos),
    }).then(() => {});
  };

  useEffect(() => {
    fetch(`http://localhost:4000/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}`,
      },
    })
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  const addTodo = (todoText) => {
    if (!todoText) return;
    const newTodo = { id: uuid(), checked: false, text: todoText };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    persist(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodoList = [...todos];
    const todoItem = newTodoList.find((todo) => todo.id === id);
    todoItem.checked = !todoItem.checked;
    setTodos(newTodoList);
    persist(newTodoList);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter( todo => todo.id !== id)
    setTodos(newTodos);
    persist(newTodos);
  }
  
  const logout = () => {
    setCredentials(null);
  }
  return (
    <div>
      <div className="Logout">
        <Link 
          href="/" 
          onClick={logout}
          variant="body2"
          className="Logout"
          >
            {"Logout"}
          </Link>
      </div>
      <div className="TodoPage">
        <Typography style={{ padding: 16 }} variant="h1"> 
          Simple Todo List
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleTodo} 
          removeTodo = {removeTodo}
        />
      </div>
    </div>
  );

}
