<template>
<div>
    <div class="maroon">
        头部{{fuck}}
        
    </div>
        <p @click="cate">我可以被点击</p>
    </div>
    
</template>

<script>
export default {
    data(){
        return{

        }
    },//接收父组件值的参数
    props:['fuck'],
    methods:{
        cate(e){
            e.target.innerText=this.fuck
        }
    }
}
</script>

<style scoped>
.maroon{
    height: 100px;
    background: maroon;
    color: #fff;
    font-size: 30px;
}
</style>

