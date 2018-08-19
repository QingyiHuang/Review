import Vue from 'vue'
import vueRouter from 'vue-router'

import App from './components/app.vue'
import Home from './components/home.vue'
import Other1 from './components/other1.vue'
import Other2 from './components/other2.vue'
import Other3 from './components/other3.vue'


import head from './components/head.vue'
import footer from './components/footer.vue'
Vue.component('headerVue',head)
Vue.component('footerVue',footer)

Vue.use(vueRouter)

var router = new vueRouter()
router.addRoutes([
    {path:'/',components:{
        h:head,default:footer,f:footer
    }},
    {name:'home',path:'/home',component:Home,children:[
        //   /xxx就是绝对路径
        //   xxx就是相对路径
        {name:'other1',path:'other1',component:Other1},
        {name:'other2',path:'other2',component:Other2}
    ]}

])

new Vue({
    el:'#app',
    router:router,
    render:c=>c(App)
})