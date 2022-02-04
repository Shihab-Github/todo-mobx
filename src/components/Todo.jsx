import React, { useState } from "react";
import { useStore } from "../store";

const Todo = (props) => {
  const { todoStore } = useStore();
  const { data } = props;
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(data.title);

  const cancelChanges = () => {
    setEditMode(false);
    setTitle(data.title);
  };

  const saveChanges = () => {
    todoStore.updateTodo(data.id, title)
    setEditMode(false);
  }

  return (
    <div className="todo-flex-item">
      {!editMode ? (
        <>
          <div className="todo-title">
            <p className="h5">{data.title}</p>
          </div>
          <div>
            <button
              type="button"
              size="small"
              className="btn btn-outline-secondary"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => todoStore.removeTodo(data.id)}
              size="small"
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-title">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
          </div>
          <div>
            <button
              type="button"
              size="small"
              className="btn btn-outline-secondary"
              disabled={!title}
              onClick={saveChanges}
            >
              Save
            </button>
          </div>
          <div>
            <button
              type="button"
              size="small"
              className="btn btn-outline-secondary"
              onClick={cancelChanges}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
