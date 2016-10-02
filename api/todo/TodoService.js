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
  return Todo.findByIdAndUpdate(id, { $set: { completed: todo.completed } }).exec();
}

export function remove(id) {
  return Todo.findByIdAndRemove(id).exec();
}
