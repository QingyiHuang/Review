var http=require("http");
var os=require("os");
var fs=require('fs');
var pp=[{
    name:'咒',
    price:990
},{
    jeje:"dsd"
}];
http.createServer().on('request',function(req,res){
    if(req.url=='/'){
        res.end("主页");
    }else if(req.url=='/register'){
        res.end("register");
    }else{
        //二进制数据或者字符串
        res.end(JSON.stringify(pp));
        console.log("客户端"+req.socket.remoteAddress+"|||"+req.socket.remotePort)
    }
//直接在end里面传数据也可以
}).listen(3000,function(){
    console.log("3000端口开启");
    //console.log(os.cpus());//cpu
    //console.log(os.totalmem());//内存大小8437919744
    
})
/**
 * JSON.parse('[]')转非数组
 * JSON.stringify([])转字符串
 */
