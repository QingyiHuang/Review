## SuperAgent 是一个轻量的，渐进的ajaxapi 适用于nodejs

#### 请求基础

```javascript
request
	.get('/api')
    .end(function(res){//发送请求
    
})
request('get','/api').end(cb)//请求方法可以通过参数传递
```

## 

node 客户端也允许提供绝对路径

request.get('http://ww.----')

## 设置头

```javascript
request
	.get('/search')
	.set('accept','application/json')
	.end(cb)
//传递对象
	.set({'accept':'application/json','foo':bar})
```

## get请求

​	当使用get请求传递查询字符串的时候，用.query()方法，传递一个对象就可以

```javascript
request
	.get('/search')
	.query({id:1,name:'hqy'})
    .end(function(res){
    
})
//也可以直接传递字符串
.query('search=Manny&range=1..5') 多个字串query 默认用&拼接
```

## Post Put

```
request.post('/user')
    .set('Content-Type', 'application/json')
    .send('{"name":"tj","pet":"tobi"}')
    .end(callback)
    //也可以多次send
```

 默认发送字符串，将设置`Content-type`为`application/x-www-form-urlencoded`,多次调用将会通过`&`来连接，这里的结果为`name=tj&pet=tobi`: 

```javascript
request.post('/user')
    .send('name=tj')
    .send('pet=tobi')
    .end(callback);
```

## Content-Type

常见的方案是使用`.set()`方法:

```
 request.post('/user')



   .set('Content-Type', 'application/json')
```

 一个简便的方法是调用`.type()`方法，传递一个规范的`MIME`名称，包括`type/subtype`,或者一个简单的后缀就像`xml`,`json`,`png`这样，例如:

```
 request.post('/user')
   .type('application/json')

 request.post('/user')
   .type('json')

 request.post('/user')
   .type('png')
```

### 设置接受类型

```javascript
跟.type()简便方法一样，这里也可以调用.accept()方法来设置接受类型，这个值将会被request.types所引用，支持传递一个规范的MIME名称，包括type/subtype,或者一个简单的后缀就像xml,json,png这样,例如:
request.get('/user')
   .accept('application/json')
 
 request.get('/user')
   .accept('json')
 
 request.get('/user')
   .accept('png')
```

### 查询字符串

当用`.send(obj)`方法来发送一个post请求，并且希望传递一些查询字符串，可以调用`.query()`方法,比如向`?format=json&dest=/login`发送post请求: 

```javascript
request
    .post('/')
    .query({ format: 'json' })
     .query({ dest: '/login' })
    .send({ post: 'data', here: 'wahoo' })
     .end(callback);

```

`application/x-www-form-urlencoded`,`application/json`,`multipart/form-data`. 

### 解析响应内容

`res.body`是解析后的内容对象,比如一个请求响应`'{"user":{"name":"tobi"}}'`字符串,`res.body.user.name`将会返回`tobi`,同样的，`x-www-form-urlencoded`格式的`user[name]=tobi`解析完的值，也是一样的. 



application/x-www-form-urlencoded不是不能上传文件，是只能上传文本格式的文件，multipart/form-data是将文件以二进制的形式上传，这样可以实现多种类型的文件上传 

`application/json`和`application/x-www-form-urlencoded`,可以通过访问`res.body`来访问解析对象. 

## 中止请求

可以通过`req.abort()`来中止请求. 

### 基础验证

nodejs客户端可以通过两种方式来达到验证的目的,第一个是传递一个像这样的url,`user:pass`:

```
request.get('http://tobi:learnboost[@local](/user/local)').end(callback);
```

 第二种是调用`.auth()`方法:

```javascript
request
  .get('http://local')
  .auth('tobo', 'learnboost')
  .end(callback);
```

### 管道数据

nodeJS客户端允许一个请求流来输送数据，碧如请求一个文件为输出流

var 