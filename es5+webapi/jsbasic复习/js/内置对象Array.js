window.onload=function(){

    /**
     * 数组对象Array
     * arr.concat(...arr)
     * arr.every(callback)------返回值boolean
     * .filter(callback)返回符合条件的数组 
     *  slice(a,b).截取从索引a到小于索引b，并返回新数组
     * pop shift push unshift 可以用来做轮播图
     * .forEach(callback)
     * arr.sort();
     *  reverse()翻转数组
     *  .join(" ")数组以“”分割，返回字符串
     * .map(callback)返回一个新数组，每个经过callback的新数组
      * indexOf(元素)找某个元素的索引
      * console.log(arr.indexOf(100)--3)
      * .lastIndexOf()从最后去找，返回找的的索引
        * splice(a,b,c)方法 c为可选
        * 从索引为a的地方删除b个数据，并且插入c
     */
    //静态方法：大写构造函数调用的方法
    //实例方法：新建对象调用方法
    /**
     * Array.isArray(对象)--判断这个对象是不是数组
     * 与对象 instanceOf Array
     */
    this.console.log(Array.isArray([]));

    /**
     * arr.concat(...arr)
     */
    var arr=["1","3","6"];
    var arr1=["半天","yinshi"];
    this.console.log(arr.concat(arr1));
    /**
     * arr.every(callback)------返回值boolean
     * 测试每一个都满足函数,则返回true
     * callback内传入三个参数
     * 1.元素的值 2.索引的值 可选 3.(没用)谁调用了这个方法，第三参数就是谁
     */
    
    var flag=arr.every(function(ele,index){
        return ele>2;//每个都大于4
    })
    console.log(flag);
    /**
     * .filter(callback)
     * 返回符合条件的数组 
     */
    var arr4=arr.filter(function(ele){
        return ele>2;//每个都大于4
    })
    console.log(arr4);

    /**
     * .push(yuansu)//返回数组长度
     * 把值追加到数组末尾
     * .pop()//返回删除元素
     * 删除最后一个
     */
    console.log(arr.pop());
    console.log(arr.push(100));
    this.console.log(arr);

    /**
     * .shift()；--删除数组中第一个元素，返回删除元素
     * .unshift(值);---在数组头加入一个元素。返回长度
     */
    console.log(arr.shift());
    console.log(arr.unshift(3,"3"));
    this.console.log(arr);

    /**
     * pop shift push unshift 可以用来做轮播图
     */

     /**
      * .forEach(callback)
      * 便利数组
      */
     arr.forEach(function(ele){
         console.log(ele);
     })
     /**
      * indexOf(元素)找某个元素的索引
      * console.log(arr.indexOf(100)--3)
      * .lastIndexOf()从最后去找，返回找的的索引
      */


      /**
       * .join(" ")数组以“”分割，返回字符串
       */
     var arr3=["肥肥","智障","aa","bb","卿欲与"];
     var str = arr3.join("--love--");
     console.log(str);
     /**
      * .map(callback)返回一个新数组，每个经过callback的新数组
      */
     var nums=[1,2,3,4,5];
     console.log(nums.map(Math.sqrt));
     this.console.log(nums.map(function(ele){
         return Math.pow(ele,2);
     }));
     console.log(nums);
     /**
      * reverse()翻转数组
      */
     this.console.log(nums.reverse());
     /**
      * 排序
      * arr.sort();
      * 稳定sort
      */
     console.log(nums.sort());
     /* arr.sort(function(a,b){--------稳定
          if(a>b){
              return 1;
          }else if(a==b){
              return 0;
          }else{
              return -1;
          }
      });*/

      /**
       * 浅拷贝
       * slice(a,b).截取从索引a到小于索引b，并返回新数组
       */
    
       var newArr= nums.slice(1,4);
       this.console.log(newArr);

       /**
        * splice(a,b,c)方法 c为可选
        * 从索引为a的地方删除b个数据，并且插入c
        */
       var myFish = [1,2,3,4,5];
      myFish.splice(1,2,"pink");//从索引位1的位置删除两个值,并插入新值
      console.log(myFish);
}