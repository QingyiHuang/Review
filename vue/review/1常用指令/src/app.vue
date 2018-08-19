<template>
    <div>
    v-text:是元素的innerText 只能在双标签使用
    <span v-text="text1"></span><br>
    v-html:
    <span v-html="text2"></span><br>
    v-if: 
    <div v-if="div3" style="height:10px;background-color:deeppink;"></div>
    v-show 
    <div v-show="div4" style="height:10px;background-color:deeppink;"></div>
    v-model 
    <input type="text" v-model="Tname">
    {{ Tname }}
    
    <input type="text" v-bind:value="Tname">

    <hr>
        <div v-bind:class="isRed?'red':'green'"></div>
    <hr>
        <div v-bind:class="bindClass">innerText</div>
    v-on:click: --函数名没有参数可以只写函数名
        <button @click="change()">change</button>
    </div>   

</template>
<script>
    export default{
        data(){
            return{
                text1:'im v-text',
                text2:'<span style="color:red">html inner</span>',
                div3:true,
                div4:false,
                Tname:'',//只有赋值才能监听到js内存的变化才能改变上面
                isRed:true,
                bindClass:{
                    'red':true,
                    'fi':true,
                },

            }
        },//声明函数，属于组件对象，多个函数名作key 函数体作value
        methods:{
            change(){//在script中使用data中属性要加this template中不需要
                this.isRed=!this.isRed;
            }
        }
    }
</script>
<style>
.red{
    height: 10px;
    background: red;
}
.green{
    height: 10px;
    background: green;
}
.fi{
    color: #fff;
}
</style>
