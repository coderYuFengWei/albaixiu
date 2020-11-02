let menusModel = require('../Model/menusModel.js')

module.exports = {
    //获取数据渲染菜单页面
    menusLoad(req, res) {
        menusModel.menusLoad((err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: '获取数据失败'
                })
            } else {
                res.json({
                    code: 200,
                    msg: '获取数据成功',
                    data
                })
            }
        })
    },

    //新增导航
    menusAdd(req, res) {
        let obj = req.body
        obj.icon = 'fa fa-glass'
        menusModel.menusAdd(obj, err => {
            if (err) {
                res.json({
                    code: 400,
                    msg: '新增导航失败'
                })
            } else {
                res.json({
                    code: 200,
                    msg: '新增导航成功'
                })
            }
        })

    },

    //点击删除按钮删除菜单
    menusDel(req, res) {

    }
}