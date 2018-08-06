//自定义构造函数，首字母大写
function Person(name,age){
    this.age=age;
    this.name=name;
    this.say=function (){
        console.log(this.age+"  ");
    }
}

var per = new Object();
    per.name="name";
    per.age=12;
    per.say=function(){
        console.log(haha);
    }
    //工厂模式
function creatPer(name,age){
    var obj = new Object();
    obj.name=name;
    obj.age=age;
    obj.say=function(){
        console.log("gongchang");
    };
    return obj;
}//工厂模式函数名小写， 有new有返回值
    var per1={
        name:"haha",
        say:function(){
            console.log(this.name);
        },
    };
per1.say();
var xiaoming=new Person("xiaoming",12);
xiaoming.say();
console.dir(xiaoming);//把对象的结构显示出来
console.dir(Person);
//实例对象的构造器  等于Person
//constructor构造器指向Person，xiaoming就是通过Person创建的
console.log(xiaoming.constructor);
console.log(Person.constructor);//指向Function

//_proto_
console.log(xiaoming.__proto__.constructor);
//判断对象是不是这种数据类型
//尽可能使用 instanceof
//对象.constructor == Persom  ---构造器方式
//    instanceof Person
//    .__proto__.constructor==Person 等价第一种



//实例对象的对象通过构造函数创建，过程叫做实例化