import Vue from 'vue'
import App from './app.vue'

//全局组件 不需要声明，直接使用
//在main 里面引入一次
//引入子组件对象
import headerVue from './components/header.vue';
import middleVue from './components/middle.vue';
import footerVue from './components/footer.vue';
//注册为全局组件 Vue.component   Vue 为引入的vue对象
Vue.component('headerVue',headerVue);
Vue.component('middleVue',middleVue);
Vue.component('footerVue',footerVue);
new Vue({
    el:'#app',
    render:(c)=>c(App)
})