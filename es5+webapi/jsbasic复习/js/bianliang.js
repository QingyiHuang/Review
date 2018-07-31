
window.onload=function(){
    /*js中，字符串类型的值都用双引号或者单引号 */
    /**
     * js中的原始数据类型：number,string,boolean,null,undefine,object 六个数据
     * number 数字类型
     * boolean 布尔值 一个true 一个false
     * string 字符串类型，单引号和双引号括起来
     * null 空类型，一个对象指向为空，此时可以赋值为null
     * undefined 未定义，值只有一个，undefined
     * object 
     * 
     * 变量声明了，没有赋值，结果undefined
     * 函数没有明确返回值，如果接受了，结果也是undefined
     */
    var num;
    window.alert(num+10);//一个undefined和一个数字进行计算就是NaN
    /**
     * 当一个var a = null 则 a位对象类型而不是null
     */
    var name ="黄卿怡";
    console.log(Number.MAX_VALUE);//最大
    console.log(Number.MIN_VALUE);//最小
    var x=0.2;
    var y=0.4;
    var sum=x+y;
    /** */
    this.console.log(sum);
    /**
     * NaN不是一个数组
     * isNaN()--------一个方法，验证括号内不是一个数字
     * 不要用NaN去验证是不是NaN
     * 应该使用inNaN
     */
    /**
     * 不要用小数去验证小数
     * js本身语言就有缺陷
     */




     /**
      * 字符串长度 变量.length
      * 转义符号：
      * \t制表符
      *\\表示一个斜杠*/

      this.console.log("哈哈\" haisdh\b");

      /**
       * 字符串相加
       * 只要有一个是字符串，相加就是拼接的意思
       * 如果有一个是字符串，另一个不是字符串，此时会发生计算
       * 这是隐式转换
       */
      var aa=1;
      var bb=2;
      var cc="sdf";
      console.log(aa+bb+cc);

      /**
       * 布尔类型，一个是1，一个是0
       */
      var flag =1;
      console.log(flag);
      var bb=null;
      console.log(bb);
}