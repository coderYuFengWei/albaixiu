let loginModel = require('../Model/loginModel.js')



module.exports = {
    loginPage(req, res) {

        let obj = req.body
        loginModel.longin(obj.email, (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: '服务器异常'
                })
            } else {
                if (data) {
                    if (data.password === obj.password) {

                        req.session.isLogin = 'ture'

                        res.json({
                            code: 200,
                            msg: '登陆成功'
                        })
                    } else {
                        res.json({
                            code: 400,
                            msg: '密码输入错误'
                        })
                    }
                } else {
                    res.json({
                        code: 400,
                        msg: '邮箱输入错误'
                    })
                }
            }
        })
    }
}