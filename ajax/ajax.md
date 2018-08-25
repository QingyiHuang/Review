```javascript
var xhr = new XMLHttpRequest()
xhr.open('POST','SDS.JSON')
xhr.setRequestHeader('hqy','hqy')//token,'sd'
xhr.setRequsetHeader('Content-type','application/json')
xhr.send('{"li":"123"}')

var xhr = new XMLHttpRequest()
xhr.open('POST','SDS.JSON')
xhr.setRequestHeader('hqy','hqy')//token,'sd'
xhr.setRequsetHeader('Content-type','application/x-www-form-urlencoded')
xhr.send('{"li":"123"}')
```

一个基本

```javascript
var xhr = new XMLHttpRequest()
xhr.open('get','time.php')
xhr.send(null)
xhr.onload =function(){//等价于onreadyStateChange
    console.log(this.readyState)
    console.log(this.responseText)
}
xhr.onreadystatechange=function(){
    if(this.readyState ===4&&this.status){
        console.log(this.responseText)
    }
}
```

