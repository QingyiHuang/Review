<template>
    <div>
        <input type="text" name="" v-model='text' placeholder="text">
        显示{{text|myFilter}} 
        <br>
        显示{{text|globalFileter}} 
        <hr>
        <sub-vue></sub-vue>
        <div ref="dv1"></div>
    </div>
</template>
<script>
import subVue from './components/sub.vue'
    export default{
        filters:{
            myFilter(value){
               return value.split('').reverse().join('')
            }
        },
        data(){
            return{
                text:''
            }
        },
        components:{
            subVue
        },
        methods:{

        },
        //组建创建后，数据已经完成初始化，但是dom还没生成

        created(){
            //事件处理函数
            console.log('created'+this.$refs.dv1)
        },
        //数据装载在DOM后 各种数据已经就为，将数据渲染到Dom上，DOM已经生成
        mounted(){
            console.log('mounted'+this.$refs.dv1)
            this.$refs.dv1.style.backgroundColor='red';
            this.$refs.dv1.style.height=10+'px';
        }
    }
</script>
<style>

</style>
