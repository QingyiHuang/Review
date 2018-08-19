//引入vue  module
import Vue from 'vue'
//引入vue
import App from './app.vue'
//构建vue实例

new Vue({
    el:'#app',
    //渲染内容
    render:(c)=>c(App),
})