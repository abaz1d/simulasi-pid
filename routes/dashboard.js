var express = require("express");
var router = express.Router();

module.exports = function (db) {
  /* GET home page. */
  router.get("/", function (req, res, next) {
    res.render("dashboard/dashboard", { title: "Polines" });
  });

  // POST
  router.post("/", function (req, res, next) {
    const {
      mode = null,
      kp = null,
      ki = null,
      kd = null,
      set_point = null,
      time_sampling = null,
    } = req.body;
    // const query = `
    //   UPDATE users
    //   SET setpoint = $1, kp = $2, ki = $3, kd = $4, output_rpm = $5, kelompok = $6, time_sampling = $7
    //   WHERE id = $8
    //   `;
    // const values = [
    //   set_point,
    //   kp,
    //   ki,
    //   kd,
    //   0,
    //   "1",
    //   time_sampling,
    //   req.body.id, // Assuming `id` is passed in the request body
    // ];
    console.log("INI YANG POST DARI DEPAN", req.body);
  });
  return router;
};
