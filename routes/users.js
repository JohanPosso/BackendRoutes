const express = require("express");
const router = express.Router();

const dataJSON = require("../public/javascripts/user.json");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json(dataJSON);
});

/* GET unique users listing. */
router.get("/:id", (req, res, next) => {
  const user = req.params.id;
  const resolve = dataJSON.filter((el) => el.id === user);

  res.json(resolve);
});

/* POST users listing. */

router.post("/", (req, res) => {
  const body = req.body;
  const newUser = body;
  dataJSON.push(newUser);
  res.json(dataJSON);
});

/* PUT users listing. */

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const item = dataJSON.find((item) => item.id === id);
  const index = dataJSON.indexOf(item);
  dataJSON[index] = req.body;
  res.json(dataJSON);
});

/* DELETE users listing. */

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = dataJSON.findIndex((item) => item.id === id);

  dataJSON.splice(index, 1);
  res.json(dataJSON);
});
module.exports = router;
