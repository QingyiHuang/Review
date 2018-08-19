let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97

//value属性是目标属性的值。

var obj = {};
obj.p = 123;

Object.getOwnPropertyDescriptor(obj, 'p').value
// 123

Object.defineProperty(obj, 'p', { value: 246 });
obj.p // 246
//上面代码是通过value属性，读取或改写obj.p的例子。

writable
//writable属性是一个布尔值，决定了目标属性的值（value）是否可以被改变。

var obj = {};

Object.defineProperty(obj, 'a', {
  value: 37,
  writable: false
});

obj.a // 37
obj.a = 25;
obj.a // 37



let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
//这三个方法都支持第二个参数，表示开始搜索的位置。

let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

////////////////////////////////////repeat()
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""

///////////////////////////padEnd()   padStart（）
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'


////////////////matchAll()
//matchAll方法返回一个正则表达式在当前字符串的所有匹配


//////////////////////模版字符串
// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`


/**
 * 模版字符创------很难！
 */