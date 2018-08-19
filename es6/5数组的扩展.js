//////////////////////扩展运算符
//扩展运算符（spread）是三个点（...）。
//它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
function push(array, ...items) {
    array.push(...items);
  }
  
  function add(x, y) {
    return x + y;
  }
  
  const numbers = [4, 38];
  add(...numbers) // 42

/////////////////////////////替代函数的apply
// ES5 的写法  apply展开数组 将数组中的参数取出
function f(x, y, z) {
    // ...
  }
  var args = [0, 1, 2];
  f.apply(null, args);
  
  // ES6的写法
  function f(x, y, z) {
    // ...
  }
  let args = [0, 1, 2];
  f(...args);

  // ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);

//////////////////////////数组浅拷贝
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

//valueOf方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的valueOf方法不尽一致，数组的valueOf方法返回数组本身。

var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
//toString方法也是对象的通用方法，数组的toString方法返回数组的字符串形式。

var arr = [1, 2, 3];
arr.toString() // "1,2,3"

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"

//通过call方法，这个方法也可以用于字符串或类似数组的对象。

Array.prototype.join.call('hello', '-')
// "h-e-l-l-o"

var obj = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(obj, '-')
// 'a-b'

//concat方法用于多个数组的合并。它将新数组的成员，
//添加到原数组成员的后部，然后返回一个新数组，原数组不变。

//slice方法用于提取目标数组的一部分，返回一个新数组，原数组不变。

arr.slice(start, end);

//下面代码除了删除成员，还插入了两个新成员。
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]

//map方法将数组的所有成员依次传入参数函数，
//然后把每一次的执行结果组成一个新数组返回。

//forEach方法也可以接受第二个参数，绑定参数函数的this变量。

var out = [];

[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);

out // [1, 4, 9]

//filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

//它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。

[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
//上面代码将大于3的数组成员，作为一个新数组返回。

var arr = [0, 1, 'a', false];

arr.filter(Boolean)

//filter方法还可以接受第二个参数，用来绑定参数函数内部的this变量。

var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]

//
//some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。

var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
//上面代码中，如果数组arr有一个成员大于等于3，some方法就返回true。

//every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。

var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false

const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []
//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

//扩展运算符还可以将字符串转为真正的数组。

[...'hello']
// [ "h", "e", "l", "l", "o" ]

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  let arr = [...map.keys()]; // [1, 2, 3]

  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法 将伪数组转为数组
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

//Array.of方法用于将一组值，转换为数组。

Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

///////////////////copyWithin()
Array.prototype.copyWithin(target, start = 0, end = this.length)
//它接受三个参数。

//target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
//start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
//这三个参数都应该是数值，如果不是，会自动转为数值。

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]



/////////////////////////////////////////find  findIndex
[1, 4, -5, 10].find((n) => n < 0)
// -5
//上面代码找出数组中第一个小于 0 的成员。

//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

/////////////////////////////////////fill
//fill方法使用给定值，填充一个数组。

['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
//上面代码表明，fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。

//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']

for (let index of ['a', 'b'].keys()) {
    console.log(index);
  }
  // 0
  // 1
  
  for (let elem of ['a', 'b'].values()) {
    console.log(elem);
  }
  // 'a'
  // 'b'
  
  for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
  }
  // 0 "a"
  // 1 "b"

//Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016 引入了该方法。

[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
//该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true


/////////////////////flat  flatmap
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
flat()//默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。

[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

//如果原数组有空位，flat()方法会跳过空位。