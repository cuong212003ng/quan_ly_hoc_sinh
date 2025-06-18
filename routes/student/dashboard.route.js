const express = require("express");
const { dashboard } = require("../../controllers/student/dashboard.controller");
const route = express.Router();

const controller = require("../../controllers/student/dashboard.controller");

route.get("/", controller.dashboard);

module.exports = route;