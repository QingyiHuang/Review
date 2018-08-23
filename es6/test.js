let obj ={

}
Object.defineProperty(obj,'haha',{
    value:'hqy',
    writable:false,
    enumerable:true,
    configurable:true//决定上面三个是否可以修改
    
})

const handler ={
    set:function(obj,prop,value,receiver){
        obj[prop] = "simple"
    }
}
//设置拦截器
let proxy1=new Proxy(obj,handler);
proxy1.momo='qq';
console.log(proxy1.momo);
proxy1.haha='qq2';
console.log(proxy1.haha);

$ node test.js
simple
hqy
