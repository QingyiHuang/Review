var http = require("http")
var fs = require('fs')
var server = http.createServer();

server.on('request',function(req,res){
    if(req.url==='/'){
        fs.readFile('./resources/index.html',function(err,data){
            if(err){
                console.log(err);
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end("404");
            }else{
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(data);
            }
        })
    }else if(req.url==='/a'){
        fs.readFile('./resources/favicon.ico',function(err,data){
            if(err){
                console.log(err); 
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                return res.end("404");
            }else{
                //针对 文字 才有编码 url:统一资源定位符
                res.setHeader('Content-type','image/jpeg')
                res.end(data);
            }
        })
    }
}).listen(3000,function(){
    console.log('server is running on 3000')
})