## 同源

- 域名 端口 协议  3个必须一样 才能使用 ajax
- 不同源如果需要相互请求，必须服务端和客户端配合才能完成

## 跨域

```javascript
<iframe src='http://www.baidu.com'><iframe>
img
script
link
```

link 链入一个文档，通过rel属性声明链入文档与当前文档之间的关系 如果是stylesheet 就会自动下载

- 1. JSONP 需要服务端配合，服务端按照客户端的要求返回一段 JavaScript 调用客户端的函数 
  2. 只能发送 GET 请求
     - [ ] 其原理就是在客户端借助 script 标签请求服务端的一个动态网页
     - [ ] 服务端的这个动态网页返回一 段带有函数调用的 JavaScript 全局函数调用的脚本，将原本需要返回给客户端的数据传递进去
     - [ ] 绝大多数情况都是采用 JSONP 的手段完成不同源地址之间的跨域请求

```javascript
<script src="http://api.zce.me/users.php?callback=foo"></script>
//http://api.zce.me/users.php?callback=foo返回的结果
foo(['我', '是', '你', '原', '本', '需', '要', '的', '数', '据'])
```

### 服务端设置

```javascript
headr('Content-Type:application/javascript')
```



## $jsonp

```javascript
$ajax({
    url:'http://www.baidu.com',
    dataType:'jsonp'
    success:function(res){
    console.log(res)
}
})
```

header('Access‐Control‐Allow‐Origin: *');

cors 服务端允许跨域资源共享 就可以使用ajax