//这里只谈es6模块化 Module语法
// ES6模块
import { stat, exists, readFile } from 'fs';
/**
 * 实质是从fs模块加载 3 个方法，其他方法不加载。
 * 这种加载称为“编译时加载”或者静态加载，
 * 即 ES6 可以在编译时就完成模块加载，
 * 效率要比 CommonJS 模块的加载方式高。
 * 当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。
 */


 ////////////////////////export 命令

 /** 
  * 一个模块就是一个独立的文件。该文件内部的所有变量，
  * 外部无法获取。如果你希望外部能够读取模块内部的某个变量，
  * 就必须使用export关键字输出该变量,下面是一个 JS 文件，里面使用export命令输出变量。
  * */

// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};


//通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
// 正确
export function f() {};

// 正确
function f() {}
export {f};

/////////////////////////////import命令
// main.js
import {firstName, lastName, year} from './profile.js';
//如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

import { lastName as surname } from './profile.js';
//import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

import {a} from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;

//////////////////////////
//下面是一个circle.js文件，它输出两个方法area和circumference。

// circle.js

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
//现在，加载这个模块。

// main.js

import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
//上面写法是逐一指定要加载的方法，整体加载的写法如下。

import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

////////////////////////export default function(){}
//为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

// export-default.js
export default function () {
  console.log('foo');
}
//上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

//其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

// import-default.js
import customName from './export-default';
customName(); // 'foo'
//上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面，不使用大括号。



//export default命令用在非匿名函数前，也是可以的。加载时按匿名函数加载

//import 和 export 应该写在顶级作用域不要写在｛｝中