module.exports.dashboard = (req, res) => {
    res.render("student/pages/dashboard/index", {
        titlePage: "Dashboard"
    });
}