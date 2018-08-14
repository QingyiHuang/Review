var fs = require('fs')
/**
 * 如果三个异步api操作的话 无法保证他们的执行顺序
 * 我们在每个操作后用回调函数就可以保证执行顺序
 */

fs.readFile('./data/a.txt','utf8',function(err,data){
    if(err){
        //抛出异常
        //1阻止程序执行
        //2直接打印错误消息到控制台
        throw err
    }else{
        console.log(data)
        fs.readFile('./data/b.txt','utf8',function(err,data){
            if(err){
                //抛出异常
                //1阻止程序执行
                //2直接打印错误消息到控制台
                throw err
            }else{
                console.log(data)
                fs.readFile('./data/c.txt','utf8',function(err,data){
                    if(err){
                        //抛出异常
                        //1阻止程序执行
                        //2直接打印错误消息到控制台
                        throw err
                    }else{
                        console.log(data)
                    }
                })
            }
        })
    }
})

