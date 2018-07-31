window.onload=function(){
    /**
     * break关键字 循环中使用，立刻跳出当前所在循环，直跳一层
     */
    while(1){
        console.log("hello break");
        break;
    };
    /**
     * 
     *莫7==0在100-200中
     */
    for(let i=100;i<=200;i++){
        if(i % 7==0){
            console.log(i);
            break;
        }        
    };
    /**
     * continue 关键字。循环中遇到该关键字，直接下一次循环
     */
    var sum=0;
    for(let i =100;i<=200;i++)
    {
        if(i%2==0){
            continue;
        }
        else{
            sum+=i;
        }
    };
    console.log(sum);
    /*var sum=0;
    var i=100;
    while(i<=200){
        if(i%2==0){
            i++;
            continue;
        }else{
            sum+=i;
            i++;
        }
    }
    console.log(sum);*/

    /**
     * 通过构造函数创建数组
     * var 变量名=new Array(长度);
     * new Array(中)中写一个数字就是指的是数组长度
     * 如果写多个值，那么中间就是有值的数组
     * var array = []; //空数组
     * shu
     */
    var arr =new Array(12,24,435,325,22);
    this.console.log(arr);

    /**
     * 求数组中所有元素的和
     */
    var arr1=[1,2,3,4,5,6];
    var sum1=0;
    for(let i=0;i<arr1.length;i++)
    {
        sum1+=arr1[i];
    }
    console.log(sum1);
    /**
     * 求最大
     */
    var arr2=[5,6,2,4,1,8,6];
    var max_v=arr2[0];
    for(let i=0;i<arr2.length;i++){
        if(max_v<arr2[i]){
            max_v=arr2[i]
        }else{
            continue;
        }
    }
    this.console.log(max_v);
    /**
     * 倒序遍历数组
     */
    var arr3=[1,2,3,4,5,6,7,8];
    for(let i=arr3.length-1;i>0;i--){
        console.log(arr3[i]);
    };
    /**
     * 用|拼接到一起，产生一个字符串，并且输出
     */
    var arr4=[1,2,3,"sad","sfs","dfs"];
    var str1="";
    for(let i=0;i<arr4.length;i++)
    {
        str1+=arr4[i]+"|";
    }
    console.log(str1);
    /**
     * 反转数组 temp
     */
    var arr5=[1,2,3,4,5,6,7,8];
    for(let i=0;i<arr5.length/2;i++){
        var temp=arr5[i];
        arr5[i]=arr5[arr5.length-(i+1)];
        arr5[arr5.length-(i+1)]=temp;
    }
    this.console.log(arr5);


    /**
     * 冒泡排序
     * 把所有数据，按照顺序进行排列
     */
    var arr6=[8,5,9,2,6,1,4,7,3,8,6];
    /*循环控制比较轮数 */
    for(let i=0;i<arr6.length-1;i++){
        /*控制每一轮比较的次数 */
        for(var j=0;j<arr6.length-i-1;j++){
            if(arr6[j]<arr6[j+1]){
                var temp=arr6[j];
                arr6[j]=arr6[j+1];
                arr6[j+1]=temp;
            }
        }

    }
    this.console.log(arr6);
}