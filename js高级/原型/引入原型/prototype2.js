//当想数据共享的时候，就使用
//构造函数.prototype.name=function(){}
//

//面向对象 
function ChangeStyle(btn,did,color){
    this.btn=btn;//对象/值保存到属性中
    this.div=did;
    this.color=color;
}
ChangeStyle.prototype.init=function(){
    console.log(this);//this就是指的ChangeStyle，即当前对象,实例化后 指向实例化对象

}
var cs=new ChangeStyle(1,2,3);
cs.init();
function Person(name){
    this.name=name;
    this.say=function(){
        console.log(this);
    }
}
var p1=new Person("1");
p1.say();

