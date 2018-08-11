var fs = require('fs');
/**
 * 读取文件
 * 第一个参数就是要读取的文件路径
 * 第二个参数是一个回调函数
 * 成功                      失败
    data 数据           data null
    error null          error 错误对象
 */
fs.readFile('./data.json',function(error,data){
    if(data){
        console.log(data);//输出十六进制数据
        console.log(data.toString());
    }else{
        console.log(error);
    }
});
/**
 * writeFile()
 * 第一个参数 路径  第二个参数内容 三 回调函数
 * //覆盖
 */
fs.writeFile('./data.json','{"color":"pink"}',function(err){
    if(err){
        console.log(err);
    }
});