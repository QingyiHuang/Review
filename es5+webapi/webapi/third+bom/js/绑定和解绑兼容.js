/**
 * 用什么方式绑定事件，就应该用对应的方式绑定事件
 * 1接棒时间
 * 对象.on事件名字=事件处理函数--->绑定事件
 * 对象.on事件名字=null
 * 2解绑事件
 * 对象.addEventListener("没哟On的事件类型",命名函数，false)
 * obj.removeEventListener("没有on的事件类型",函数名字，false) ie8不支持
 * 其中函数要相同，所以一定是命名函数
 * 3解绑事件 ie
 * obj.attachEvent("on 事件",cb)
 * obk.detachEvent("on 事件",cb)
 * 
 */
//为任意元素绑定任意事件
//任意的元素，事件的类型，事件处理函数
function addEventListener(el,type,fn){
    //判断浏览器是否支持这个方法，放方法名而不加括号可以判断是否有这种方法
    if(el.addEventListener){
        el.addEventListener(type,fn,false);
    }else if(el.attachEvent){//ie 用 on-
        el.attachEvent("on"+type,fn);
    } else{
        el["on"+type]=fn;
    }
}
/**
 * 解绑事件
 */
function removeEventListener(el,type,fn){
    //判断浏览器是否支持这个方法，放方法名而不加括号可以判断是否有这种方法
    if(el.removeEventListener){
        el.removeEventListener(type,fn,false);
    }else if(el.detachEvent){//ie 用 on-
        el.detachEvent("on"+type,fn);
    } else{
        el["on"+type]=null;
    }
}