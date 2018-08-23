Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。

（1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），
放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。
也就是说，从Reflect对象上可以拿到语言内部的方法。

（2） 修改某些Object方法的返回结果，让其变得更合理。
比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，
会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回false。

try {
    Object.defineProperty(target, property, attributes);
    // success
  } catch (e) {
    // failure
  }
  // 新写法
  if (Reflect.defineProperty(target, property, attributes)) {
    // success
  } else {
    // failure
  }

  //让Object操作都变成函数行为。
  //某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)
  //让它们变成了函数行为。

// 老写法
'assign' in Object // true
// 新写法
Reflect.has(Object, 'assign') // true

//////////////Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象
//的方法就能在Reflect对象上面找到对应的方法，这就让Proxy对象可以方便的调用
//Reflect方法，完成默认行为，作为修改行为的基础，就是说，无论Proxy怎么修改默认行为，我们总是可以在Reflect上获取默认行为



/**
 * Reflect 具有13个静态方法
 * 
Reflect.apply(target, thisArg, args)
Reflect.construct(target, args)
Reflect.get(target, name, receiver)
Reflect.set(target, name, value, receiver)
Reflect.defineProperty(target, name, desc)
Reflect.deleteProperty(target, name)
Reflect.has(target, name)
Reflect.ownKeys(target)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)
Reflect.getOwnPropertyDescriptor(target, name)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)
 */