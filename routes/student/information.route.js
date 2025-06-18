const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.render("student/pages/information/index");
});

module.exports = route;