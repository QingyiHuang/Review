extend({}, {
    get a() { return 1 }
  })
  // {a: 1}
  //为了解决这个问题，我们可以通过Object.defineProperty方法来拷贝属性。
  
  var extend = function (to, from) {
    for (var property in from) {
      if (!from.hasOwnProperty(property)) continue;
      Object.defineProperty(
        to,
        property,
        Object.getOwnPropertyDescriptor(from, property)
      );
    }
  
    return to;
  }
  
  extend({}, { get a(){ return 1 } })
  // { get a(){ return 1 } })