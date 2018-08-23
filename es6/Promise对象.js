let promiseObj=new Promise(function(resolve,reject){
    // ... some code
    if(/* 异步操作成功 */){
        resolve(value)
    }else{
        reject(err)
    }
})
/**
 * Promise构造函数接受一个函数作为参数，
 * 该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
resolve函数的作用是，将Promise对象的状态
从“未完成”变为“成功”（即从 pending 变为 
resolved），在异步操作成功时调用，并将异步操作的结果，
作为参数传递出去；reject函数的作用是，
将Promise对象的状态从“未完成”变为“失败”
（即从 pending 变为 rejected），在异步操作失败时调用，
并将异步操作报出的错误，作为参数传递出去。
Promise实例生成以后，可以用then方法分别指定
resolved状态和rejected状态的回调函数。
 */
promiseObj.then(function(value){
    //success
},function(err){
    //rejected
})
//Promise实例生成以后，
//可以用then方法分别指定resolved状态和rejected状态的回调函数。
/**
 * then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，
 * 不一定要提供。这两个函数都接受Promise对象传出的值作为参数。
 */


 /**
  * one issue
  */
 function timeOut(ms){
     return new Promise((resolve,reject)=>{
         setTimeout(resolve,ms,cb);
     })
 }
 timeOut(100).then((value)=>{
     console.log(value)
 })
 //上面代码中，timeout方法返回一个Promise实例，
 //表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，
 //Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。

 let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
  });
  promise.then(function() {
    console.log('resolved.');
  });
  console.log('Hi!');
  // Promise
  // Hi!
  // resolved
  //上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。
  //然后，then方法指定的回调函数，
  //将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

  //下面是异步加载图片的例子。

function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
//上面代码中，使用Promise包装了一个图片加

///promise ajax
const getJSON = function(url){
    const promise = new Promise(function(resolve,reject){
        const handler = function(){
            if(this.readyState !==4){
                return
            }
            if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error(this.statusText));
              }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        }
    )
}
///////////////////////////////////////////////////////////////////////
getJSON("/post/1.json").then(function(post) {
    return getJSON(post.commentURL);
  }).then(function funcA(comments) {
    console.log("resolved: ", comments);
  }, function funcB(err){
    console.log("rejected: ", err);
  });

  /**
   * 上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，
   * 就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB。
   */
 
 //  Promise.prototype.catch()
 /**
  * Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
  */


  /**
   * 比较上面两种写法，可以发现reject方法的作用，等同于抛出错误。

如果 Promise 状态已经变成resolved，再抛出错误是无效的。
   */

   /**
    * 这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”
    */

    /**
     * Promise.all()
     */
    const p = Promise.all([p1, p2, p3]);
/*上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。*/
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
    return getJSON('/post/' + id + ".json");
  });
  
  Promise.all(promises).then(function (posts) {
    // ...
  }).catch(function(reason){
    // ...
  });

  //Promise.resolve()
  //有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。

const jsPromise = Promise.resolve($.ajax('/whatever.json'));
//上面代码将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。

//Promise.resolve等价于下面的写法。

Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

//Promise.reject()