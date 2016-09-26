import * as express from "express";
import Todo from "./TodoModel.js";
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
  const todo = new Todo(req.body.description);
  if (TodoService.add(todo)) {
    res.json({
      message: "Todo added.",
    });
  } else {
    res.json({
      error: "Todo not added.",
    });
  }
});

router.get("/todos/:id", (req, res) => {
  const todo = TodoService.get(parseInt(req.params.id, 10));
  if (todo != null) {
    res.json(todo);
  } else {
    res.json({
      error: "Todo doesnt exist.",
    });
  }
});

router.put("/todos/:id", (req, res) => {
  const todo = new Todo(req.body.description);
  todo.id = parseInt(req.params.id, 10);
  todo.completed = req.body.completed;

  if (TodoService.update(todo)) {
    res.json({
      message: "Todo updated.",
    });
  } else {
    res.json({
      error: "Todo doesnt exist.",
    });
  }
});

router.delete("/todos/:id", (req, res) => {
  if (TodoService.remove(parseInt(req.params.id, 10))) {
    res.json({
      message: "Todo removed.",
    });
  } else {
    res.json({
      error: "Todo doesnt exist.",
    });
  }
});

module.exports = router;
