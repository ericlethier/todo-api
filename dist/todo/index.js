"use strict";

var _express = require("express");

var express = _interopRequireWildcard(_express);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = express.Router(); // eslint-disable-line new-cap

/* GET home page. */
router.get("/", function (req, res) {
  res.json({ message: "HR Marketing API" });
});

module.exports = router;