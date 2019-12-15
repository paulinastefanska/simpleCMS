const express = require("express");
const router = express.Router();

router.all("*", (req, res, next) => {
  if (!req.session.admin) {
    res.redirect("login");
    return;
  }
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("admin", { title: "Admin" });
});

module.exports = router;
