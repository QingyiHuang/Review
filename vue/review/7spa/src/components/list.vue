<template>
    <div>
        <ul>
            <li v-for="(hero,index) in heros" :key='index'>
                <router-link :to="{name:'detail',query:{id:index}}">{{ hero.name }}</router-link>
            </li>
        </ul>
        path::::::::::::::::::::::::::::::::::::::::::::::
        <ul>
            <li v-for="(hero,index) in heros" :key='index'>
                <router-link :to="{name:'detail',params:{id:index}}">{{ hero.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                heros:[
                    {name:'libai'},
                    {name:'hoock'},
                    {name:'love'},
                ]
            }
        }
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
}

ul>li{
    padding-top:100px;
    float: left;
    list-style: none;
    margin-left: 50px;
}
a{
    color: aliceblue;
    font-size: 40px;
    text-decoration: none;
}
a:hover{
    color:darkgoldenrod;
}
</style>

