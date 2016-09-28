"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.getAll = getAll;
exports.get = get;
exports.update = update;
exports.remove = remove;

var _TodoModel = require("./TodoModel.js");

var _TodoModel2 = _interopRequireDefault(_TodoModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function add(todo) {
  return todo.save();
}

function getAll() {
  return _TodoModel2.default.find().exec();
}

function get(id) {
  return _TodoModel2.default.findById(id).exec();
}

function update(id, todo) {
  return _TodoModel2.default.update({ _id: id }, { $set: { description: todo.description,
      completed: todo.completed } }).exec();
}

function remove(id) {
  return _TodoModel2.default.remove({ _id: id }).exec();
}