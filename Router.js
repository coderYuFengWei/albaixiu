let express = require('express')
let pagesCtrl = require('./Controller/pagesController')
let userCtrl = require('./Controller/userCtrl')
let postCtrl = require('./Controller/postCtrl')
let menusCtl = require('./Controller/menusCtl.js')

// 创建路由实例
let router = express.Router()

// 路径匹配
router.get('/index', pagesCtrl.showIndexpages)
    .get('/detail', pagesCtrl.showDetailpages)
    .get('/list', pagesCtrl.showListpages)


    .get('/admin/categories', pagesCtrl.showCategoriespages)
    .get('/admin/comments', pagesCtrl.showCommentspages)
    .get('/admin/index', pagesCtrl.showAdminIndexpages)
    .get('/admin/login', pagesCtrl.showLOginpages)
    .get('/admin/nav-menus', pagesCtrl.shownav_menuspages)
    .get('/admin/password-reset', pagesCtrl.showPasswordpages)
    .get('/admin/post-add', pagesCtrl.showPost_Addpages)
    .get('/admin/posts', pagesCtrl.showPostspages)
    .get('/admin/profile', pagesCtrl.showProfilepages)
    .get('/admin/settings', pagesCtrl.showSettingspages)
    .get('/admin/slides', pagesCtrl.showSlidespages)
    .get('/admin/users', pagesCtrl.showUserspages)



    //具体业务逻辑
    //实现登录
    .post('/login', userCtrl.loginPage)
    // 实现文章页面渲染
    .get('/posts', postCtrl.posts)
    //实现菜单页面的渲染
    .get('/menusLoad', menusCtl.menusLoad)
    //实现导航新增
    .post('/menusAdd', menusCtl.menusAdd)
    //点击删除按钮删除菜单
    .get('/menusDel', menusCtl.menusDel)







// 往外暴露
module.exports = router