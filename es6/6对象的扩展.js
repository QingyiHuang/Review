//对象简写
function f(x, y) {
    return {x, y};
  }
  
  // 等同于
  
  function f(x, y) {
    return {x: x, y: y};
  }
  
  f(1, 2) // Object {x: 1, y: 2}
  //方法简写
  const o = {
    method() {
      return "Hello!";
    }
  };
  
  // 等同于
  
  const o = {
    method: function() {
      return "Hello!";
    }
  };

  //commonjs 规范 简写exports导出
 // CommonJS 模块输出一组变量，就非常合适使用简洁写法。

let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};

//ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};

//注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。

const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

myObject // Object {[object Object]: "valueB"}
//上面代码中，[keyA]和[keyB]得到的都是[object Object]，所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性。


/////////////////////方法的name属性
//函数的name属性，返回函数名。对象方法也是函数，因此也有name属性
//get 和set属性存储的方法没有name属性



//////////////////////////////////////Object is()
//Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
///////////////////////////////唯一不同之处在+-0 和NaN上面
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true


///////////////////////Object.assign()
//Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
//注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

//如果只有一个参数，Object.assign会直接返回该参数。

const obj = {a: 1};
Object.assign(obj) === obj // true
//如果该参数不是对象，则会先转成对象，然后返回。

typeof Object.assign(2) // "object"
//由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。

Object.assign(undefined) // 报错
Object.assign(null) // 报错
//undefine and null cannot be target so it can be sourses ,and it can be skiped
//Object.assign拷贝的属性是有限制的，
//只拷贝源对象的自身属性（不拷贝继承属性），
//也不拷贝不可枚举的属性（enumerable: false）。

//Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。

const obj1 = {a: {b: 1}};
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
obj2.a.b // 2

//Object.assign可以用来处理数组，但是会把数组视为对象。

Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
//上面代码中，Object.assign把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。
//Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。

const source = {
  get foo() { return 1 }//取值函数不会拷贝 而是函数名+值
};
const target = {};

Object.assign(target, source)
// { foo: 1 }
//上面代码中，source对象的foo属性是一个取值函数，Object.assign不会复制这个取值函数，只会拿到值以后，将这个值复制过去。

/**
 * Object.assign()方法
 */
//1为对象添加属性/方法
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}

Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});
//2克隆对象
function clone(origin) {
  return Object.assign({}, origin);
}
//上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。

//不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。

function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
///合并多个对象
//将多个对象合并到某个对象。

const merge =
  (target, ...sources) => Object.assign(target, ...sources);
//如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。

const merge =
  (...sources) => Object.assign({}, ...sources);

////////属性可枚举性，和遍历
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
/**
 * 描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。

目前，有四个操作会忽略enumerable为false的属性。

for...in循环：只遍历对象自身的和继承的可枚举的属性。
Object.keys()：返回对象自身的所有可枚举的属性的键名。
JSON.stringify()：只串行化对象自身的可枚举的属性。
Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
 */

 /**
  * 遍历对象的属性
  * ES6 一共有 5 种方法可以遍历对象的属性。

（1）for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

（2）Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

（3）Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

（4）Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

（5）Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

首先遍历所有数值键，按照数值升序排列。
其次遍历所有字符串键，按照加入时间升序排列。
最后遍历所有 Symbol 键，按照加入时间升序排列。
  */
 /*Object.getOwnPropertyDescriptor
 方法会返回某个对象属性的描述对象（descriptor）。
 ES2017 引入了Object.getOwnPropertyDescriptors方法，
 返回指定对象所有自身属性（非继承属性）的描述对象。
*/
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }

//该方法的引入目的，主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题

//该方法实现原理
function getOwnPropertyDescriptors(obj) {
  const result = {};
  for (let key of Reflect.ownKeys(obj)) {
    result[key] = Object.getOwnPropertyDescriptor(obj, key);
  }
  return result;
}
/**
 * Reflect.ownKeys 返回一个数组包含对象所有键值名
 */
for(let index in aArray){
  console.log(`${aArray[index]}`);
}
//使用for...of循环：

for(var value of aArray){
  console.log(value);
}
//for...of不能循环普通的对象，需要通过和Object.keys()搭配使用

const shallowMerge = (target, source) => Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptors(source)
);
/**
 * Object.getOwnPropertyDescriptors方法的另一个用处，
 * 是配合Object.create方法，
 * 将对象属性克隆到一个新对象。这属于浅拷贝。
 */

const shallowClone = (obj) => Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

//////////////////////__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf() 
//__proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x // 10
obj.y // 20
obj.z // 40
//上面代码将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性
/*Object.setPrototypeOf方法的作用与__proto__相同，
用来设置一个对象的prototype对象，返回参数对象本身。
它是 ES6 正式推荐的设置原型对象的方法。*/
//改变对象的__proto__对象的指向

//如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。

Object.setPrototypeOf(1, {}) === 1 // true
Object.setPrototypeOf('foo', {}) === 'foo' // true
Object.setPrototypeOf(true, {}) === true // true
//由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错。
//该方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象。
Object.getPrototypeOf(obj)===obj.__proto__//true

//////////////super关键字
//this关键字总是指向函数所在的当前对象，
//ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。

const proto = {
  foo: 'hello'
};
const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};
Object.setPrototypeOf(obj, proto);
obj.find() // "hello"

//super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
/**
 * super.foo等同于Object.getPrototypeOf(this).foo（属性）
 * 或Object.getPrototypeOf(this).foo.call(this)（方法）。
 */
const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj, proto);

obj.foo() // "world"
//上面代码中，super.foo指向原型对象proto的foo方法
//，但是绑定的this却还是当前对象obj，因此输出的就是world。
//还是谁调用就是谁


/**
 *  Object.keys()    values()   entries()
 */
/**
 * ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
ES2017 引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。
 */
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]
//返回数组的成员顺序，与本章的《属性的遍历》部分介绍的排列规则一致。

const obj = { 100: 'a', 2: 'b', 7: 'c' };
Object.values(obj)
// ["b", "c", "a"]

const obj = Object.create({}, {p: {value: 42}});
Object.values(obj) // []
//上面代码中，Object.create方法的第二个参数添加的对象属性（属性p），如果不显式声明，默认是不可遍历的，因为p的属性描述对象的enumerable默认是false，Object.values不会返回这个属性。只要把enumerable改成true，Object.values就会返回属性p的值。

const obj = Object.create({}, {p:
  {
    value: 42,
    enumerable: true
  }
});
Object.values(obj) // [42]
//create之后 如果不给属性设置enumerable就默认不给枚举
//Object.values会过滤属性名为 Symbol 值的属性
//如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。

Object.values('foo')
// ['f', 'o', 'o']
//如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组。

Object.values(42) // []
Object.values(true) // []

//Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。

const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]



//////////////////////////////////////对象的扩展运算符
//结构
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }

//对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。

let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }
let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);

//上面只是浅拷贝  若是想完整拷贝
// 写法一
const clone1 = {
  __proto__: Object.getPrototypeOf(obj),
  ...obj
};
// 写法二
const clone2 = Object.assign(
  Object.create(Object.getPrototypeOf(obj)),
  obj
);
// 写法三
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)