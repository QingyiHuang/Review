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
    /**
     * 全局变量
     * 局部变量
     * 全局作用域
     * 局部作用域
     * 块级作用域
     * 隐式全局变量
     */

     /**
      * js没有块级作用域  ------》函数除外
      * 在｛
      * 定义变量
      * ｝大括号外面也能访问该变量
      */

      {
          var innerNum=10;
      }this.console.log(innerNum);

      /**
       * 局部变量：在函数内部定义的变量是局部变量，外面不能使用
       * 全局变量：除了在函数内部定义的变量以外，其他全是全局变量，
       * 包括script标签之间也会互相冲突，这就是js为什么需要用函数封装.
       */

       /**
        * 全局变量，如果页面不关闭。那么就不会释放，占用空间，消耗内存。
        * 尽量少用全局变量
        * 
        * 当函数使用完，局部变量就销毁了
        */

        /**
         * 声明变量没加var ，就叫隐式全局变量
         * 即使放在函数内部也会当作全局变量
         * 隐式全局变量能够被删除
         * 
         * 
         * num1=100;
         * delete num1;
         * 而全局变量是不会被删除的
         * var num1=100;
         * delete num1;
         */


         /**
          * 作用域链
          * 在script 标签下直接定义 为0级作用域 下定义变量
          * 在一层函数内定义，位1级作用域 下定义变量
          */
        
          var test =10;//0级作用域
          function FN1(){
              var test =20;//一级作用域
              function FN2(){
                  var test =30;//二级作用域
                  function FN3(){
                      var test=40;//三级作用域
                      console.log("fi>f2>f3");
                      console.log(test);//调用变量，首先在当前作用域去找，然后去找父级作用域-----》script下
                  }
                  FN3();
              }
              FN2();
          }
          FN1();
        

          /**
           * 预解析
           * 在解析代码之前，把变量的声明提前了，函数的声明也会被提前
           * 提前到当前所在作用域的最上面
           */
          console.log(kok);//没有报错显示，undefined  说明kok变量声明提前了
          var kok=10;

          /**
           * 函数调用，会把函数声明提升到作用域的上面
           */

           /**
            * 每个script标签都是一个独立作用域
            * 预解析分段，在各个script中fn不会冲突
            */

            /**
             * 案例：
             */

            //连续赋值
            //var a= b=c=0;
            //b和c是隐式全局变量

            fn4();
            console.log(c);
            console.log(b);
            console.log(a);
            function fn4(){
                var a=b=c=9;//一个局部变量 两个隐式全局变量 赋值位9，js不能连等
                console.log(c);
                console.log(b);
                console.log(a);
            }
            /**
             * 以上代码等价于
             */
            function fn4(){
                var a;
                b=9;
                c=9;
                a=9;
                console.log(c);
                console.log(b);
                console.log(a);
            }
            console.log(c);
            console.log(b);
            console.log(a);
}