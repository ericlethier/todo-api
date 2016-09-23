"use strict";

var _express = require("express");

var express = _interopRequireWildcard(_express);

var _TodoService = require("./TodoService.js");

var TodoService = _interopRequireWildcard(_TodoService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */

// import Todo from "./TodoModel.js";
router.get("/", function (req, res) {
  res.json({ message: "Todo API" });
});

router.get("/todos", function (req, res) {
  res.json(TodoService.list());
});

router.post("/todos", function (req, res) {
  res.json({ message: "Not implemented" });
});

router.get("/todos/:id", function (req, res) {
  res.json({ message: "Not implemented" });
});

router.put("/todos/:id", function (req, res) {
  res.json({ message: "Not implemented" });
});

router.delete("/todos/:id", function (req, res) {
  res.json({ message: "Not implemented" });
});

module.exports = router;