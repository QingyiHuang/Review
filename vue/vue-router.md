## vue-router

- 前端路由，核心就是锚点值的改变，根据不同的只，渲染指定的DOM位置的不同数据
- vue中模板数据不是通过Ajax请求，而是调用函数获取到模版内容

## vue核心插件

```vue
1vue-router 路由
2vuex 管理全局共享数据
3在main.js中引入 import vueRouter from 'vue-router'
4安装插件Vue.use（插件） Vue.use(vueRouter)
5创建路由对象，配置路由规则
let router = new VueRouter({
    //routes 很多对象
    routes:[
        {path:'/',component:Home},
        {path:'/d',component:Dd}
    ]
})
6将路由对象传递给Vue的实例，option中
7留坑 <router-view></router-view>




<template>
    <div>
        <!--留坑-->
        <div class="head">
<!--        <a href="#/d">ddd</a>
        <a href="#/music">music</a> -->
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'music'}">music</router-link>
        <router-link :to="{name:'dd'}">dd</router-link>
        <router-link to='/music'>这是to=''</router-link>
        </div>
        <router-view class="body"></router-view>
        <div class="footer"></div>
    </div>
</template>


main.js:

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
```

```javascript
###router-link
this.$route只读，$router具备功能函数
查询字符串
<router-link :to="{name:'detail',query:{id:index}}">xxx</router-link>
导航routes:[
    {name:'detail',path:'/detail',component:detail}//path 不用改---->/detail?id:index
]
去了页面之后：获取路由 参数 this.$route.query.id 获取query属性里面的id


path方式
<router-link :to="{name:'detail',params:{name：xxx}}">xxx</router-link>
导航routes:[
    {name:'detail',path:'/detail/：name',component:detail} ---->/detail/xxx
]
去了页面之后：获取路由 参数 this.$route.params.name 获取params里面的name
```



## 编程导航

- 当前除了跳转意外还有其他操作
- 不能保证用户一定会点击某些按钮

```javascript
this.$router
this.$router.go 根据浏览器记录前进后退 前进go(1)后退-1
this.$router.push 直接跳转到某个页面显示
	-push参数：字符串/xx
	-对象：`{name:'xx',query:{id:1},params:{name:2}}`
path:'/router:id'
```

### 重定向和404

进入后默认是/

重定向`{path:'/',redirect:'home'}`

重定向`{path:'*',redirect:{name:'home'}}`

404 在路由规则之后写一个*匹配

`{path:'*',component:notFoundVue}`

### 多视图

*以前可以一次放一个坑对应一个路由显示一个组件

​      现在一次行为多个坑 + 一个路由 + 多个组件

*components 多视图 是一个对象，对象内多个key 和value 

​	key对应视图 name属性

​	value就是要显示的组建对象

*多个视图`<router-view name=''>`

```javascript
var router = new vueRouter()
router.addRoutes([
    {path:'/',components:{
        h:head,default:footer,f:footer
    }},

])
```

## 嵌套路由

*单页面实现多页应用  使用复杂的嵌套路由

*开发中一般会需要使用

*视图包含视图

*路由父子及关系路由

```javascript
{name:'music',path:'/music',component:Music,children:[//包含第一层router-view
            //   /xxx就是绝对路径 要把路径补全
        //   xxx就是相对路径 
        {name:'other1',path:'other1',component:Other1},
        {name:'other2',path:'other2',component:Other2}
]}
```

