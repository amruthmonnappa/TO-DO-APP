import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
function App() {
  const [inputText, setinputText] = useState("");
  const [Todo, setTodo] = useState([]);
  const [status, setstatus] = useState("all");
  const [filterdtodo, setFilterdtodo] = useState([]);

  //USEFFECT FOR FILTERS
  useEffect(() => {
    filterHandler(); 
    saveLocalTodos();
  }, [Todo, status]);
  //FILTER HANDLER
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterdtodo(Todo.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterdtodo(Todo.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterdtodo(Todo);
        break;
    }
  };
  //SAVE TO LOCALSTORAGE
  const saveLocalTodos = () => {
    if (localStorage.getItem("Todo") === null) {
      localStorage.setItem("Todo", JSON.stringify([]));
    }
  }
    const getLocalTodos = () => {
      if (localStorage.getItem("Todo") === null) {
        localStorage.setItem("Todo", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodo(todoLocal);
      }
    };
    return (
      <div className="app">
        <header>
          <h1>TO-DO APP</h1>
        </header>
        <p>A REACT BASED PROJECT</p>
        <Form
          inputText={inputText}
          todo={Todo}
          setTodo={setTodo}
          setinputText={setinputText}
          setStatus={setstatus}
        />
        <Todolist filteredTodos={filterdtodo} todos={Todo} settodo={setTodo} />
      </div>
    );
  
}
export default App;
