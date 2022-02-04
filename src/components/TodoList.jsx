import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import Todo from "./Todo";

const TodoList = () => {
  const { todoStore } = useStore();

  return (
    <div className="mt-4">
      {todoStore.getTodos.length > 0 ? (
        <ul className="list-group">
          {todoStore.getTodos.map((item) => (
            <li key={item.id} className="mb-2">
              <Todo data={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="h5">Start Adding Todo's !</p>
      )}
    </div>
  );
};

export default observer(TodoList);
