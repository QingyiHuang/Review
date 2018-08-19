<template>
    <div>
        <ul>
            <li v-for="(stu,index) in stus" :key="index">
                index:{{index}}  stu:{{stu}}
            </li>
            :key 告诉vue与页面之间的关联，设置是必须的
            //对象值遍历
            <li v-for="(value,key,index) in persons" :key="index">
                index:{{index}}  value:{{value}} key:{{key}}
            </li>
        </ul>
        <ul>
            <li v-for="(hero,index) in heros" :class="{'A':'deeppink','B':'yellow','C':'green','D':'red'}[hero.score]" :key="index">
                {{index}}++++++++{{hero.name}} ++++{{hero.score}}
            </li>
        </ul>
        <input type="text" name="" placeholder="name" v-model="name"><br>
        <input type="text" name="" placeholder="grade" v-model="score">
        <button @click="add">111</button>
        <input type="text" name="" id="" v-model="delid" placeholder="shanchu">
        <button @click="rem">222</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                delid:'',
                name:'',
                score:'',
                stus:[
                    {name:'jacle'},
                    {name:'pppp'}
                ],
                persons:{name:'ad',age:'11'},
                heros:[
                    {name:"小南",score:'A'},
                    {name:"小q",score:'B'},
                    {name:"小w",score:'C'},
                    {name:"小e",score:'D'},
                    {name:"小r",score:'B'},
                    {name:"小d",score:'C'}
                ],
            }
        },
        methods:{
            add(){
                this.heros.push({
                name:this.name,
                score:this.score
                });
                this.name='';
                this.score='';
            },
            rem(){
                this.heros.splice(this.delid-1,1)
            }
        }
    }
</script>
<style>
.red{
    background: red;
}
.yellow{
    background: yellow;
}
.green{
    background: green;
}
.deeppink{
    background: deeppink;
}
</style>
