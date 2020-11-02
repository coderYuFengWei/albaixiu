let mysql = require('mysql')

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'alibaixiu'
})

module.exports = {
    posts(req, callkack) {

    }
}