import Vue from 'vue'
import vueRouter from 'vue-router'

import App from './components/app.vue'
import Music from './components/music.vue'
import Movie from './components/movie.vue'
Vue.use(vueRouter)

let router = new vueRouter({
    routes:[
        {name:'dd',path:'/'},
        {name:'music',path:'/music',component:Music},
        {name:'movie',path:'/movie',component:Movie}
    ]
})

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})