const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.render("student/pages/dashboard/index");
});

module.exports = route;