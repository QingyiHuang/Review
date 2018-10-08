window.onload=function(){

    /**
     * String对象
     * 首字母大写的一般都是构造函数，用来创建对象
     * string------基本类型  string ----字符串类型
     * String------引用类型  对象 ----字符串类型
     * \0 空字符
     * 字符串特性：不可变，字符串的值是不能改变的
     * .length 返回长度
     */

     //js str 可以堪称一个字符数组
     var str1="hello";
     for(let i=0;i<str1.length;i++){
         console.log(str1[i]);
     }

     /**
      * 字符串特性：不可变，字符串的值是不能改变的
      */
     var str2="hello";
     str2[1]="w";//会重新开辟空间
     this.console.log(str2);//hello 而不是hwllo

     /**
      * charAt(index)从一个字符串中返回指定字符
      * index超出则返回空字符串
      */
     var str3="nbszzdkl";
     console.log(str3.charAt(2));
     /**
      * fromCharCode 将ASCII码对应字符返回
      */
     console.log(String.fromCharCode(65,33,45,88));
     /**
      * str.concat(arguments_str....)返回一个新字符串
      */
     var str4="hello";
     var str5=str4.concat(str3)
     console.log(str5);
     /**
      * indexOf()
      * str.indexOf(k,[2])
      * 从index为2的位置开始找k可要可不要，并且返回指定index
      * str.lastIndexOf（）从字符串最后开始找
      * indexOf找不到就返回-1
      */
     this.console.log(str3.indexOf("k",2));
     /**
      * match ==正则表达式--待完善
      */

     /**
      * str.replace
      */
    var str6="-=-";
    console.log(str6.replace("-","唉"));
    /**
     * str.slice(4，5)从哪到哪截取出来
     */
    str=str5.slice(2,6);
    console.log(str);
    /**
     * str.split()
     * (“字符串”，切割后留下的个数)形成数组
     */
    var arr = str5.split("l")
    this.console.log(arr);
    /**
     * str.substr(开始,长度)返回从a开始len
     * 长度的字符串
     */
    console.log(str5.substr(4,10));
    /**
     * str.substring(开始，结束)
     */
    console.log(str5.substring(4,9));
    /**
     * str.toLocaleLowerCase()转小写
     * str5.toLowerCase()
     */
    //str5.toLocaleLowerCase();
    //str5.toLowerCase()
    /**
     * 转大写
     * str5.toLocaleUpperCase()
     * str5.toUpperCase()
     */
    console.log(str5.toUpperCase());
    //str5.toLocaleUpperCase

    /**
     * trim()干掉字符串两端的重点
     */
    var str7="  sdsad sd sfd ";
    console.log("--"+str7.trim()+"--------");












    /**
     * 案例
     * 找到字符串中所有o位置,
     * 有bug 对比2修改
     */
    var str9="sDs osdf sFodfsod Od fdso ";

    //var index=str9.indexOf("o");

    /**
     * 2修改
     */
    function findO(str){
        var index = 0;
        var key = "o";
        while((index=str.indexOf(key,index))!=-1){
            console.log(index);
            index+=key.length;
        }
    }
    findO(str9);

    /**
     * 找出字符传中 每个字符出现了几次
     * 把字母作位键，次数作为值，添加到对象之中，遍历
     * 创建新对象--空对象没属性没方法
     * 
     */
    var str10=str9.toLocaleUpperCase();
    //--创建空对象
    var obj={};
    //--遍历字符串，获取每个字母
    for(var i =0;i<str10.length;i++){
        var key =str10[i];
        if(obj[key]){
            //if有键有次数了
            obj[key]++;
        }else{
            //如果对象中没这个字母，就加入对象，并给1次
            obj[key]=1;
        }
    }
    for(let key in obj){
        this.console.log(key+" : "+obj[key]);
    }
}














function changeToIp(num){  
    var str='';  
    var tt = new Array();  
    tt[0] = (num >>> 24) >>> 0;  
    tt[1] = ((num << 8) >>> 24) >>> 0;  
    tt[2] = (num << 16) >>> 24;  
    tt[3] = (num << 24) >>> 24;  
    str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);  
    return str;  
}  