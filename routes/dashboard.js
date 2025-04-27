var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("dashboard/dashboard", { title: "Polines" });
});

// POST
router.post("/", function (req, res, next) {
  console.log("INI YANG POST DARI DEPAN", req.body);
});
module.exports = router;
