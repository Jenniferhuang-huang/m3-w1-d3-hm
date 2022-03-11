const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("CONTENT", { title: "Food blog page" });
});

module.exports = router;