<template>
    <div>
        <div class="h"> vue</div>
        <router-view class='b'></router-view>
        <button @click="goMusic">music</button>
        <div class="f"></div>
    </div>
</template>
<script>
    export default{
        methods:{
            goMusic(){
                this.$router.push('/music')
            }
        }
    }
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.h{
    height: 200px;
    background: skyblue;
}
.b{
    height: 200px;
    background: rgb(102, 221, 86);
}
.f{
    height: 200px;
    background: deeppink;
}
</style>

