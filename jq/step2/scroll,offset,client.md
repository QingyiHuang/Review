```
javaScript中的client offset scroll 经常用到，为了区分三者之间的区别，总结了一下：

clientWidth：获取网页可视区域的宽度(两种用法)

clientHeight： 获取网页可视区域的高度(两种用法)

clientX： 鼠标距离可视区域左侧的距离(event调用)

clientY：鼠标距离可视区域上侧的距离(event调用)

clientTop：盒子的上border 

clientLeft：盒子的左border

offsetWidth：元素自身的宽度(含border)

offsetHeight：元素自身的高度(含border)

offsetLeft：距离父盒子中带有定位的左侧距离

offsetTop：距离父盒子中带有定位的顶部距离

offsetParent：当前元素的父级参照物


scrollWidth：内容没有溢出：元素自身的宽度(不含border)

                    内容溢出： autoWidth + padding-left

scrollHeight：内容没有溢出：元素自身的高度(不含border)

                      内容溢出： autoHeight + padding-top

scrolltLeft：被卷去的左侧的宽度

scrollTop：被卷曲的顶部的宽度
```

#### 三大家族的区别：

```
clientWidth： width + padding(左右);

clientHeight： height + padding(上下);

offsetWidth：width + padding(左右) + border(左右)

offsetHeight： height + padding(上下) + border(上下)

scrollWidth ：内容宽度(不含border)

scrollHeight ： 内容高度(不含border)

offsetTop/offsetLeft：距离父盒子中带有定位的距离

                                 调用者： 任意元素

scrollTop/scrollLeft：获取浏览器无法显示的部分（被卷去的部分）


                                调用者:document.body.scrollTop/..(window)


clientX/clientY:鼠标距离浏览器可视区域的距离
```