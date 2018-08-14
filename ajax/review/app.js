var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request',function(req,res){
    console.log(req.url)
    if(req.url==='/'){
        fs.readFile('./ajaxsendRequest.html',function(err,data){
            if(err){
                console.log(err)
            }else{
                res.end(data)
            }
        })
    }
    else if(req.url.indexOf('/data/')===0){
        fs.readFile('.'+req.url,function(err,data){
            if(err){
                return res.end("resources not found")
            }else{
                res.end(data)
            }
        })
    }
}).listen(3000,function(){
    console.log("server is running on 3000")
})