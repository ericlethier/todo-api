import * as express from "express";
// import Todo from "./TodoModel.js";
import * as TodoService from "./TodoService.js";

const router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */
router.get("/", (req, res) => {
  res.json({
    message: "Todo API",
  });
});

router.get("/todos", (req, res) => {
  res.json(TodoService.list());
});

router.post("/todos", (req, res) => {
  res.json({
    message: "Not implemented",
  });
});

router.get("/todos/:id", (req, res) => {
  const todo = TodoService.get(parseInt(req.params.id, 10));
  if (todo != null) {
    res.json(todo);
  } else {
    res.json({
      message: "Todo doesnt exist.",
    });
  }
});

router.put("/todos/:id", (req, res) => {
  res.json({
    message: "Not implemented",
  });
});

router.delete("/todos/:id", (req, res) => {
  console.log("params", req.params);
  if (TodoService.remove(parseInt(req.params.id, 10))) {
    res.json({
      message: "Todo removed.",
    });
  } else {
    res.json({
      message: "Todo doesnt exist.",
    });
  }
});

module.exports = router;
