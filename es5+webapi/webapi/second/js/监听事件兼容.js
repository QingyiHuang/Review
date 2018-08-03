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