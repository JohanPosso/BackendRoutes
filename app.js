const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
// require('./public')
// Al Routes
const routerApi = require("./routes/index");

const bp = require("body-parser");
const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

routerApi(app);
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Esta es la pagina principal");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || process.env.PORT);
  res.render("error");
});

app.listen(process.env.PORT, () => {
  console.log("*************************");
  console.log("*************************");
  console.log("*************************");
  console.log("Port in running in:", process.env.PORT);
  console.log("*************************");
  console.log("*************************");
  console.log("*************************");
});
module.exports = app;
