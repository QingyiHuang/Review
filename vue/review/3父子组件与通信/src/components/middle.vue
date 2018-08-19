<template>
<div>
      <div class="gray">
        中间{{fc}}
        
    </div>  
</div>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['fc'],
    methods:{
        
    }
}
</script>

<style scoped>
.gray{
    height: 100px;
    background: gray;
    color: #fff;
    font-size: 30px;
}
</style>

