window.onload=function(){
    //普通变量不能直接调用属性或方法
    //对象可以直接调用属性和方法
    var str = "str";
    console.log(str.replace("t","h"));
    /**
     * 基本包装类型，本身是基本类型，但是在执行代码的
     * 过程中，如果这种类型的变量调用了属性或者方法，那么，这种类型就不再
     * 是基本类型，而是基本包装类型，这个变量也变成了基本包装对象
     * string number boolean
     */
    var num =10;
    var num2 = num.toString();//------string new 的一个新空间
    this.console.log(num2);
    this.console.log(typeof(num));
    this.console.log(typeof(num2));

    /**
     * 一个对象&&true 结果true
     * 如果是一个true && 对象，那结果是对象
     */
    var n1=10;
    var n2=Number("10");//转换，没有new--类型转
    var n3= new Number ("10");//基本包装类型
}