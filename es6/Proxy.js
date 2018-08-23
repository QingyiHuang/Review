//Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。
//ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。
var proxy = new Proxy(target, handler);
//new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。


///////拦截读取属性
var proxy = new Proxy({}, {
    get: function(target, property) {
      return 35;
    }
  });
  proxy.time // 35
  proxy.name // 35
  proxy.title // 35
/**
Proxy接受两个参数。第一个参数是所要代理的目标
对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。比如，上面代码中，配置对象有一个get方法，
用来拦截对目标对象属性的访问请求。
 */

 /**
  get方法的两个参数分别是目标对象和所要访问的属性。可以看到，由于拦截函数总是返回35，所以访问任何属性都得到35。
  */
 object .create

 let validator = {
    set: function(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
  
      // 对于满足条件的 age 属性以及其他属性，直接保存
      obj[prop] = value;
    }
  };
  
  let person = new Proxy({}, validator);
  
  person.age = 100;
  
  person.age // 100
  person.age = 'young' // 报错
  person.age = 300 // 报错
  上面代码中，由于设置了存值函数set，任何不符合要求的age属性赋值，都会抛出一个错误，这是数据验证的一种实现方法。利用set方法，还可以数据绑定，即每当对象发生变化时，会自动更新 DOM。
  
  有时，我们会在对象上面设置内部属性，属性名的第一个字符使用下划线开头，表示这些属性不应该被外部使用。结合get和set方法，就可以做到防止这些内部属性被外部读写

  const handler = {
    set: function(obj, prop, value, receiver) {
      obj[prop] = receiver;
    }
  };
  const proxy = new Proxy({}, handler);
  const myObj = {};
  Object.setPrototypeOf(myObj, proxy);
  
  myObj.foo = 'bar';
  myObj.foo === myObj // true
 //上面代码中，设置myObj.foo属性的值时，myObj并没有foo属性，因此引擎会到myObj的原型链去找foo属性。myObj的原型对象proxy是一个 Proxy 实例，设置它的foo属性会触发set方法。这时，第四个参数receiver就指向原始赋值行为所在的对象myObj。
 let obj ={

}
Object.defineProperty(obj,'haha',{
    value:'hqy',
    writable:false,
    enumerable:true,
    configurable:true//决定上面三个是否可以修改
    
})

const handler ={
    set:function(obj,prop,value,receiver){
        obj[prop] = "simple"
    }
}
//设置拦截器
let proxy1=new Proxy(obj,handler);
proxy1.momo='qq';
console.log(proxy1.momo);
proxy1.haha='qq2';
console.log(proxy1.haha);

/*$ node test.js
simple
hqy
*/

//////////////////////////////////////apply方法拦截函数的调用、call和apply操作。

//has方法可以接受两个参数，分别是目标对象、需查询的属性名。

//下面的例子使用has方法隐藏某些属性，不被in运算符发现。
apply()
apply方法拦截函数的调用、call和apply操作。

apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。

var handler = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments);
  }
};
下面是一个例子。

var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p()
// "I am the proxy"
上面代码中，变量p是 Proxy 的实例，当它作为函数调用时（p()），就会被apply方法拦截，返回一个字符串。

下面是另外一个例子。

var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};
function sum (left, right) {
  return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2) // 6
proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30
上面代码中，每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。

另外，直接调用Reflect.apply方法，也会被拦截。

Reflect.apply(proxy, null, [9, 10]) // 38

let stu1 = {name: '张三', score: 59};
let stu2 = {name: '李四', score: 99};

let handler = {
  has(target, prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(`${target.name} 不及格`);
      return false;
    }
    return prop in target;
  }
}

let oproxy1 = new Proxy(stu1, handler);
let oproxy2 = new Proxy(stu2, handler);

'score' in oproxy1
// 张三 不及格
// false

'score' in oproxy2
// true

for (let a in oproxy1) {
  console.log(oproxy1[a]);
}
// 张三
// 59

for (let b in oproxy2) {
  console.log(oproxy2[b]);
}
// 李四
// 99
上面代码中，has拦截只对in运算符生效，对for...in循环不生效，导致不符合要求的属性没有被for...in循环所排除。



defineProperty()
defineProperty方法拦截了Object.defineProperty操作。

var handler = {
  defineProperty (target, key, descriptor) {
    return false;
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = 'bar' // 不会生效
上面代码中，defineProperty方法返回false，导致添加新属性总是无效。

注意，如果目标对象不可扩展（extensible），则defineProperty不能增加目标对象上不存在的属性，否则会报错。另外，如果目标对象的某个属性
不可写（writable）或不可配置（configurable），则defineProperty方法不得改变这两个设置。




Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”