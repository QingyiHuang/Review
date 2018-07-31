window.onload=function(){
    function a (){
        let x=1;
        let y=2;
    }
    this.console.log(a);/*输出代码，函数名只是它在内存中的别名 */

    function getMax(x,y){
        return x > y ? x : y;
    }
    console.log(getMax(10,20));


    /**
     * 1输入年月日，获取这个日期的是这一年的第几天
     */
    function getDays(year,month,day){
        var months=[31,28,31,30,31,30,31,31,30,31,30,31];
        var days=day;
        for(let i =0;i<month-1;i++){
            days+=months[i];
        }
        if(isLeapYear(year)){
            days++;    
        }
        return days;
    }
    function isLeapYear(year){
        return year%4==0&&year%100!=0||year%400==0;
    }
    this.console.log(getDays(2018,7,31));
    /**
     * 求阶乘和
     */
    function jiecheng(num){
        var result = 1;
        for(var i=1;i<num;i++){
            result*=i;
        }
        return result;
    }

    function jiechengAdd(num1){
       var sum=0;
       for(var i=1;i<=num1;i++){
           sum+=jiecheng(i);
       }
       return sum;
    }
    this.console.log(jiechengAdd(3));
    /**
     * 隐式全局变量
     */
}