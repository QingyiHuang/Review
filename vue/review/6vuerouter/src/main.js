import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/app.vue'
import Home from './components/home.vue'
import Dd from './components/dd.vue'
import Music from './components/music.vue'
//安装插件 并且挂载属性
Vue.use(VueRouter)

//创建路由对象并配置路由规则
let router = new VueRouter({
    //routes 很多对象 path锚点值
    routes:[
        {name:'home',path:'/',component:Home},
        {name:'dd',path:'/d',component:Dd},
        {name:'music',path:'/music',component:Music}
    ]
})
//启动vue
new Vue({
    el:'#app',
    //让vue知道我们路由，这里传入路由
    router:router,
    render:c=>c(App)
})