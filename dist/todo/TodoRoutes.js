"use strict";

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
    message: "Todo API"
  });
});

router.get("/todos", function (req, res) {
  res.json(TodoService.list());
});

router.post("/todos", function (req, res) {
  var todo = new _TodoModel2.default(req.body.description);
  if (TodoService.add(todo)) {
    res.json({
      message: "Todo added."
    });
  } else {
    res.json({
      error: "Todo not added."
    });
  }
});

router.get("/todos/:id", function (req, res) {
  var todo = TodoService.get(parseInt(req.params.id, 10));
  if (todo != null) {
    res.json(todo);
  } else {
    res.json({
      error: "Todo doesnt exist."
    });
  }
});

router.put("/todos/:id", function (req, res) {
  var todo = new _TodoModel2.default(req.body.description);
  todo.id = parseInt(req.params.id, 10);
  todo.completed = req.body.completed;

  if (TodoService.update(todo)) {
    res.json({
      message: "Todo updated."
    });
  } else {
    res.json({
      error: "Todo doesnt exist."
    });
  }
});

router.delete("/todos/:id", function (req, res) {
  if (TodoService.remove(parseInt(req.params.id, 10))) {
    res.json({
      message: "Todo removed."
    });
  } else {
    res.json({
      error: "Todo doesnt exist."
    });
  }
});

module.exports = router;