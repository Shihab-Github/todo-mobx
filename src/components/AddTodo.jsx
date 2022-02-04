import React from "react";
import { useStore } from "../store";

const AddTodo = () => {
  const { todoStore } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const formData = new FormData(formElement);
    const value = formData.get("todo-title");
    if (!value || value.trim() === "") return;
    todoStore.addTodo(value);
    formElement.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Todos</h2>
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="todo-title"
          className="form-control"
          placeholder="Enter Todo"
        />
      </div>
      <div>
        <button className="btn btn-primary">Add Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;
