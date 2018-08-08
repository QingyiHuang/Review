(function(){
    /**
     * 创建正则表达式
     * 1构造函数
     * 2字面量
     * /表达式/默认为正则表达式
     */
    //正则表达式在双斜杠中间写
    var reg = new RegExp(/\d{11}/);//创建正则表达式对象
    var str="我的电话18888888888";
    var flag=reg.test(str);
    console.log(flag);

    //字面量
    var reg1=/\d{1,5}/;
    console.log(reg1.test("我是1个数"));

    //识别正则表达式是否匹配
}());