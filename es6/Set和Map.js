/**
 * Set
 * WeakSet
 * Map
 * WeakMap
 */
///////////////////////////////////
/**
 * ES6 提供了新的数据结构 Set。
 * 它类似于数组，但是成员的值都是唯一的，没有重复的值
 */
var s = new Set();
[1,1,2,2,3,3,4,4].forEach(element => s.add(element));
for(let i of s){
    console.log(i)
}
