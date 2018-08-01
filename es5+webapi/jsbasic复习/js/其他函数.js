window.onload=function(){
    /**
     * 对象是一组，无序属性的集合
     */
    function Person(name,age,flag){
        this.name=name;
        this.age=age;
        this.sex=flag;

        this.play=function(){
            console.log("haha");
            console.log(this.sex?"男":"女");
        }
    } 
    var per1=new Person();
    per1.play("sd",20,true);
    var flag= 0;
    console.log(flag?"nan":"nv");
    /**
     * JSON格式，一般都是成对，键值对
     * key  :   value
     * json 也是一个对象，数据都是成对的，一般json格式的数据，无论是键还是值都是双引号扩起来
     */
    var json={//第一眼 就是json格式
        "name":"xiaoming",
        "sex":"nan",
        "age":"20"
    }
    var obj={//也可以看成json格式数据了
        name:"男人",
        age:20
    }
    console.log(obj[name]);
    //遍历对象是不能通过for循环的
    this.console.log(json.name+json["name"]);
    /**
     * json 对象中的属性的名字
     * key是一个变量，这个变量中存储的是该对象的所有属性的名字:就是冒号左边的值
     */
    for(let key in json){
        this.console.log(key);
        this.console.log(json[key]);
    }
    /**
     * 对象中确实有这个属性，  对象.属性名字 或者对象["属性名字"]
     */

     /**
      * 基本类型 简单类型 ，值类型 number string boolean；栈中存储
      * 复杂类型 引用类型 object  //对象在堆上存储，地址在栈上 就是var  
      * 空类型 undefined null
      */

}