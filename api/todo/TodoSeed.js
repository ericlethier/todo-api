import Todo from "./TodoModel.js";
import * as TodoService from "./TodoService.js";

function initTodos() {
  const todo1 = new Todo("first task");
  const todo2 = new Todo("second task");
  TodoService.add(todo1);
  TodoService.add(todo2);
}

export { initTodos as default };
