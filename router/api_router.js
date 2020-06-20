const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/", (req, res) => {
  console.log("api hit");

  connection.query("SELECT * FROM todos", (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);
    res.json(data);
  });
});

module.exports = router;
