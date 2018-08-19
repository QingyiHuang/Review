/**
 * es6中原始数据类型
 *  undefined boolean number string object null Symbol
 */
let s = Symbol();

typeof s
// "symbol"
/**
 * Symbol函数前不能使用new命令，否则会报错。
 * 这是因为生成的 Symbol 是一个原始类型的值，不是对象。
 * 也就是说，由于 Symbol 值不是对象，
 * 所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
 */
let s1 = Symbol('foo');
let s2 = Symbol('bar');
s1 // Symbol(foo)
s2 // Symbol(bar)
s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
//s1和s2是两个 Symbol 值。
//如果不加参数，它们在控制台的输出都是Symbol()，
//不利于区分。有了参数以后，就等于为它们加上了描述，
//输出的时候就能够分清，到底是哪一个值。
var obj = {name:"haha"}
undefined
Symbol(obj)
//Symbol([object Object])
/*如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，
将其转为字符串，然后才生成一个 Symbol 值。*/


//Symbol 值不能与其他类型的值进行运算，会报错

/*由于每一个 Symbol 值都是不相等的，
这意味着 Symbol 值可以作为标识符，用于对象的属性名，
就能保证不会出现同名的属性。
这对于一个对象由多个模块构成的情况非常有用，
能防止某一个键被不小心改写或覆盖。*/

let mySymbol = Symbol();
// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';
// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};
// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
//对象属性名为一个Symbol值，Symbol 值作为对象属性名时，不能用点运算符。
//同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

let s = Symbol();
let obj = {
  [s]: function (arg) { ... }
};
obj[s](123);
//上面代码中，如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个 Symbol 值。

//Symbol属性名遍历
/**
 * Symbol 作为属性名，该属性不会出现在for...in、
 * for...of循环中，也不会被Object.keys()、
 * Object.getOwnPropertyNames()、JSON.stringify()返回。
 * 但是，它也不是私有属性，
 * 有一个Object.getOwnPropertySymbols方法，
 * 可以获取指定对象的所有 Symbol 属性名。

Object.getOwnPropertySymbols方法返回一个数组，
成员是当前对象的所有用作属性名的 Symbol 值
 */
const obj = {};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
const objectSymbols = Object.getOwnPropertySymbols(obj);
objectSymbols
// [Symbol(a), Symbol(b)]

/**
 * 一个api除外
 * Reflect.ownKeys方法可以返回所有类型的键名，
 * 包括常规键名和 Symbol 键名
 */
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
//////////////////////////////////////////////Symbol.for() Symbol.keyFor()
/**
 * Symbol.for()与Symbol()这两种写法，
 * 都会生成新的 Symbol。它们的区别是，
 * 前者会被登记在全局环境中供搜索，后者不会。
 * Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，
 * 而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
 * 比如，如果你调用Symbol.for("cat")30 次，
 * 每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，
 * 会返回 30 个不同的 Symbol 值。
 */
Symbol.for("bar") === Symbol.for("bar")
// true
Symbol("bar") === Symbol("bar")
// false

//上面代码中，由于Symbol()写法没有登记机制，所以每次调用都会返回一个不同的值。
//Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
//上面代码中，变量s2属于未登记的 Symbol 值，所以返回undefined。

///////////////////////////////////////////////////11个方法