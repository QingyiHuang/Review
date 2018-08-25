/**
 * method   url   params  done回调
 */
function ajax(method,url,params,done){
    method = method.toUpperCase()
    var xhr = new XMLHttpRequest()
    xhr.open(method,url)

    if(typeof params ==='object'){
        var tempArr =[]
        for(var key in params){
            var value = params[key]
            tempArr.push(key+'='+value)
        }
        //tempArr =>['key1=value1','key2=value2']
        params = tempArr.join('&')
    }

    if(method==='GET'){
        url+='?'+params
    }
    var data = null
    if(method==='POST'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        data = params
    }

    xhr.send(data)
    xhr.onreadystatechange=function(){
        if(this.readyState===4){
            return console.log(this.responseText)
        }
    }
}
//设置键等于值 就