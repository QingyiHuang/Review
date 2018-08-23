/**
 * 
 当使用for...of循环遍历某种数据结构时，
 该循环会自动去寻找 Iterator 接口。
 */

/*ES6 的有些数据结构原生具备 Iterator 
接口（比如数组），即不用任何处理，
就可以被for...of循环遍历。原因在于，
这些数据结构原生部署了Symbol.iterator属性（详见下文），
另外一些数据结构没有（比如对象）。
凡是部署了Symbol.iterator属性的数据结构，
就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。

原生具备 Iterator 接口的数据结构如下。*/

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象

////////////////////为对象添加Iterator接口
let obj = {
    data:['hehe','haha'],
    [Symbol.iterator](){
        let index = 0;
        const that =this
        return{
            next(){
                if(index<that.data.length){
                    return{
                        value:that.data[index++]
                    }
                }else{
                    return{value:undefined}
                }
            }
        }
    }
}

undefined
let loly = obj[Symbol.iterator]();
undefined
loly.next()
{value: "hehe"}
loly.next()
{value: "haha"}
loly.next()
{value: undefined}

//扩展运算符（...）也会调用默认的 Iterator 接口。

// 例一
var str = 'hello';
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']
/*上面代码的扩展运算符内部就调用 Iterator 接口。
实际上，这提供了一种简便机制，可以将任何部署了 Iterator 接口的数据结构，转为数组。也就是说，只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组。
*/
let arr = [...iterable];

/**
 * yield let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
 */


 /**
  * 
一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，
就可以用for...of循环遍历它的成员。也就是说，for...of循环内部调用的是数据结构的
Symbol.iterator方法。
  */



  /**
   * 
有些数据结构是在现有数据结构的基础上，计算生成的。
比如，ES6 的数组、Set、Map 都部署了以下三个方法，调用后都返回遍历器对象。

entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。
对于数组，键名就是索引值；对于 Set，键名与键值相同。Map 结构的 Iterator 接口，
默认就是调用entries方法。
keys() 返回一个遍历器对象，用来遍历所有的键名。
values() 返回一个遍历器对象，用来遍历所有的键值。
   */