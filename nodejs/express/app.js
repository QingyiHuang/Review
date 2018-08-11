var express = require('express')



//创建服务器==http.createServer
var app = express()


//公开指定目录/直接通过/public/xx
//当没有第一个参数 则可以省略/public
//当第一个参数改为/a/ 必须这么些路径/a/ 就是别名
app.use('/public',express.static('./public'))

//当服务器收到get请求 执行回调函数.get .post
app.get('/',function(req,res){
    res.send('<h1 align="center">首页<h1>')
})
app.get('/about',function(req,res){
    res.send('hello about')
})
app.get('/bingo',function(req,res){
    res.send('hello .........')
})

app.listen(3000,function(){
    console.log("3000 is running")
})