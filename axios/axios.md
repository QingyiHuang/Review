axios中没有jsonp方法

```javascript
axios.request(config)
axios.get(url[,config])
axios.delete(url[,config])
axios.head(url[,config])
axios.options(url[,config])------------------------->
axios.post(url[,data[,config])
axios.put(url[,data[,config])
axios.patch(url[,data[,config])
```

```vue
//main
import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
//给Vue 原型挂在属性
Vue.prototype.$axios=Axios

new Vue({
  el: '#app',
  render: h => h(App)
})

```

### axios .all（[请求1，请求2]）

### 跨域问题

axios post请求 除非运用vue-cli  可改config下的一个poxy文件

否则用其他人的代理 就是 jsonbird 才能成功跨域 这里无效

# 方法一：装插件

> 在谷歌浏览器中装个插件，名字是Allow CORS ，装了之后就能够拉区到数据了。但这不是根本上解决问题，只能说证明你的代码没问题，只是在跨域这里遇到了麻烦而已。比如你换个浏览器，肯定程序又不能运行了。

# 方法二：远程代理

> 就是利用别人写好的代理接口，代理发送你的请求，这样就不会跨域了，使用如下
>
> 首先我们定义一个常量 API_PROXY
>
> const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
>
> 然后在`axios`请求里面和你的url拼接一下就OK了
>
> axios.get(_this.$store.**state**.**API_PROXY** + **'http://news-at.zhihu.com/api/4/stories/latest'**)

# 方法三：nodejs代理

> 让后端代码设置一个 Access-Control-Allow-Origin 头来解决,浏览器有安全策略限制，但是第三方的服务(服务器)没有呀，所以我们可以通过让浏览器访问前端开发服务器的url，让前端开发服务器去向后端服务器发送请求，再返回数据给浏览器，这样子就不存在跨域问题啦。
>
> 打开config/index.js 修改`proxyTable: {}`部分 修改为
>
> proxyTable: {
>
> '/api': {
>
> target: '正式网址/api/',
>
> changeOrigin: true,
>
> pathRewrite: {
>
> '^/api': ' '
>
> }
>
> }
>
> }
>
> 第一行的`'/api'`指的是虚拟路径 target指的是目标地址，也就是实际api的地址 pathRewrite规则重写
>
> 然后在代码页面修改一下请求地址
>
> axios.get('/api/xxx')