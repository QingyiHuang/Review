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