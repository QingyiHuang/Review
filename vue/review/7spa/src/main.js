import Vue from 'vue'
import vueRouter from "vue-router"


import App from './components/app.vue'
import List from './components/list.vue'
import detail from './components/detail.vue'

Vue.use(vueRouter)

let router = new vueRouter({
    routes:[
        {name:'英雄',path:'/',component:List},
        {name:'list',path:'/list',component:List},
        //id 只要加上query就行 这里path‘/detail’ 查询字符串不需要改
        //{name:'detail',path:'/detail',component:detail},
        //params需要声明为 path:'/detail/:id'"{name:'detail',params:{id:index}}path方式要该
        {name:'detail',path:'/detail/:id',component:detail}
    ]
})

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})