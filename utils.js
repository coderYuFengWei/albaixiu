let mysql = require('mysql')


let connect = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'alibaixiu',
    dateStrings: true
})


module.exports = connect