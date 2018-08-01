window.onload=function(){
    /**
     * 面向对象特性：封装 继承 多态(抽象性)
     * js不是面向对象的语言，但是可以模拟面向对象的思想。
     * js是一门基于对象的语言；js本身有这些对象；
     * 对象有属性和方法
     * 当前对象中使用 this 指代当前对象
     * 0级作用域中使用this 指代window
     */ 

     /**
      * 创建对象的三种方式
      * 1.var obj =new Object();调用系统构造函数创建对象
      * 对象.名字=值
      * 添加属性并赋值
      */
    var obj1 = new Object();
    obj1.name="ccc";
    obj1.age=20;
    obj1.sex=1;
    obj1.eat=function(){
        console.log("大蒜");
    };
    this.console.log(obj1.eat());
    this.console.log(obj1 instanceof Object);//输出，obj1是不是对象类型

    //instanceof：获取该变量是不是属于某种类型  boolean
    // a  instancof 类型

    /**
     * 1工厂模式创建对象
     * 一次性创建多个对象,结合调用系统构造函数利用工厂模式
     * 把创建对象的代码封装在一个函数中。
     */
    function createObject(name1,age1){
        var obj=new Object();
        obj.name=name1;
        obj.age=age1;
        obj.say=function(){
            console.log("hello"+this.name+this.age);
        }
        return obj;
    }
    var per1 = new createObject("小肥",20);
    per1.say();


    /**
     *2自定义构造函数创建对象
     * 函数和构造函数的区别就是：名字首字母是不是大写---------语义化
     * 固定用this设置位当前对象
     */
     function Person(name,age){
        this.name=name;
        this.age=age;
        this.play=function(){
            console.log("i love play"+this.name+this.age);
        }
     }
     //创建对象，把this 这个对象返回
     var per2=new Person("智障",20);
     per2.play();

     function Dog(name,age){
        this.name=name;
        this.age=age;
        this.play=function(){
            console.log("dog"+this.name+this.age);
        }
     }
     var dog=new Dog("ww",2);
     dog.play();
     this.console.log((dog instanceof Dog)+"dog 来源于Dog类型");
     this.console.log((dog instanceof Person)+"dog 来源于Persons");

     /**
      * 创建对象，实例化一个对象，并且初始化，
      *  var per2=new Person("智障",20);
      * 首先在堆中申请一块空间 ---------------------new这个动作
      * 栈中per2 这个名字是栈中位置的别名，并且栈中存储的是堆中的地址
      * 即per2 这个变量指向栈这个地址。
      */


     /**
      * 
      * 3字面量方式创建对象方式
      * 缺陷：一次性对象
      */
     /*var objzz ={};//空对象
     objzz.name="xiaobai";
     objzz.age=10;
     objzz.say=function(){
         console.log("i m"+this.name);
     };
     objzz.say();*/
     var obj22 ={
        name:"xiaoming",
        age:10,
        eat:function(){
            console.log("字面量方式创建对象方式"+this.name);
        }
     };
     obj22.eat();
     /**
      * js 弱类型，生命变量都用var
      * 基本数据类型 string number boolean object null undefined
      * 基于对象 
      * 动态类型语言
      */

      /**
       * 点语法  . 和括号
       * obj["name"]="xiaoming";
       * obj.play();
       * obj["play"]();
       */
}