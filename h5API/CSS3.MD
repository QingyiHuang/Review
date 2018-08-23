| [transition](http://www.runoob.com/cssref/css3-pr-transition.html) | 简写属性，用于在一个属性中设置四个过渡属性。 | 3    |
| ------------------------------------------------------------ | -------------------------------------------- | ---- |
| [transition-property](http://www.runoob.com/cssref/css3-pr-transition-property.html) | 规定应用过渡的 CSS 属性的名称。              | 3    |
| [transition-duration](http://www.runoob.com/cssref/css3-pr-transition-duration.html) | 定义过渡效果花费的时间。默认是 0。           | 3    |
| [transition-timing-function](http://www.runoob.com/cssref/css3-pr-transition-timing-function.html) | 规定过渡效果的时间曲线。默认是 "ease"。      | 3    |
| [transition-delay](http://www.runoob.com/cssref/css3-pr-transition-delay.html) | 规定过渡效果何时开始。默认是 0。             | 3    |

## transition 单一动画

## animation 多动画

布局：定位   动画：位移

```css
@keyframe 定义动画序列
```

Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。 





```
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

 

| 值                                                           | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| *animation-name*                                             | 指定要绑定到选择器的关键帧的名称                             |
| *animation-duration*                                         | 动画指定需要多少秒或毫秒完成                                 |
| *animation-timing-function*                                  | 设置动画将如何完成一个周期                                   |
| *animation-delay*                                            | 设置动画在启动前的延迟间隔。                                 |
| *animation-iteration-count*                                  | 定义动画的播放次数。                                         |
| *animation-direction*                                        | 指定是否应该轮流反向播放动画。                               |
| [animation-fill-mode](http://www.runoob.com/cssref/css3-pr-animation-fill-mode.html) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |
| *animation-play-state*                                       | 指定动画是否正在运行或已暂停。                               |
| initial                                                      | 设置属性为其默认值。 [阅读关于 *initial*的介绍。](http://www.runoob.com/cssref/css-initial.html) |
| inherit                                                      | 从父元素继承属性。 [阅读关于 *initinherital*的介绍。](http://www.runoob.com/cssref/css-inherit.html) |

# animation-delay 几秒后开始播放 负值跳过几秒动画

# animation-direction  normal 默认值 reverse 反向播放 alternate 奇数次正向，偶数次反向 对应 alternate-reverse   

# animation-duration 几秒内完成一次动画

# animation-fill-mode属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式   backwards回到起点 forwards停在终点

animation-iteration-count属性定义动画应该播放多少次。 

# animation-name 注册一个keyframe动画序列列

# animation-play-state  paused  running

# animation-timing-function linear  ease ease-in加速 ease-out 减速 



# transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。 



transform-origin: *x-axis y-axis z-axis*; 

transform--style属性指定嵌套元素是怎样在三维空间中呈现。 