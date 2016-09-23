import * as express from "express";
// import Todo from "./TodoModel.js";
import * as TodoService from "./TodoService.js";

const router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */
router.get("/", (req, res) => {
  res.json({ message: "Todo API" });
});

router.get("/todos", (req, res) => {
  res.json(TodoService.list());
});

router.post("/todos", (req, res) => {
  res.json({ message: "Not implemented" });
});

router.get("/todos/:id", (req, res) => {
  res.json({ message: "Not implemented" });
});

router.put("/todos/:id", (req, res) => {
  res.json({ message: "Not implemented" });
});

router.delete("/todos/:id", (req, res) => {
  res.json({ message: "Not implemented" });
});

module.exports = router;
