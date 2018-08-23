## Axios

- node 端发送http请求
- 浏览器发起XMLHttpRequest 请求
- 支持Promise API
- 拦截请求和返回
- 转化请求和返回数据
- 取消请求
- 自动转化json数据
- 客户端支持地域跨域请求伪造 XSRF

#### post请求的时候，如果数据是字符串，默认头就是键值对，否则就是对象就是application www - 

this.$axios.get(url,options)

this.$axios.post(url,data,options)

options:{params:{id:1}//查询字符串,header:{'content-type':'xxx'},baseURL:''}

全局设置，Axiso.defaults.baseUrl='xxx'