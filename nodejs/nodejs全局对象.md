## Node.js 全局对象

本节介绍 Node.js 全局对象，global 全局对象无需引用就可以直接使用。

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常window 是全局对象， 而Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

我们在Node.js 中能够直接访问到对象通常都是 global 的属性，如 console、process 等，下面逐一介绍。

 

## process

process 是一个全局变量，即 global 对象的属性。

它用于描述当前Node.js 进程状态 的对象，提供了一个与操作系统的简单接口。

- **process.stdout**是标准输出流，通常我们使用的 console.log() 向标准输出打印 字符，而 process.stdout.write() 函数提供了更底层的接口。
- **process.stdin**是标准输入流，初始时它是被暂停的，要想从标准输入读取数据， 你必须恢复流，并手动编写流的事件响应函数。
- ```
  process.stdin.resume(); 
  process.stdin.on('data', function(data) { 
  process.stdout.write('read from console: ' + data.toString()); 
  }); 
  ```

- **process.nextTick(callback)**的功能是为事件循环设置一项任务，Node.js 会在 下次事件循环调响应时调用 callback。

初学者很可能不理解这个函数的作用，有什么任务不能在当下执行完，需要交给下次事 件循环响应来做呢？

我们讨论过，Node.js 适合I/O 密集型的应用，而不是计算密集型的应用， 因为一个Node.js 进程只有一个线程，因此在任何时刻都只有一个事件在执行。

如果这个事 件占用大量的CPU 时间，执行事件循环中的下一个事件就需要等待很久，因此Node.js 的一 个编程原则就是尽量缩短每个事件的执行时间。process.nextTick() 提供了一个这样的 工具，可以把复杂的工作拆散，变成一个个较小的事件。

```
functiondoSomething(args, callback) { 
  somethingComplicated(args); 
  callback(); 
} 
doSomething(functiononEnd() { 
  compute(); 
}); 
```

我们假设compute() 和somethingComplicated() 是两个较为耗时的函数，以上 的程序在调用 doSomething() 时会先执行somethingComplicated()，然后立即调用 回调函数，在 onEnd() 中又会执行 compute()。下面用process.nextTick() 改写上 面的程序：

```
functiondoSomething(args, callback) { 
   somethingComplicated(args); 
  process.nextTick(callback); 
} 
doSomething(functiononEnd() { 
  compute(); 
}); 
```