var http = require("http")
var fs= require("fs")
var server =http.createServer()
/**
 * 得到列表目录名，然后将文件名目录名替换到ftp.html中
 * 1.fs.readdir
 */
server.on('request',function(req,res){
    fs.readFile('./ftp.html',function(err,data){
        
        if(err){
            return console.log(err);
        }else{
            fs.readdir('./',function(err,files){
                if(err){
                    return console.log('目录')
                }else{
                    var content='';
                    files.forEach(function(item){
                        content+=`
                        <tr>
                        <td data-value="apple/"><a class="icon dir" href="./">${item}/</a></td>
                        <td class="detailsColumn" data-value="0"></td>
                        <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                        <tr>
                    `
                    })
                    data = data.toString().replace('^_^',content)
                    res.end(data)
                }
            })
        }
    })

    console.log("来自:"+req.socket.remoteAddress+"的访问")
}).listen(3000,function(){
    console.log("running")
})