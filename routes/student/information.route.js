const express = require("express");
const route = express.Router();

const controller = require("../../controllers/student/information.controller");

route.get("/", controller.information);

module.exports = route;