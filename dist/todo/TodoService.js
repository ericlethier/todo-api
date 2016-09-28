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

/* eslint-disable consistent-return  */
/* eslint-disable no-param-reassign  */
function update(id, _todo, cb) {
  _TodoModel2.default.findById(id, function (err, todo) {
    if (err) {
      return cb(err, null);
    }
    todo.description = _todo.description;
    todo.completed = _todo.completed;
    todo.save(function (errSave) {
      if (errSave) {
        return cb(errSave, null);
      }
      return cb(null, todo);
    });
  });
}
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return  */

function remove(id) {
  return _TodoModel2.default.remove({ _id: id }).exec();
}