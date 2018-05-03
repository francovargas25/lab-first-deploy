const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyD3_SGLq6Z2d7xPDy5YWifonqf4AYT-7nI" });
});

module.exports = siteController;
