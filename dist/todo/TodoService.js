"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.get = get;
exports.remove = remove;
exports.list = list;
var todos = [];
var genId = 1;

function add(_todo) {
  var todo = _todo;
  todo.id = genId;
  todos.push(todo);
  genId += 1;
}

function get(id) {
  var idx = 0;
  for (idx; idx < todos.length; idx += 1) {
    if (todos[idx].id === id) {
      return todos[idx];
    }
  }
  return null;
}

function remove(id) {
  var idx = 0;
  for (idx; idx < todos.length; idx += 1) {
    if (todos[idx].id === id) {
      todos.splice(idx, 1);
      return true;
    }
  }
  return false;
}

function list() {
  return todos;
}