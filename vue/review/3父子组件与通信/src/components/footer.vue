<template>
<div>    <div class="green">
        底部
        <button @click="calDD">打电话 给父组件</button>
    </div>
    </div>

</template>

<script>
import connect from '../connector.js'
export default {
    data(){
        return{

        }
    },
    methods:{
        calDD(){
            //发射
            connect.$emit('phone','我是你的footer组件');
        },
    }
}
</script>

<style scoped>
.green{
    height: 100px;
    background: green;
    color: #fff;
    font-size: 30px;
}
</style>

