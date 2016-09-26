import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import initTodos from "./todo/TodoSeed";
import routes from "./todo/TodoRoutes";

// init the todo list
initTodos();

const app = express();
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

app.use("/", routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(err.status).json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status).json({
    message: err.message,
    error: {},
  });
});


module.exports = app;
