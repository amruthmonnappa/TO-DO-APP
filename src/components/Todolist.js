import React from "react";
import Todo from "./Todo";
const Todolist = ({ todos, settodo,todo,filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodo={settodo}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
