module.exports = {

    showIndexpages(req, res) {
        res.render('index')
    },
    showDetailpages(req, res) {
        res.render('detail')
    },
    showListpages(req, res) {
        res.render('list')
    },
    showCategoriespages(req, res) {
        res.render('admin/categories')
    },
    showCommentspages(req, res) {
        res.render('admin/comments')
    },
    showAdminIndexpages(req, res) {
        res.render('admin/index')
    },
    showLOginpages(req, res) {
        res.render('admin/login')
    },
    shownav_menuspages(req, res) {
        res.render('admin/nav-menus')
    },
    showPasswordpages(req, res) {
        res.render('admin/password-reset')
    },
    showPost_Addpages(req, res) {
        res.render('admin/post-add')
    },
    showPostspages(req, res) {
        res.render('admin/posts')
    },
    showProfilepages(req, res) {
        res.render('admin/profile')
    },
    showSettingspages(req, res) {
        res.render('admin/settings')
    },
    showSlidespages(req, res) {
        res.render('admin/slides')
    },
    showUserspages(req, res) {
        res.render('admin/users')
    },


}