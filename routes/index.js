const express = require("express");

const users = require("./users");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v2", router);
  router.use("/users", users);
}

module.exports = routerApi;
