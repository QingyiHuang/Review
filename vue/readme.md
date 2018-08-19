- ## 双向数据流

1js内存属性发生改变，影响页面的变化

2页面改变，影响js内存属性的变化

### 子向父组件通信，vuebus

通过 new Vue这个对象，来$on('event',fn(prop1,prop2))

另一个组件引入同一个vuebus 来$emit('event',prop1,prop2)

```javascript
var con=new Vue()
con.$on('event',cb) //on
con.$emit('event',data) //biu
con.$once('event',cb) //once on
con.$on('event') //cancel event
```



## 过滤器

vue中可以自定义过哦氯气

组件内过滤器+全局过滤器

组建内过滤器就是option中的一个filters的属性(一个对象)

  多个key就是不同的过滤器名，多个value就是key对应的过滤方式函数体

Vue.filter

```javascript
一种全局过滤器 范围大权力小
一种是范围过滤器 范围小权利大
Vue.filter('globalFileter',function(value){
    return value+'全局过滤器'
})

    export default{
        filters:{
            myFilter(value){
               return value.split('').reverse().join('')
            }
        },
```



## 操纵DOM元素

```javascript
在指定元素 加入ref='名称a'
获取的地方加入 this.$refs.名称a
ref 放在原生dom元素 获取数据就是原生dom对象
ref放在组件上获取的就是组件对象
this.$refs.组件名.$el进行操作进行

created 完成数据吃石化，此时还未生成dom
monted 将数据已经装载刀了dom上可以操作dom 
```

## mint-ui

饿了么用vue编写的插件