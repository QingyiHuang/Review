```javascript
$ajax('./time.php',{
    type:'POST',
    success:function(res){
        console.log(res)
    }
})
```

以上是个基础结构

```javascript
$ajax({
    url:'time.php',
    type:'POST',
    data:{id:1,name:'sd'},
    success:function(res){
    console.log(res)
}
})
```

```javascript
$ajax({
    url:'time.php',
    type:'GET',
    data:{id:1,name:'sd'},
    //设置响应体类型,一旦设置了datatype选项，就不再关心服务端相应的contenttype
    dataType:'json',
    beforeSend:function(xhr){//发送响应之前 用户体验，
       //$(.loading).fadeIn()
      console.log(xhr+'请求即将开始')  
    },
    success:function(res){
        //隐藏前端样式loading
        //res会根据服务端响应的content-type自动转换对象
        console.log(res)
    },
    error:function(xhr){
        //隐藏前端样式loading
        console.log(xhr)//请求状态不为200
    },
    complete:function(xhr){//不管成功或者失败都是完成 都会执行这个钩子 结束loading 特效
        //$(.loading).fadeOut()
        console.log(xhr)
    }
})
```

```javascript
//最常用//高度封装
$.get('time.php',{id:1},function(res){
    console.log(res)
})
$.post('time.php',{id:1},function(res){
    console.log(res)
})
//提供了个万能 指定就是获取JSON数据
$.getJSON('time.php',{id:1},function(res){
    console.log(res)
})
//明确请求方式是get还是post 然后选择快捷方法
```



## $(selector).load

```javascript
$(function($){
    $('#link').on('click',function(){
        var url = $(this).attr('href')
        $('#main').load(url+' #app>*')//空格+url里面的一个界面的其中一个节点放到#main中
        return false
    })
})
```

## 全局处理ajax

```javascript
$(document).ajaxStart(function(){
    //只要有ajax请求，就会执行
    $(.loading).fadeIn()
})
$(document).ajaxStop(function(){
    //只要有ajax请求结束，就会执行
     $(.loading).fadeOut()
})
```



