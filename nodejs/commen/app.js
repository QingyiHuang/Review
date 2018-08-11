var http = require("http")
var fs = require("fs")
var template = require("art-template")
var urlMo = require('url')

//统一处理，以/public/开头，认为我们要获取
//public中的资源，我们可以
//直接把请求路径当作文件路径进行读取
var comments=[]
http.createServer(function(req,res){
    //对于提交表单，解析url拿到query内容第二个参数为true可以直接将query转换为对象,且表单提交的路径不能判断，只能用url.parse()
    //获取pathname  不包含get请求后的?内容.....
    var parseObj = urlMo.parse(req.url,true)
    var pathName = parseObj.pathname

    if(pathName === '/'){
        fs.readFile('./views/index.html',function(err,data){
            if(err){
                return res.end('404 Not Found.')
            }else{
                fs.readFile('./data.json',function(err,data1){
                    if(err){
                        console.log(err)
                    }/*else{
                        var tp=template.render(data.toString(),{
                            comments:JSON.parse(data1)
                        })
                        res.end(tp)
                    }*/
                    var htmlStr = template.render(data.toString(), {
                        comments: comments
                      })
                    res.end(htmlStr)
                })

            }
        })
    } else if(pathName ==='/post'){
        fs.readFile('./views/post.html',function(err,data){
            if(err){
                return res.end('404 Not Found.')
            }//else{
                res.end(data)
            //}
        })
    } else if(pathName.indexOf('/public/')===0){
        //暴露public
        fs.readFile('.'+pathName,function(err,data){
            if(err){
                return res.end("resources not found")
            }else{
                res.end(data)
            }
        })
    }
    //?name=&value=对于表单提交请求路径，获取用户填写内容
    else if(pathName==='/pinglun'){
        //一次请求对应一次响应
        //1获取表单提交的数据 url.parse('url'true).query
        //2生成日期对象刀数据对象，存储到数组
        //3用户重定向首页
        var comment = parseObj.query
        comment.dataTime = '2018年8月10日 10:45:33'
        comments.unshift(comment)
        console.log(comments)
        //通过服务器让客户端重定下
        //1状态码设置为302时临时重定向 statusCode
        //2在响应头中通过Location告诉客户端，往哪儿重定向
        //setHeader
        //客户端收到响应状态码，就会自动去响应头找到Location，并自动发起新请求
        res.setHeader('Location','/')
        res.statusCode =302
        res.end()//结束响应     
    }else{
        fs.readFile('./view/404.html',function(err,data){
            if(err){
                return res.end('404 Not Found.')
            }//else{
                res.end(data)
            //}
        })
    }
}).listen(3000,function(){
    console.log("running on 3000")
})