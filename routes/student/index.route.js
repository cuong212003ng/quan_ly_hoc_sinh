const dashboardRoute = require("./dashboard.route");
const informationRoute = require("./information.route");

module.exports = (app) => {
  app.use("/", dashboardRoute);
  app.use("/information", informationRoute);
};

 