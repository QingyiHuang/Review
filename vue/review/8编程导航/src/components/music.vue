<template>
    <div>this is music
        <button @click="goMovie">movie</button>
        <button @click="goback">turn back</button>
        <button @click='go'>下一页</button>
    </div>
</template>
<script>
    export default{
        data(){
            
        },
        methods:{
            goMovie(){
                this.$router.push({
                    name:'movie'
                })
            },
            goback(){
                this.$router.go(-1);//上一次记录
            },
            go(){
                this.$router.go(1);//上一次记录
            }
        }
    }
</script>
<style>

</style>
