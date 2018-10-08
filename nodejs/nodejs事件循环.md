ode.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

以下程序绑定事件处理程序：

```
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
```

我们可以通过程序触发事件：

```
// 触发事件
eventEmitter.emit('eventName');
```

在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。 

1. 一开始task队列中只有script，则script中所有函数放入函数执行栈执行，代码按顺序执行。

接着遇到了`setTimeout`,**它的作用是0ms后将回调函数放入task队列中**，也就是说这个函数将在下一个事件循环中执行（注意这时候setTimeout执行完毕就返回了）。

1. 接着遇到了`Promise`，按照前面所述Promise属于microtask，所以第一个.then()会放入microtask队列。
2. 当所有script代码执行完毕后，**此时函数执行栈为空**。开始检查microtask队列，此时队列不为空,执行.then()的回调函数输出'promise1'，由于.then()返回的依然是promise,所以第二个.then()会放入microtask队列继续执行,输出'promise2'。
3. 此时microtask队列为空了，进入下一个事件循环，检查task队列发现了setTimeout的回调函数，立即执行回调函数输出'setTimeout'，代码执行完毕

- `macrotasks`: script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
- `microtasks`: process.nextTick, Promises, Object.observe(废弃), MutationObserver



顺序  同步函数--》microtask promise  ---》macrotasks--------setTmeout定时器---