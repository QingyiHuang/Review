<template>
    <div>
        this is detail
    </div>
</template>
<script>
    export default{
        data(){

        },
        created(){//dom还没生成 一般用来操作数据初始化
            //获取路由参数
            //vue-router中挂两个对象的属性
            //$route(信息数据) $router (功能函数)
            console.log(this.$route.params)
        },
        mounted(){//已经将数据装载到页面上去了 dom已经生成

        }
    }

</script>
<style>

</style>

