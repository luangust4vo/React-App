import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        className="todo-input"
        type="text"
        placeholder="Crie uma nova tarefa"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};
