<template>
    <div>
        <!--留坑-->
        <div class="head">
<!--        <a href="#/d">ddd</a>
        <a href="#/music">music</a> -->
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'music'}">music</router-link>
        <router-link :to="{name:'dd'}">dd</router-link>
        <router-link to='/music'>这是to=''</router-link>
        </div>
        <router-view class="body"></router-view>
        <div class="footer"></div>
    </div>
</template>
<script>
    
</script>
<style scoped>
.head{
    height: 100px;
    background: darkblue;
}
.body{
    height: 100px;
    background: darkcyan;
}
.footer{
    height: 100px;
    background: gray;
}
a{
    color: #fff;
    margin-left: 30px;
    text-decoration: none;
    font-size: 30px;
}
a:hover{
    color: deeppink;
}
</style>
