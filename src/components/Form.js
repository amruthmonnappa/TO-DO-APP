import React from "react";

const Form = ({ inputText, setinputText, todo, setTodo, setStatus }) => {
  const inputHandler = (event) => {
    setinputText(event.target.value);
  };
  //Prevent the Reload
  const preventRefresh = (event) => {
    event.preventDefault();
    setTodo([
      ...todo,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setinputText(""); // resets
  };
  const statusHandler = (event) => {
  setStatus(event.target.value)
  };
  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputHandler}
        placeholder="Enter the task"
      />
      <button className="todo-button" type="submit" onClick={preventRefresh}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
