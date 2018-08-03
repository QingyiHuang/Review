window.onload=function(){
    /**
     * 冒泡函数
     */
    var arr =[2,5,4,8,1,4,5];
    function getSort(arr){
        for(let i=0;i<arr.length-1;i++){//排序次数
            for(let j=0;j<arr.length-1-i;j++){//每轮排序次数
                if(arr[j]>arr[j+1]){
                    var temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }
    console.log(getSort(arr));
    this.console.log(arr);
    /**
     * 数组方法
     */
    var arr2=[2,5,4,8,1,4,5];
    arr2.sort();
    console.log(arr2);
    /**
     * 自己封装实例方法
     */
    function SortArr(){
       this.mySort=function (arr){
        for(let i=0;i<arr.length-1;i++){//排序次数
            for(let j=0;j<arr.length-1-i;j++){//每轮排序次数
                if(arr[j]>arr[j+1]){
                    var temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }//实例方法不需要return
     } 
    }
    var arr3=[2,5,4,8,1,4,5];
    var arrsort = new SortArr();
    arrsort.mySort(arr3);
    
    /**
     * 清空数组，arr.length=0;
     */

     var dt = new Date();
     var dt2 = new Date(dt.valueOf());//获取dt 毫秒数，
     console.log(dt2);//毫秒转时间

}