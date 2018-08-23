<template>
    <div style="color:red">
        <a href="#/">首页</a>
        <router-link :to="{name:'other1'}">1111</router-link>
        <router-link :to="{name:'other2'}">2222</router-link>
        <hr>
        <router-view></router-view>
    </div>

</template>
<style>
    
</style>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

