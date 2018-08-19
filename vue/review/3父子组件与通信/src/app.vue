<template>
    <div>
        <header-vue fuck="nihao"></header-vue>
        <middle-vue v-bind:fc='appValue'></middle-vue>
        <footer-vue></footer-vue>
        <button @click='listen'>监听</button>
    </div>
</template>

<script>
//引入子组件
import headerVue from './components/header.vue';
import middleVue from './components/middle.vue';
import footerVue from './components/footer.vue';


//引入连接器
import connect from './connector.js'



export default {
    data(){
        return{
            appVlue:'md5,md5,md5'
        }
    },
    methods:{
        listen(){
            connect.$on('phone',function(msg){
                console.log(msg);
            })
        },
    },//必须声明 组件名:组件对象 在模版中使用
    //尽量小写，可以用-拆开 es6 赋值方法
    components:{
        headerVue:headerVue,
        middleVue,//简写
        footerVue
    }
}
</script>

<style>

</style>

