//使用expre框架搭建服务器
let express = require('express')
let router = require('./Router')
let bodyParser = require('body-parser')
let querystring = require('querystring')
let session = require('express-session')

// 创建服务器
let app = express()

// 设置默认引擎
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//设置bodyparser，接收post请求
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//添加session中间件
app.use(session({
    secret: 'james',
    resave: false,
    saveUninitialized: false
}))

// 托管静态资源
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))


// 监听端口并开启服务器
app.listen(5500, () => {
    console.log('你的服务器已经开启 http://127.0.0.1:5500')
})

// 注册中间件
app.use(router)

app.use(function (req, res, next) {

    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/login' || req.url.indexOf('/admin') == -1) {
        next()
    } else {
        res.redirect('/admin/login')
    }
})