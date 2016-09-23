import Todo from "./TodoModel.js";

const todos = [];
const task = new Todo("first task");
todos.push(task);

export function add(_todo) {
  const todo = _todo;
  todo.id = todos.length;
  todos.push(todo);
}

export function list() {
  return todos;
}
