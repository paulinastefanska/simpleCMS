const express = require("express");
const News = require("../models/news");
const router = express.Router();

router.all("*", (req, res, next) => {
  if (!req.session.admin) {
    res.redirect("login");
    return;
  }
  next();
});

/* GET home page. */
router.get("/", (req, res) => {
  res.render("admin/index", { title: "Admin" });
});

/* GET news add page. */
router.get("/news/add", (req, res) => {
  res.render("admin/news-form", { title: "Add new article" });
});

module.exports = router;
