const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("main/index");
});

router.get("/home", function (req, res) {
  res.render("pages/home");
});
router.get("/contact", function (req, res) {
    res.render("pages/contact");
  });
  router.get("/Support_staff", function (req, res) {
    res.render("pages/Support_staff");
  });
  router.get("/accademics", function (req, res) {
    res.render("pages/accademics");
  });
  router.get("/apply", function (req, res) {
    res.render("pages/apply");
  });
  router.get("/galary", function (req, res) {
    res.render("pages/galary");
  });
  router.get("/clubs", function (req, res) {
    res.render("pages/clubs");
  });


module.exports = router;
