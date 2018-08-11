/**
 * 服务器
 * 1加载http核心模块
 * 2使用http.createServer()创建一个web服务器
 * 返回一个Server实例
 */
var http = require("http");
var fs = require("fs");
var data1;
fs.readFile("./data.json",function(err,data){
    if(err){
        console.log(err)
    }else{
        data1=data.toString();
    }
})
var server = http.createServer();

//当收到请求，执行回调函数 当客户端请求过来自动触发request请求事件
//然后执行回调函数,
//监听3000端口 收到响应不反馈

    /*server.on('request',function(){
        console.log("cmd显示3000端口有请求")
    }).listen(3000,function(){
        console.log("http:127.0.0.1:3000")
    });*/

//request请求事件处理函数，需要接受两个参数：
//Request 请求对象
//    请求对象可以获取客户端的一些请求信息，例如请求路径
//Response 响应对象
//     响应对象可以用来给客户吨发送响应信息.

//response 对象有write方法，给client发送响应数据
//write 可以使用多次，但是一定要用end 结束响应
server.on('request',function(req,res){
    //req.url 就是本地端口号后的路径，即请求路径
    console.log(req.url);

    //res write后一定要end
    res.write(data1);
    res.end();
}).listen(3000,function(){
    console.log("localhost:3000");
})