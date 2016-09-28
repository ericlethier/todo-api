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

/* eslint-disable consistent-return  */
/* eslint-disable no-param-reassign  */
export function update(id, _todo, cb) {
  Todo.findById(id, (err, todo) => {
    if (err) {
      return cb(err, null);
    }
    todo.description = _todo.description;
    todo.completed = _todo.completed;
    todo.save((errSave) => {
      if (errSave) {
        return cb(errSave, null);
      }
      return cb(null, todo);
    });
  });
}
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return  */

export function remove(id) {
  return Todo.remove({ _id: id }).exec();
}
