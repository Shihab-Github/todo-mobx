import "./App.css";
import TodoStore from "./store/TodoStore";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const todoStore = new TodoStore();

function App() {
  return (
    <>
      <div className="todoContainer">
        <div className="form-wrapper">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
