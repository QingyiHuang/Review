## JSON 对象

`JSON`对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。它有两个静态方法：`JSON.stringify()`和`JSON.parse()`。

## JSON.stringify()

### 基本用法

`JSON.stringify`方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被`JSON.parse`方法还原。

```
JSON.stringify('abc') // ""abc""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify({}) // "{}"

JSON.stringify([1, "false", false])
// '[1,"false",false]'

JSON.stringify({ name: "张三" })
// '{"name":"张三"}'
```

上面代码将各种类型的值，转成 JSON 字符串。

注意，对于原始类型的字符串，转换结果会带双引号。

```
JSON.stringify('foo') === "foo" // false
JSON.stringify('foo') === "\"foo\"" // true
```

上面代码中，字符串`foo`，被转成了`"\"foo"\"`。这是因为将来还原的时候，内层双引号可以让 JavaScript 引擎知道，这是一个字符串，而不是其他类型的值。

```
JSON.stringify(false) // "false"
JSON.stringify('false') // "\"false\""
```

上面代码中，如果不是内层的双引号，将来还原的时候，引擎就无法知道原始值是布尔值还是字符串。

如果对象的属性是`undefined`、函数或 XML 对象，该属性会被`JSON.stringify`过滤。

```
var obj = {
  a: undefined,
  b: function () {}
};

JSON.stringify(obj) // "{}"
```

上面代码中，对象`obj`的`a`属性是`undefined`，而`b`属性是一个函数，结果都被`JSON.stringify`过滤。

如果数组的成员是`undefined`、函数或 XML 对象，则这些值被转成`null`。

```
var arr = [undefined, function () {}];
JSON.stringify(arr) // "[null,null]"
```

上面代码中，数组`arr`的成员是`undefined`和函数，它们都被转成了`null`。

正则对象会被转成空对象。

```
JSON.stringify(/foo/) // "{}"
```

`JSON.stringify`方法会忽略对象的不可遍历属性。

```
var obj = {};
Object.defineProperties(obj, {
  'foo': {
    value: 1,
    enumerable: true
  },
  'bar': {
    value: 2,
    enumerable: false
  }
});

JSON.stringify(obj); // "{"foo":1}"
```

上面代码中，`bar`是`obj`对象的不可遍历属性，`JSON.stringify`方法会忽略这个属性。

### 第二个参数

`JSON.stringify`方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。

```
var obj = {
  'prop1': 'value1',
  'prop2': 'value2',
  'prop3': 'value3'
};

var selectedProperties = ['prop1', 'prop2'];

JSON.stringify(obj, selectedProperties)
// "{"prop1":"value1","prop2":"value2"}"
```

上面代码中，`JSON.stringify`方法的第二个参数指定，只转`prop1`和`prop2`两个属性。

这个类似白名单的数组，只对对象的属性有效，对数组无效。

```
JSON.stringify(['a', 'b'], ['0'])
// "["a","b"]"

JSON.stringify({0: 'a', 1: 'b'}, ['0'])
// "{"0":"a"}"
```

上面代码中，第二个参数指定 JSON 格式只转`0`号属性，实际上对数组是无效的，只对对象有效。

第二个参数还可以是一个函数，用来更改`JSON.stringify`的返回值。

```
function f(key, value) {
  if (typeof value === "number") {
    value = 2 * value;
  }
  return value;
}

JSON.stringify({ a: 1, b: 2 }, f)
// '{"a": 2,"b": 4}'
```

上面代码中的`f`函数，接受两个参数，分别是被转换的对象的键名和键值。如果键值是数值，就将它乘以`2`，否则就原样返回。

注意，这个处理函数是递归处理所有的键。

```
var o = {a: {b: 1}};

function f(key, value) {
  console.log("["+ key +"]:" + value);
  return value;
}

JSON.stringify(o, f)
// []:[object Object]
// [a]:[object Object]
// [b]:1
// '{"a":{"b":1}}'
```

上面代码中，对象`o`一共会被`f`函数处理三次，最后那行是`JSON.stringify`的输出。第一次键名为空，键值是整个对象`o`；第二次键名为`a`，键值是`{b: 1}`；第三次键名为`b`，键值为1。

递归处理中，每一次处理的对象，都是前一次返回的值。

```
var o = {a: 1};

function f(key, value) {
  if (typeof value === 'object') {
    return {b: 2};
  }
  return value * 2;
}

JSON.stringify(o, f)
// "{"b": 4}"
```

上面代码中，`f`函数修改了对象`o`，接着`JSON.stringify`方法就递归处理修改后的对象`o`。

如果处理函数返回`undefined`或没有返回值，则该属性会被忽略。

```
function f(key, value) {
  if (typeof(value) === "string") {
    return undefined;
  }
  return value;
}

JSON.stringify({ a: "abc", b: 123 }, f)
// '{"b": 123}'
```

上面代码中，`a`属性经过处理后，返回`undefined`，于是该属性被忽略了。

### 第三个参数

`JSON.stringify`还可以接受第三个参数，用于增加返回的 JSON 字符串的可读性。如果是数字，表示每个属性前面添加的空格（最多不超过10个）；如果是字符串（不超过10个字符），则该字符串会添加在每行前面。

```
JSON.stringify({ p1: 1, p2: 2 }, null, 2);
/*
"{
  "p1": 1,
  "p2": 2
}"
*/

JSON.stringify({ p1:1, p2:2 }, null, '|-');
/*
"{
|-"p1": 1,
|-"p2": 2
}"
*/
```

### 参数对象的 toJSON 方法



```
var user = {
  firstName: '三',
  lastName: '张',

  get fullName(){
    return this.lastName + this.firstName;
  },

  toJSON: function () {
    return {
      name: this.lastName + this.firstName
    };
  }
};

JSON.stringify(user)
// "{"name":"张三"}"
```

上面代码中，`JSON.stringify`发现参数对象有`toJSON`方法，就直接使用这个方法的返回值作为参数，而忽略原对象的其他参数。



## JSON.parse() [#](https://wangdoc.com/javascript/stdlib/json.html#jsonparse) 

`JSON.parse`方法用于将 JSON 字符串转换成对应的值。

```
JSON.parse('{}') // {}
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null

var o = JSON.parse('{"name": "张三"}');
o.name // 张三
```

如果传入的字符串不是有效的 JSON 格式，`JSON.parse`方法将报错。

```
JSON.parse("'String'") // illegal single quotes
// SyntaxError: Unexpected token ILLEGAL
```

上面代码中，双引号字符串中是一个单引号字符串，因为单引号字符串不符合 JSON 格式，所以报错。

为了处理解析错误，可以将`JSON.parse`方法放在`try...catch`代码块中。

```
try {
  JSON.parse("'String'");
} catch(e) {
  console.log('parsing error');
}
```

`JSON.parse`方法可以接受一个处理函数，作为第二个参数，用法与`JSON.stringify`方法类似。

```
function f(key, value) {
  if (key === 'a') {
    return value + 10;
  }
  return value;
}

JSON.parse('{"a": 1, "b": 2}', f)
// {a: 11, b: 2}
```

上面代码中，`JSON.parse`的第二个参数是一个函数，如果键名是`a`，该函数会将键值加上10。

