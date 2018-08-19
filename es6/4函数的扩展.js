//ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello


function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  
  const p = new Point();
  p // { x: 0, y: 0 }

  //////////////////////////解构默认值
  //下面是另一个解构赋值默认值的例子。

function fetch(url, { body = '', method = 'GET', headers = {} }) {
  console.log(method);
}

fetch('http://example.com', {})
// "GET"

fetch('http://example.com')
// 报错
//上面代码中，如果函数fetch的第二个参数是一个对象，就可以为它的三个属性设置默认值。这种写法不能省略第二个参数，如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值。

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
  console.log(method);
}

fetch('http://example.com')

//函数的length
//指定了默认值以后，函数的length属性，
//将返回没有指定默认值的参数个数。也就是说，指定了默认值后，
//length属性将失真。
//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。

(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
////默认参数不赋值的要放在赋值的形参前面

/////////////////////作用域
var x = 1;

function foo(x = x) {//------------->相当于letx 此时全局有x 会干扰let x重新定义x会死区
  // ...
}

foo() // ReferenceError: x is not defined


//////////////////////////////////////////////rest
//ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3)
//函数的length属性，不包括 rest 参数。
//注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

/////////////////////////////////name
function foo() {}
foo.name // "foo"

//Function构造函数返回的函数实例，name属性的值为anonymous。

(new Function).name // "anonymous"

//bind返回的函数，name属性值会加上bound前缀。

function foo() {};
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "

/////////////////////////////箭头函数
/**
 * （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
 * @param {*} v 
 */
var f = v => v;
// 等同于
var f = function (v) {
  return v;
};

//如果箭头函数不需要参数或需要多个参数，
//就使用一个圆括号代表参数部分。

var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象
//必须在对象外面加上括号，否则会报错。
let getTempItem = id => ({ id: id, name: "Temp" });

//箭头函数与变量解构
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]

//this
function foo() {
    setTimeout(() => {
      console.log('id:', this.id);
    }, 100);
  }
  
  var id = 21;
  
  foo.call({ id: 42 });
  // id: 42
  //上面代码中，setTimeout的参数是一个箭头函数，
  //这个箭头函数的定义生效是在foo函数生成时，
  //而它的真正执行要等到 100 毫秒后。如果是普通函数，
  //执行时this应该指向全局对象window，这时应该输出21。
  //但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。

  ////箭头2 this
  function foo() {
    return () => {
      return () => {
        return () => {
          console.log('id:', this.id);
        };
      };
    };
  }
  
  var f = foo.call({id: 1});
  
  var t1 = f.call({id: 2})()(); // id: 1
  var t2 = f().call({id: 3})(); // id: 1
  var t3 = f()().call({id: 4}); // id: 1

  /**
   * 另外，由于箭头函数没有自己的this，
   * 所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
   */

   //冒号::
  foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return obj::hasOwnProperty(key);
}