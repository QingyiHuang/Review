//已经npm install art-template
//模块运用art-template
var template=require('art-template')
var http=require('http')
var fs=require('fs')
var server = http.createServer()

server.on('request',function(req,res){
    fs.readFile('./artUse2.html',function(err,data){
        if(err){
            console.log(err)
        }else{
            var tpdata=template.render(data.toString(),{
                title:'我是一个人',
                name:'bingo',
                name2:'星际争霸',
                doing:'泡妞',
                games:{
                    '魔兽':'112',
                    '守望先锋':'钻石'
                }
            })  
        }
        res.end(tpdata)
    })
}).listen(3000,function(){
    console.log("running on net")
})

