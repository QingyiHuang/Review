window.onload=function(){
    
     /**
      * 内置对象
      * Math 
      * Date
      * String
      * Object
      * Array
      * ----------------------北京小哥--你太可爱了
      */




      /**
       * Math 对象
       * 内置对象
       * Math.PI ------PI
       * Math.E-----------2.7---
       * Math.abs(value)-----------绝对值
       * Math.ceil()-------------向上取整
       * Math.floor()-----------向下取整
       * Math.max---------------返回给定的一组数字中的最大值。有一个参数无法被转换成数字，则会返回NaN
       * Math.min
       * Math.pow(a,b)-----------a的b次方
       * Math.sqrt(a)-----------a的平方根
       * Math.random()--------------随机数返回一个浮点数，在0---1之间
       * */
      //Math.ceil 向上取整
      console.log(Math.ceil(.95));    // 1
      console.log(Math.ceil(4));      // 4
      console.log(Math.ceil(7.004));  // 8
      console.log(Math.ceil(-0.95));  // -0
      console.log(Math.ceil(-4));     // -4
      console.log(Math.ceil(-7.004)); // -7

      //Math.floor 向下取整
      console.log(Math.floor(.95));    //
      console.log(Math.floor(4));      //
      console.log(Math.floor(7.004));  //
      console.log(Math.floor(-0.95));  // 
      console.log(Math.floor(-4));     // 
      console.log(Math.floor(-7.004)); // 
      //Math.max()
      Math.max(10, 20);   //  20
      Math.max(-10, -20); // -10
      Math.max(-10, 20);  //  20

      //Math.pow(a,b);
      console.log(Math.pow(2,3));
      this.console.log(Math.sqrt(2));

      //Math.random()
        for(let i=0;i<2;i++){
            this.console.log(parseInt(Math.random()*10+1));
        }

    /**
     * 复习创建对象的三种方式
     */
    //手机对象 ---调用系统对象构建方法
    function shouji(x,y){
        var obj=new Object();
        obj.xinghao=x;
        obj.color=y;
        obj.use=function(){
            console.log("iphone x can play "+this.color)
        }
        return obj;
    }
    var obj = new shouji("iphone x","dark narrow gate");
    obj.use();
    //电脑对象---实例化自己的构造函数
    function Pc(x,y){
        this.xinghao=x;
        this.jiage=y;
        this.play=function(){
            console.log(this.xinghao+"可以带的东"+this.jiage);
        }
    }
    var pc1=new Pc("外星人",10000);
    pc1.play();
    //字面量创建对象 car 
    var car ={
        name:"大黄蜂",
        jiage:1000,
        play:function(){
            console.log(this.name+"sss"+this.jiage);
        }
    };
    car.play();
}