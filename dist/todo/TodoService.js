"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.list = list;

var _TodoModel = require("./TodoModel.js");

var _TodoModel2 = _interopRequireDefault(_TodoModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todos = [];
var task = new _TodoModel2.default("first task");
todos.push(task);

function add(_todo) {
  var todo = _todo;
  todo.id = todos.length;
  todos.push(todo);
}

function list() {
  return todos;
}