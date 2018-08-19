import Vue from 'vue'
import App from './app.vue'

new Vue({
    el:'#app',
    render:(c)=>c(App)
})
/**
 * 父组件通过子组件属性 来传值
 *    常量  prop="常量"
 *     变量 :prop="变量"
 * 子组件
 *      需要声明 props:['prop1','prop2']
 * js中可以用 this.prop1
 */

 /**
  * 子组件向父组件进行传值 vueBus
  */
