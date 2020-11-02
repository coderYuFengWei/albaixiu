let mysql = require('mysql')

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'alibaixiu'
})


module.exports = {
    longin(email, callback) {
        let sql = `select * from users where email = '${email}'`
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err)
            } else {
                callback(null, results[0])
            }
        })
    }
}