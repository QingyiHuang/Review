/*function Person(name,age){
    this.age=age;
    this.name=name;
    this.say=function (){
        console.log(this.age+"  "+this.name);
    }
}
var per1=new Person("aa",20);
var per2=new Person("bb",28);*/
//per1 和per2不是同一个方法
//为了让per1 和per2 调用同一个方法就把say这后面指向
//的函数拿出来 成为命名函数，但是命名污染

//解决：原型方法解决

function Person(name,age){
    this.age=age;
    this.name=name;
    this.say=function(){
        console.log("构造函数中的方法")
    }
}
Person.prototype.sleep=function(){
    console.log("人睡");
    this.eat();
}
Person.prototype.eat=function(){
    console.log("hello pig"+this.name);
}//节约空间，使用一个函数

var per1=new Person("aa",20);
var per2=new Person("bb",28);
console.log(per1.eat()==per2.eat());
//展示
console.dir(per1);//看不见Person.prototype.eat方法
per1.sleep();
//实例对象的方法是可以相互调用的
//原型中的方法也是可以相互访问的
