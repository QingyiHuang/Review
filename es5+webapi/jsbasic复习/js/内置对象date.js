window.onload=function(){
/**
     * 遍历json格式的数据
     */
    var obj={
        name:"hqy",
        age:20,
        gender:"nan"
    }
    for(var key in obj){
        console.log(key+"     "+obj[key]);
    }
    /**
     * 自己实现max方法
     * 有bug
     * 原因：定义的max_value没有参与计算，更改如下
     */
    function myMax(){
        var max_value=arguments[0];
        for(let i=0;i<arguments.length;i++){
            max_value=arguments[i]>max_value?arguments[i]:max_value;
        }
        return max_value;
    }
    console.log(myMax(1,5,6,4,7,2,1));

    /**
     * 随机产生16进制的颜色值
     */
    function getColor(){
        var str="#";
        var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
        for(let i=0;i<6;i++){
            var num=parseInt(Math.random()*16);
            str+=arr[num];
        }
        return str;
    };

    var div1=document.getElementById("div1");
    div1.style.backgroundColor=getColor();

    /**
     * Date 内置对象
     * 构造函数
     * new Date（）
     * new Date(value)
     * new Date(dateString)
     */
    //参数 -   /
    var dt1 = new Date("1997-02-26");
    this.console.log(dt1)
    //当前服务器的时间
    var dt = new Date(); 
    console.log(dt);
    //获取年份
    console.log(dt.getFullYear());
    //获取月份
    this.console.log(dt.getMonth()+1);//真实月份需要加1
    //获取日
    this.console.log(dt.getDate());
    //小时
    this.console.log(dt.getHours());
    //minutes
    this.console.log(dt.getMinutes());
    //second
    this.console.log(dt.getSeconds());
    //星期
    this.console.log(dt.getDay());//星期0开始1

    this.console.log(dt.toDateString());//en
    this.console.log(dt.toLocaleDateString());//cn
    console.log(dt.toTimeString());
    console.log(dt.toLocaleDateString());
    this.console.log(dt.valueOf());//ms

    /**
     * 格式化后的指定格式的日期和时间---封装一个函数
     */
    function getDate(dt){
        return dt.getFullYear()+"年"+(dt.getMonth()+1)+"月"+dt.getDate()+"日";
    }
    this.console.log(getDate(new Date()));
}