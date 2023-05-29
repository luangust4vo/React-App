import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const EditTodoForm = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        className="todo-input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        <FontAwesomeIcon icon={faPen} />
      </button>
    </form>
  );
};
