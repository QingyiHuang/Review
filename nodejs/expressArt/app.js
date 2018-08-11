var express = require('express')
var artTemplate = require('express-art-template')
var bodyParser = require('body-parser')

var app = express()
//配置body-parser中间件，专门解析表单post请求体
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var comment=[{
    name:"完美世界",
    message:"时不我待",
    dataTime:"2018/8/12"
}]

//配置使用art-template，第一个参数表示，渲染以.art结尾的文件，使用artTemplate
//express-art-template依赖 arttemplate

//express 给Response提供一个方法 render ，需要配置模板引擎才能使用
//res.render('模板名',{模版}) 第一个参数默认去项目中的view去找模板文件
//express 有一个约定，开发人员把视图放在views里面
//想修改路径：app.set('views',render渲染的默认路径)
app.engine('html',artTemplate)//html后缀的art
app.use('/public',express.static('./public'))

app.get('/',function(req,res){
    res.render('index.html',{
        comments:comment
    })
})
app.get('/post',function(req,res){
    res.render('post.html')
})
//post请求方式进行/post时候，利用不同请求方法让一个请求路径使用多次
//req.query只是get请求
app.post('/post',function(req,res){
    var comment1=req.body
    comment1.dataTime="2018年8月11日 10:08:30"
    comment.unshift(comment1)
    res.redirect('/')
})
//express中获取post表单插件 body

/*app.get('/pinglun',function(req,res){
    var comment1=req.query
    comment1.dataTime='2018年8月11日 09:43:30'
    comment.unshift(comment1)
    res.redirect('/')
})*/

app.listen(3000,function(){
    console.log("server is running on 3000")
})