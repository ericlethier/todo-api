import * as express from "express";

const router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */
router.get("/", (req, res) => {
  res.json({ message: "HR Marketing API" });
});

module.exports = router;
