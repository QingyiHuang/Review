### 为什么node

学习node就是为了打开服务端这个黑盒子，

只有懂了解服务端才能更好的配合服务端开发人员，进行协同开发

nodejs是一门运行在服务端的javascript

### 市面上：

- java
- php
- python
- ruby
- .net
- Node js

nodejs 采用javascript 编程

node.js中的js

没有BOM DOM

构建于chrome  V8引擎之上

#### 主要应用

- 文件读写
- 网络服务的构建
- 网络通信
- http服务器
- .......

####事件驱动，异步操作   轻量高效---------------------nodejs特性

node 用事件驱动，非阻塞I/O模型，（异步）

### npm是最大的开源库生态系统

## fs 是file-system的简写，就是文件系统的意思

- 在Node中如果要进行文件操作，需要引入fs核心模块
- 在fs这个核心模块，就提供了所有的文件操作相关API
- fs.readFile读取文件

Node为js提供了很多服务器级别的API 核心模块

path 模块

## require:  加载一个文件中被导出的部分exports对象  exports中有很多属性

- 1在加载文件模块，并且执行里面的代码
- 2拿到被加载的文件模块，导出接口对象
- 在每个文件模块中都提供了一个对象exports[eI'cprt]
- 把所有需要外部访问的成员挂在到exports对象中
- 通过给exports添加多个属性来导出



#### CommonJs模块规范

1. 模块化：文件作用域，加载 导出模块  js本身不支持
   - 模块化，想拿require  导出部分才能被拿到exports

##exports 和 module.exports 的区别

- 每个模块中都有一个 module 对象

- module 对象中有一个 exports 对象

- 我们可以把需要导出的成员都挂载到 module.exports 接口对象中

- 也就是：`moudle.exports.xxx = xxx` 的方式

- 但是每次都 `moudle.exports.xxx = xxx` 很麻烦，点儿的太多了

- 所以 Node 为了你方便，同时在每一个模块中都提供了一个成员叫：`exports`

- `exports === module.exports` 结果为  `true`s

- 所以对于：`moudle.exports.xxx = xxx` 的方式 完全可以：`expots.xxx = xxx`

- 当一个模块需要导出单个成员的时候，这个时候必须使用：`module.exports = xxx` 的方式

- 不要使用 `exports = xxx` 不管用

- 因为每个模块最终向外 `return` 的是 `module.exports`

- 而 `exports` 只是 `module.exports` 的一个引用

- 所以即便你为 `exports = xx` 重新赋值，也不会影响 `module.exports`

- 但是有一种赋值方式比较特殊：`exports = module.exports` 这个用来重新建立引用关系的

  

```javascript
导出多成员
exports.a
exports.b
导出单个成员
module.exports={
    add:function(){ 
        
    },
    str:'sdsd'
}
module.exports=function(x,y){
    return x+y
}
{name:"zhangsan",sex:"男",age:"29"}.forEach(ele){console.log(ele)}
```



### 优先从缓存中加载，就是如果已经require过了，就会从缓存中拿到，不会重新执行

require 自己模块 需要相对路径，  require 核心模块和第三方模块不需要加相对路径

首/表示盘根目录



### 第三方模块

------->art-template---------->package.json-------------->main.js

main属性中记录了第三方包的入口模块

- 找到node_modules 找到arttemplate 目录，找下面package。json  找到main 然后找到入口模块
- 然后加载使用第三方包，
- 如果当前mudules中间没找到就会返回上级的mudules中去找。直到根目录



### npm init    npm install --save

## 自动重启 nodemon   --global已经装到全局   监听重启服务器

cnpm install --global nodemon    



### express中使用arttemplate

```javascript
npm install art-template   express-art-template --save
```

app.engine('html',artTemplate)//html后缀的art 

## express没有内置post请求的APT 需要body-parser

一旦配置了之后，req请求对象会多出来一个属性body  也就是你可以直接通过req.body获取表单POST请求体数据

var artTemplate = require('express-art-template')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())