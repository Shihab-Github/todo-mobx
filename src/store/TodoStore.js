import { makeObservable, observable, action } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      updateTodo: action,
    });

    let savedTodos = JSON.parse(localStorage.getItem("todo-list"));
    if (savedTodos) this.todos = [...savedTodos];
  }

  cacheTodos() {
    let todoList = [...this.todos];
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }

  get getTodos() {
    const reverseArray = this.todos.reduce((acc, val) => [val, ...acc], []);
    return reverseArray;
  }

  updateTodo(id, value) {
    let idx = this.todos.findIndex((x) => x.id === id);
    this.todos[idx].title = value;
    this.cacheTodos()
  }

  addTodo(title) {
    this.todos.push({
      id: Date.now(),
      title,
      createdAt: new Date(),
    });
    this.cacheTodos()
  }

  removeTodo(id) {
    this.todos = this.todos.filter((x) => x.id !== id);
    this.cacheTodos()
  }
}

export default TodoStore;
