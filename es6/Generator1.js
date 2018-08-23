/**
 * generator 是分段执行，yield 表达式是暂停执行的标记
 * 调用Generator 返回一个遍历器对象，代表Generator 函数的内部指针
 * 
 */

 /**
  * yield
  * Generator 函数返回的遍历器对象，
  * 只有调用next方法才会遍历下一个内部状态，
  * 所以其实提供了一种可以暂停执行的函数。
  * yield表达式就是暂停标志。
  */

 function* gen() {
    yield  123 + 456;
  }
  //上面代码中，yield后面的表达式123 + 456，不会立即求值，
  //只会在next方法将指针移到这一句时，才会求值。

  yield表达式如果用在另一个表达式之中，必须放在圆括号里面。

function* demo() {
  console.log('Hello' + yield); // SyntaxError
  console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}
yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。

function* demo() {
  foo(yield 'a', yield 'b'); // OK
  let input = yield; // OK
}

/**
 * yield 遍历二叉树
 */
// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
  }
  
  // 下面是中序（inorder）遍历函数。
  // 由于返回的是一个遍历器，所以要用generator函数。
  // 函数体内采用递归算法，所以左树和右树要用yield*遍历
  function* inorder(t) {
    if (t) {
      yield* inorder(t.left);
      yield t.label;
      yield* inorder(t.right);
    }
  }


  function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
  }
  
  var a = foo(5);
  a.next() // Object{value:6, done:false}
  a.next() // Object{value:NaN, done:false}
  a.next() // Object{value:NaN, done:true}
  
  var b = foo(5);
  b.next() // { value:6, done:false }
  b.next(12) // { value:8, done:false }
  b.next(13) // { value:42, done:true }
  /*
  //上面代码中，第二次运行next方法的时候不带参数，
  导致 y 的值等于2 * undefined（即NaN），除以 3 以后还是NaN，
  因此返回对象的value属性也等于NaN。第三次运行Next方法的时候不带参数，
  所以z等于undefined，返回对象的value属性等于5 + NaN + undefined，即NaN。
  
  //如果向next方法提供参数，返回结果就完全不一样了。
  上面代码第一次调用b的next方法时，返回x+1的值6；
  第二次调用next方法，将上一次yield表达式的值设为12，
  因此y等于24，返回y / 3的值8；第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5，y等于24，所以return语句的值等于42。
*/

function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  var g = gen();
  g.next()        // { value: 1, done: false }
  g.return('foo') // { value: "foo", done: true }
  g.next()        // { value: undefined, done: true }
  /*上面代码中，遍历器对象g调用return方法后，返回值的value属性就是return方法的参数foo。
  并且，Generator 函数的遍历就终止了，
  返回值的done属性为true，以后再调用next方法，done属性总是返回true。
  如果return方法调用时，不提供参数，则返回值的value属性为undefined。*/
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  var g = gen();
  g.next()        // { value: 1, done: false }
  g.return() // { value: undefined, done: true }

  function* numbers () {
    yield 1;
    try {
      yield 2;
      yield 3;
    } finally {
      yield 4;
      yield 5;
    }
    yield 6;
  }
  var g = numbers();
  g.next() // { value: 1, done: false }
  g.next() // { value: 2, done: false }
  g.return(7) // { value: 4, done: false }
  g.next() // { value: 5, done: false }
  g.next() // { value: 7, done: true }
 //上面代码中，调用return方法后，就开始执行finally代码块，
 //然后等到finally代码块执行完，再执行return方法。



  // 下面生成二叉树
  function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
  }
  let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
  // 遍历二叉树
  var result = [];
  for (let node of inorder(tree)) {
    result.push(node);
  }
  result
  // ['a', 'b', 'c', 'd', 'e', 'f', 'g']