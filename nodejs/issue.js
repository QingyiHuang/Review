    if(pathName.indexOf('/public/'===0)){
        //暴露public
        fs.readFile('.'+pathName,function(err,data){
            if(err){
                return console.log("404")
            }//else{
                res.end(data)
            //}
        })
    }
    else if (pathName.indexOf('/public/') === 0) {
        // /public/css/main.css
        // /public/js/main.js
        // /public/lib/jquery.js
        // 统一处理：
        //    如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
        //    所以我们就直接可以把请求路径当作文件路径来直接进行读取
        fs.readFile('.' + pathName, function (err, data) {
          if (err) {
            return res.end('404 Not Found.')
          }
          res.end(data)
        })
    }