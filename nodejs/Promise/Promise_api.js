var fs = require('fs')

/**
 * 创建Promise 容器  本身不异步，内部异步 
 * 1容器一旦创建，开始执行代码
 */
var p1=new Promise(function(resolve,reject){
    fs.readFile('./data/a.txt','utf8',function(err,data){
        if(err){
            //把容器的pending状态改为reject
            reject(err)
        }else{
            //把容器的pending状态改为resolved
            //这里调用resove方法实际上就是then 方法传递的那个function
            resolve(data)
        }
    })
})
var p2=new Promise(function(resolve,reject){
    fs.readFile('./data/b.txt','utf8',function(err,data){
        if(err){
            //把容器的pending状态改为reject
            reject(err)
        }else{
            //把容器的pending状态改为resolved
            //这里调用resove方法实际上就是then 方法传递的那个function
            resolve(data)
        }
    })
})
var p3=new Promise(function(resolve,reject){
    fs.readFile('./data/c.txt','utf8',function(err,data){
        if(err){
            //把容器的pending状态改为reject
            reject(err)
        }else{
            //把容器的pending状态改为resolved
            //这里调用resove方法实际上就是then 方法传递的那个function
            resolve(data)
        }
    })
})

//当p1成功了， then    //根据参数顺序调用的
//then方法接收的function 就是 上面的resolve函数
p1
    .then(function(data,){
    console.log(data)
    //当p1成功 ruturn的结果就可以在后面then中的function中接收到
    //我们可以return一个promise对象
    //当return 一个promise对象 则后面then中的参数1作为p2的resove ，第二
    //个参数作为p2的reject
    return p2
    },function(err){
        console.log('error'+err)
    })
    .then(function(data){
        console.log(data)
        return p3        //return 一个 promise
    },function(err){
        console.log(err)
    })
    .then(function(data){
        console.log(data)
    },function(err){
        console.log(err)
    })