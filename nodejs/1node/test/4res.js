var http = require("http");
http.createServer().on('request',function(req,res){
    //服务器默认发送utf-8编码内容
    //浏览器不知道，所以要发送响应报头，否则默认gbk

    //设置头 文本类型 text/plain 就是传输普通文本  text/html 就是html 传输html标签
    
    /*res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end("中文解析");*/
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end("<p style='color:red'>hahaha<p>")

}).listen(3000,function(){
    console.log("server running on 3000");
})
