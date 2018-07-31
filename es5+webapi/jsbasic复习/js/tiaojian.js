window.onload=function(){
    /**
     * ++i 和 i++ 不参与运算结果都一样
     * 当参与运算的时候
     * ++i是先自增，i++是先运算再自增 和--相同
     */

     /**
      * 流程控制：三种方式 即代码执行过程 
      */

      /**
       * 弹窗 有输入prompt
       */

       /*var name = prompt("请输入您的姓名");//获取输入结果是字符串类型
       var pop = document.querySelector(".hello");
    this.alert("你好"+name);
    var aa = parseInt(prompt("请输入一个数字"));
    if(aa%2==0)
    {
        console.log(aa+"是偶数");
    }else{
        console.log(aa+"是奇数");
    }*/


    /**
     * 三元表达 a?b:c;
     * a 是true 还是 false ，，，true则b false c 并结果给变量
     */
    var x = 10;
    var y = 20;
    var result = x>y ? x :y;
    this.console.log(result);//y
    /*总结，大多 if-else 都可以用 三元表达式解决 ?:; */


    /**循环
     * if(){
     * }else if(){
     * }else if(){
     * }else{
     * }
     */
    var year = 2018;
    if(year%4==0&&year%100!=0||year%400==0){
        this.console.log("闰年");
    }else{
        this.console.log("平年");
    }
    /**
     * switch(){
     * case 值:asdasdasd;break;
     * case 值:asdasdasd;break;
     * case 值:asdasdasd;break;
     * default:sdfsd;
     * }
     * 语句和case后的值比较的时候使用的是严格模式
     */
    var jibie="c";
    switch(jibie){
        case "a":console.log("a");break;
        case "b":console.log("b");break;
        case "c":console.log("c");break;
        case "d":console.log("d");break;
        default:console.log("e");break;/*default 后的break 可以省略 */
    }
    var sum=0;
    for(let i=1;i<=100;i++){
        if(i%3==0){
            sum+=i;
        }
    }
    console.log(sum);
/**
 * do{}while(tiaojian)  与while(tiaojian){}
 * 前者先循环后判断，至少执行一次循环体
 * 后者先判断，后循环，有可能一次循环都不会执行。
 * 
 * 
 * for循环
 */
/**
 * doucument.write("中间可以写html标签")
 */
    for(let i=0;i<=9;i++){
        for(let j=0;j<=i;j++){
            document.write("★");
        }
        document.write("<br>")
    }
    for(let i=1;i<=9;i++){
        for(let j=1;j<=i;j++){
            document.write(j+"*"+i+"="+i*j);
        }
        document.write("<br>");
    }
    var dollar = 10000;

    for(let i=1;i<=5;i++){
        dollar+=(dollar*0.003);
    }
    this.console.log(dollar);
    for(m=1;m<=12;m++){
        
    }
}