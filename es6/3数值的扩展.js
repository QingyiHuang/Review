Number.isFinite()//对于非数值一律返回false,
Number.isNaN()//只有对于NaN才返回true，非NaN一律返回false。

Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

//ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

//用来判断一个数值是否为整数。
Number.isInteger()

Number.isInteger(25) // true
Number.isInteger(25.1) // false

//误差
Number.EPSILON
//实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，
//就可以认为已经没有意义了，即不存在误差了。
//Number.EPSILON可以用来设置“能够接受的误差范围”
function withinErrorMargin (left, right) {
    return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
  }
  
  0.1 + 0.2 === 0.3 // false
  withinErrorMargin(0.1 + 0.2, 0.3) // true
  
  1.1 + 1.3 === 2.4 // false
  withinErrorMargin(1.1 + 1.3, 2.4) // true

  //Math.trunc方法用于去除一个数的小数部分，返回整数部分。


  ////////////////////////指数运算符号 和Math.pow（啊，a）差点在最后一位数字不一样
  let a = 1.5;
    a **= 2;
    // 等同于 a = a * a;

    let b = 4;
    b **= 3;
    // 等同于 b = b * b * b;