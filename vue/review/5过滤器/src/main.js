import Vue from 'vue'
import App from './app.vue'

//创建全局过滤器 范围更广
Vue.filter('globalFileter',function(value){
    return value+'全局过滤器'
})

new Vue({
    el:'#app',
    render:(c)=>c(App) 
})