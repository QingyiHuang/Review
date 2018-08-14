var express = require('express')
var artTemplate = require('express-art-template')
var bodyParser = require('body-parser')
var router = require('./router')
/**
 * app
 *  创建服务 舰艇端口
 * 模板引擎 body-parser
 * ’ */
var app = express()
//body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.engine('html',artTemplate)
app.use('/node_modules',express.static('./node_modules'))
app.use('/public',express.static('./public'))
//把路由容器挂载到app服务中
app.use(router)

app.listen(3000,function(){
    console.log("server is running on 3000")
})