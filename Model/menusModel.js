let conn = require('../utils.js')

module.exports = {
    //渲染菜单页面
    menusLoad(callback) {
        let sql = 'select value from `options` where id = 9'
        conn.query(sql, (err, result) => {
            if (err) {
                callback(err)
            } else {
                callback(null, JSON.parse(result[0].value))
            }
        })
    },

    //点击按钮新增导航
    menusAdd(obj, callback) {
        let sql = 'select value from `options` where id = 9'

        conn.query(sql, (err, result) => {
            if (err) {
                callback(err)
            } else {
                let arr = JSON.parse(result[0].value)
                arr.push(obj)
                let str = JSON.stringify(arr)
                sql = `update options set value = '${str}' where id = 9`

                conn.query(sql, (err1) => {
                    if (err1) {
                        callback(err1)
                    } else {
                        callback(null)
                    }
                })
            }
        })

    }


}