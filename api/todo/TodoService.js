import Todo from "./TodoModel.js";

export function add(todo) {
  return todo.save();
}

export function getAll() {
  return Todo.find().exec();
}

export function get(id) {
  return Todo.findById(id).exec();
}

export function update(id, todo) {
  return Todo.update({ _id: id }, { $set: { description: todo.description,
     completed: todo.completed } }).exec();
}

export function remove(id) {
  return Todo.remove({ _id: id }).exec();
}
