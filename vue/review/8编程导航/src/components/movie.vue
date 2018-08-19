<template>
    <div>this is movie
        <button @click="goback">turn back</button>
    </div>
</template>
<script>
    export default{
        data(){
            
        },
        methods:{
            goback(){
                this.$router.go(-1);//上一次记录
            }
        }
    }
</script>
<style>

</style>
