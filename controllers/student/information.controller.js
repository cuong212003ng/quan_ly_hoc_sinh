module.exports.information = (req, res) => {
    res.render("student/pages/information/index", {
        titlePage: "Thông tin cá nhân"
    });
}