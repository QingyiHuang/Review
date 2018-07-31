window.onload=function(){
    /**
     * arguments对象伪数组
     */
    function f1(){
        //获取的是函数在调用的时候，传入了几个参数
        console.log(arguments.length);
    }

    /**
     *  arguments ----->数组使用-----------伪数组
     */
    function f2(){
        var sum=0;
        for (var i=0;i<arguments.length;i++){
            sum +=arguments[i];
        }
        return sum;
    }
    console.log(f2(10,20,30,40));
    /* 把匿名函数赋值给一个变量 */
    /*函数表达式 */
    /**
     * 函数表达式子结束后要加分号
     */
    var f3=function(){
        console.log("hahaha");
    };//这个分号必须加
    /**
     * 函数重名，后面会覆盖前面
     */
    /**
     * 函数自执行
     */
    (function(){
        console.log("函数自执行");
    })();
    /**
     * 函数调用，函数名作参数
     */
    function f4(f3){
        f3();
    }
    f4(f3);
}