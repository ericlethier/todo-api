import * as express from "express";
import Todo from "./TodoModel.js";
import * as TodoService from "./TodoService.js";

const router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */
router.get("/", (req, res) => {
  res.json({
    message: "Todo API v1",
  });
});

router.get("/todos", (req, res) => {
  TodoService.getAll()
  .then(todos => res.json(todos))
  .catch(err => res.send(err));
});

router.get("/todos/:id", (req, res) => {
  TodoService.get(req.params.id)
  .then((todo) => {
    if (todo !== null) {
      return res.json(todo);
    }
    return res.json({});
  })
  .catch(err => res.send(err));
});

/* eslint-disable consistent-return  */
router.post("/todos", (req, res) => {
  req.checkBody("description", "Invalid description.").notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    const response = { errors: [] };
    errors.forEach((err) => {
      response.errors.push(err.msg);
    });
    return res.json(response);
  }

  const todo = new Todo();
  todo.description = req.body.description;
  todo.completed = false;
  TodoService.add(todo)
  .then(_todo => res.json(_todo))
  .catch(err => res.send(err));
});
/* eslint-disable consistent-return  */

router.put("/todos/:id", (req, res) => {
  req.checkBody("description", "Invalid description.").notEmpty();
  req.checkBody("completed", "Invalid completed.").notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    const response = { errors: [] };
    errors.forEach((err) => {
      response.errors.push(err.msg);
    });
    return res.json(response);
  }
  const todo = new Todo();
  todo.description = req.body.description;
  todo.completed = req.body.completed;

  TodoService.update(req.params.id, todo)
  .then(_todo => res.json({ message: "Todo updated." }))
  .catch(err => res.send(err));
});

/* eslint-disable no-underscore-dangle  */
router.delete("/todos/:id", (req, res) => {
  TodoService.remove(req.params.id)
  .then(() => res.json({ message: "Todo deleted." }))
  .catch(err => res.send(err));
});
/* eslint-disable no-underscore-dangle  */

module.exports = router;
