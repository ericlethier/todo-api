"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressValidator = require("express-validator");

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _TodoSeed = require("./todo/TodoSeed");

var _TodoSeed2 = _interopRequireDefault(_TodoSeed);

var _TodoRoutes = require("./todo/TodoRoutes");

var _TodoRoutes2 = _interopRequireDefault(_TodoRoutes);

var _development = require("./config/env/development");

var _development2 = _interopRequireDefault(_development);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// init the mongodb connection
_mongoose2.default.Promise = _bluebird2.default;
_mongoose2.default.connect(_development2.default.db, { server: { socketOptions: { keepAlive: 1 } } });
_mongoose2.default.connection.on("error", function () {
  throw new Error("unable to connect to database: " + _development2.default.db);
});

// init the todo list
(0, _TodoSeed2.default)();

app.use((0, _morgan2.default)("dev"));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use((0, _expressValidator2.default)());

app.use("/api/v1", _TodoRoutes2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    res.status(err.status).json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  res.status(err.status).json({
    message: err.message,
    error: {}
  });
});

module.exports = app;