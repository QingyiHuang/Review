## path

- path.basename('c:/a/v.txt','txt') 获取路径之后的文件名 v  第二个参数可以不要 默认+扩展名
- .dirname   获取 c:/a
- extname 获取.txt 后缀
- .isAbsolute('c:/a')判断是否绝对路径

#### path.parse('c:/a/b/index.js')

```javascript
{
    root:'c:/',
    dir:'c:/a/b',
    base:'index.js',
    ext:'js',
    name:'index'
}
```

- path.join('c:/a','b')  融合！拼接路径，对杠有优化兼容