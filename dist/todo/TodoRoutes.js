"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _express = require("express");

var express = _interopRequireWildcard(_express);

var _TodoModel = require("./TodoModel.js");

var _TodoModel2 = _interopRequireDefault(_TodoModel);

var _TodoService = require("./TodoService.js");

var TodoService = _interopRequireWildcard(_TodoService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */
router.get("/", function (req, res) {
  res.json({
    message: "Todo API v1"
  });
});

router.get("/todos", function (req, res) {
  TodoService.getAll().then(function (todos) {
    return res.json(todos);
  }).catch(function (err) {
    return res.send(err);
  });
});

router.get("/todos/:id", function (req, res) {
  TodoService.get(req.params.id).then(function (todo) {
    if (todo !== null) {
      return res.json(todo);
    }
    return res.json({});
  }).catch(function (err) {
    return res.send(err);
  });
});

/* eslint-disable consistent-return  */
router.post("/todos", function (req, res) {
  req.checkBody("description", "Invalid description.").notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var _ret = function () {
      var response = { errors: [] };
      errors.forEach(function (err) {
        response.errors.push(err.msg);
      });
      return {
        v: res.json(response)
      };
    }();

    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
  }

  var todo = new _TodoModel2.default();
  todo.description = req.body.description;
  todo.completed = false;
  TodoService.add(todo).then(function (_todo) {
    return res.json(_todo);
  }).catch(function (err) {
    return res.send(err);
  });
});
/* eslint-disable consistent-return  */

router.put("/todos/:id", function (req, res) {
  req.checkBody("description", "Invalid description.").notEmpty();
  req.checkBody("completed", "Invalid completed.").notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var _ret2 = function () {
      var response = { errors: [] };
      errors.forEach(function (err) {
        response.errors.push(err.msg);
      });
      return {
        v: res.json(response)
      };
    }();

    if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
  }
  var todo = new _TodoModel2.default();
  todo.description = req.body.description;
  todo.completed = req.body.completed;

  TodoService.update(req.params.id, todo).then(function (_todo) {
    return res.json({ message: "Todo updated." });
  }).catch(function (err) {
    return res.send(err);
  });
});

/* eslint-disable no-underscore-dangle  */
router.delete("/todos/:id", function (req, res) {
  TodoService.remove(req.params.id).then(function () {
    return res.json({ message: "Todo deleted." });
  }).catch(function (err) {
    return res.send(err);
  });
});
/* eslint-disable no-underscore-dangle  */

module.exports = router;