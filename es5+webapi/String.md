字符串对象是一个类似数组的对象（很像数组，但不是数组）。

```
new String('abc')
// String {0: "a", 1: "b", 2: "c", length: 3}

(new String('abc'))[1] // "b"
```

```
String.fromCharCode() // ""
String.fromCharCode(97) // "a"
String.fromCharCode(104, 101, 108, 108, 111)
// "hello"
```

String.fromCharCode() 

```javascript
String.prototype.charAt()
charAt方法返回指定位置的字符，参数是从0开始编号的位置
'abc'.charAt(1) // "b"
'abc'[1] // "b"
如果参数为负数，或大于等于字符串的长度，charAt返回空字符串。

'abc'.charAt(-1) // ""
'abc'.charAt(3) // ""


'JavaScript'.slice(0, 4) // "Java"  等同于 'JavaScript'.substring(0, 4) // "Java" 等同于'JavaScript'.substr(4, 6) // "Script"
如果省略第二个参数，则表示子字符串一直到原字符串结束。

'JavaScript'.slice(4) // "Script"


如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。

'JavaScript'.slice(-6) // "Script"
'JavaScript'.slice(0, -6) // "Java"
'JavaScript'.slice(-2, -1) // "p"

split方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

'a|b|c'.split('|') // ["a", "b", "c"]
如果分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。

'a|b|c'.split('') // ["a", "|", "b", "|", "c"]
如果省略参数，则返回数组的唯一成员就是原字符串。

'a|b|c'.split() // ["a|b|c"]
如果满足分割规则的两个部分紧邻着（即两个分割符中间没有其他字符），则返回数组之中会有一个空字符串。

'a||c'.split('|') // ['a', '', 'c']
如果满足分割规则的部分处于字符串的开头或结尾（即它的前面或后面没有其他字符），则返回数组的第一个或最后一个成员是一个空字符串。

'|b|c'.split('|') // ["", "b", "c"]
'a|b|'.split('|') // ["a", "b", ""]
split方法还可以接受第二个参数，限定返回数组的最大成员数。

'a|b|c'.split('|', 0) // []
'a|b|c'.split('|', 1) // ["a"]
'a|b|c'.split('|', 2) // ["a", "b"]
'a|b|c'.split('|', 3) // ["a", "b", "c"]
'a|b|c'.split('|', 4) // ["a", "b", "c"]
上面代码中，split方法的第二个参数，决定了返回数组的成员数。
```

