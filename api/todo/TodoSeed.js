import Todo from "./TodoModel.js";
import * as TodoService from "./TodoService.js";

function initTodos() {
  const todo1 = new Todo();
  todo1.description = "first task";
  todo1.completed = false;
  const todo2 = new Todo();
  todo2.description = "second task";
  todo2.completed = false;
  TodoService.add(todo1);
  TodoService.add(todo2);
}

export { initTodos as default };
