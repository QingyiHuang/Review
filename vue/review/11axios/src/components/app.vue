<template>
    <div>
        <header-vue></header-vue>
        <hr>
        {{msg}}
        <hr>
        <router-link to="/home">111111</router-link>
        <router-view name="h"></router-view>
        <router-view ></router-view>
        <router-view name="f"></router-view>
        <hr>
        <footer-vue></footer-vue>
    <button @click="get">axios</button>
    <button @click="post">axios_post</button>
    <button @click="http">axios_http</button>
    {{msg2}}
    </div>

</template>
<style>

</style>

<script>  
import Axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      msg2:''
    }
  },
  created(){//生命周期钩子之创建
    /*this.$axios.get('../package.json').then(res=>{
      console.log(res)
      this.msg2 = res.data
    }).catch(err=>{console.log(err)}*/
    //post
    this.$axios.post('http://localhost:3001/hello.json',
      'content=hqy'
    ).then(
      res=>{
        console.log(res.data)
        this.msg2=res.data
        }
    ).catch(err=>console.log(err))
  },
  methods:{
    get:function(){
      Axios.get('http://localhost:3001/hello.json',{
        params:{
          userId:"2015214038"
        },
        headers:{
          Huangqingyi:'hqy'//请求头上biu
        }
      }).then(res=>{
        this.msg = res.data
      }).catch(err=>console.log(err))
    },
    post: function(){
      Axios.post('http://localhost:3001/hello.json',{
        //直接定义参数名字
        userId:"005555"
      },{//第三个参数才是option 选项
        headers:{
          hqy:'1997-0226'
          }
      }).then(res=>{
        this.msg = res.data;
      }).catch(err=>console.log(err))
    },
    http: function(){
      Axios({//直接配置
        url:'http://localhost:3001/hello.json',
        method:"post",
        data:{
          userId:'22222'
        },
        headers:{
          hqy:'sss'
        }
      }).then(res=>{this.msg=res.data})
        .catch(err=>console.log(err))
    }
  }
}
</script>









