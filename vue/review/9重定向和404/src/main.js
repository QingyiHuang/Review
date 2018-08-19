import Vue from 'vue'
import vueRouter from 'vue-router'

import App from './components/app.vue'
import Home from './components/home.vue'
import non from './components/404.vue'

Vue.use(vueRouter)

var router = new vueRouter()
router.addRoutes([
    {path:'/', redirect:{name:'home'}},
    {name:'home', path:'/home',component:Home},
    //无法匹配----------》404
    {name:'404',path:'*',component:non}
])

new Vue({
    el:'#app',
    router:router,
    render:c=>c(App)
})