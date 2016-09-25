const todos = [];
let genId = 1;

export function add(_todo) {
  const todo = _todo;
  todo.id = genId;
  todos.push(todo);
  genId += 1;
}

export function get(id) {
  let idx = 0;
  for (idx; idx < todos.length; idx += 1) {
    if (todos[idx].id === id) {
      return todos[idx];
    }
  }
  return null;
}

export function remove(id) {
  let idx = 0;
  for (idx; idx < todos.length; idx += 1) {
    if (todos[idx].id === id) {
      todos.splice(idx, 1);
      return true;
    }
  }
  return false;
}

export function list() {
  return todos;
}
