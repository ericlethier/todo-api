"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TodoModel = require("./TodoModel.js");

var _TodoModel2 = _interopRequireDefault(_TodoModel);

var _TodoService = require("./TodoService.js");

var TodoService = _interopRequireWildcard(_TodoService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initTodos() {
  var todo1 = new _TodoModel2.default();
  todo1.description = "first task";
  todo1.completed = false;
  var todo2 = new _TodoModel2.default();
  todo2.description = "second task";
  todo2.completed = false;
  TodoService.add(todo1);
  TodoService.add(todo2);
}

exports.default = initTodos;