function animate1(element,target){
    clearInterval(element.timeId);//每次调用都清除
    element.timeId = setInterval(function(){//定时器ID存到对象属性中
        var current = element.offsetLeft;
        var step = 10;
        step = current < target? step:-step;
        current+=step;
        if(Math.abs(current-target)>Math.abs(step)){
            element.style.left=current+"px";
        }else{
            clearInterval(element.timeId);
            element.style.left=target+"px";
        }
    },20)
}
//变速 缓动
function animate2(element,target){
    clearInterval(element.timeId);
    element.timeId=setInterval(function(){
        //获取当前位置
        var current = element.offsetLeft;
        var step=(target-current)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        current+=step;
        element.style.left=current+"px";
        if(current==target){
            clearInterval(element.timeId);
        }
    },15)
}
    /*
    function animate(element,target){
        clearInterval(element.timeId);//每次执行先清理定时器
        element.timeId= setInterval(function(){//存定时器的变量  使用element.timeId，让element多了个属性，让所有改变都在属性上改，而不是多个变量
                var current=element.offsetLeft;//拿到当前位置
                var step = 10;
                step=current<target?step:-step;
                current+=step;//数据应该是多少
                element.style.left=current+"px";//left属性
                if(Math.abs(target-current)<Math.abs(step)){//如果不远了就清空
                    clearInterval(element.timeId);
                    element.style.left=target+"px";
                }
        },20)
    }*/