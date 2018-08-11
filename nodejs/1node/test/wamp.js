var http=require('http')
var fs = require("fs")
var server=http.createServer()

server.on('request',function(req,res){
    if(req.url!=='/'){
        fs.readFile('./'+req.url,function(err,data){
            if(err){
                return res.end('404 not found')
            }else{
                res.end(data)
            }
        })
    }else{
        res.end("no")
    }
}).listen(3000,function(){
    console.log("aphache")
})