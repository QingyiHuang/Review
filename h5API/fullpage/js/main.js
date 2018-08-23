$(function(){
    //初始化fullpage
  $('.container').fullpage({
      /**配置参数 */ //只能使用二进制色彩
      sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#fadd67", "#84d9ed", "#8ac060","#84a2d4"],
      
      verticalCentered:false,//查文档 垂直居中false
      //页面切换时间 默认700ms
      scrollingSpeed:1000,
      
      navigation:true,
      //监听进入某一屏幕的时候 回调 参数 锚点和序号
      afterLoad:function(anchorLink,index){
        //当完全滚动到时给大容器直接追加类，给这个类下元素加入动画属性
      $('.section').eq(index-1).addClass('now')
     },

     /* onLeave离开一个section index nextIndex direction */
     onLeave:function(index,nextIndex,direction){
         var currentSection = $('.section').eq(index-1);
         if(index==2&&nextIndex==3){
             /*第二页到第三页 */
             $('.section').eq(index-1).addClass('leave');
         }else if(index==3&&nextIndex==2){
            $('.section').eq(index-2).removeClass('leave').addClass('leaveBack');
         }else if(index==3&&nextIndex==4){
            /*第二页到第三页 */
            $('.section').eq(index-1).addClass('leave');
        }else if(index == 5 && nextIndex == 6){
            /*当前是从第五页到第六页*/
            /*currentSection.removeClass('now').addClass('leaved');*/
            currentSection.addClass('leaved');
            $('.screen06 .box').addClass('show');
        }else if(index == 6 && nextIndex == 7){
            /*当前是从第6页到第7页*/
            $('.screen07 .star').addClass('show');
            $('.screen07 .text').addClass('show');
            $('.screen07 .star img').each(function (i, item) {
                /*$(item) == $(this);*/
                /*img display:none*/
                /*$(this).delay(i*0.5*1000).fadeIn();*/
                /*img opacity*/
                $(this).css('transition-delay',i*0.5+'s');
            });

        }
     },
     //组件渲染完毕 查api  $.fn.方法就是给jquery的追加方法
     afterRender:function(){
        $('.more').on('click',function(){
           $.fn.fullpage.moveSectionDown()
        });
        //当第四屏的购物车动画结束后执行收货地址的动画
        $('.screen04 .cart').on('transitionend',function(){
           $('.screen04 .address').show().children($('img:last')).fadeIn(500)//find('img:last').fadeIn(500);
           .parent().siblings($('.text')).addClass('show');
       });
           /*第八屏功能*/
           /*1.手要跟着鼠标移动*/
           $('.screen08').on('mousemove',function (e) {
               /*鼠标的坐标设置给手*/
               $(this).find('.hand').css({
                   left:e.clientX -190,
                   top:e.clientY - 20
               });
           }).find('.again').on('click',function () {
               /*2.点击再来一次重置动画跳回第一页*/
               /*动画怎么怎么进行的？*/
               /*2.1 加now  类*/
               /*2.2 加leaved  类*/
               /*2.3 加show 类*/
               $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
               /*2.4 加css属性  后果：加一个style属性*/
               /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
               $('.content [style]').removeAttr('style');

               /*跳回第一页*/
               $.fn.fullpage.moveTo(1);
           });
    }

  })
})

