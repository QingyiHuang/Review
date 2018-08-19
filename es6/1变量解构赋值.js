//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
/////////////////////basic
let[a,b,c]=[1,2,3]
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
///////////////////////////////////////////////set
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"

////////////////////////////////////解构默认值
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

function f() {
    console.log('aaa');
  }
  
  let [x = f()] = [1];
  //上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。

  let [x = 1, y = x] = [];     // x=1; y=1
  let [x = 1, y = x] = [2];    // x=2; y=2
  let [x = 1, y = x] = [1, 2]; // x=1; y=2
  let [x = y, y = 1] = [];     // ReferenceError: y is not defined
  //上面最后一个表达式之所以会报错，是因为x用y做默认值时，y还没有声明。











/**
 * 对象解构赋值
 * 也就是说，对象的解构赋值的内部机制，是先找到同名属性，
 * 然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
 */
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，
//变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined

var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null

//如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。

// 报错
let {foo: {bar}} = {baz: 'baz'};
//上面代码中，等号左边对象的foo属性，对应一个子对象。该子对象的bar属性，解构时会报错。原因很简单，因为foo这时等于undefined，再取子属性就会报错，请看下面的代码。

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

let {length : len} = 'hello';
len // 5

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
//上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。

//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError

///////////////函数参数的解构///////////////////////////////////
//函数的参数也可以使用解构赋值。

function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
//上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。














/////////////////////////////////////解构作用
用途
变量的解构赋值用途很多。

（1）交换变量的值

let x = 1;
let y = 2;

[x, y] = [y, x];
上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

（2）从函数返回多个值

函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。

// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
（3）函数参数的定义

解构赋值可以方便地将一组参数与变量名对应起来。

// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
（4）提取 JSON 数据

解构赋值对提取 JSON 对象中的数据，尤其有用。

let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
上面代码可以快速提取 JSON 数据的值。

（5）函数参数的默认值

jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

（6）遍历 Map 结构

任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
如果只想获取键名，或者只想获取键值，可以写成下面这样。

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
（7）输入模块的指定方法

加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

const { SourceMapConsumer, SourceNode } = require("source-map");