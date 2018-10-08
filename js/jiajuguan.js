
$(function(){
    // 实现轮播
    function move(){     
    i++
    if(i==2){
        i=0
    }
    //   var index= $('.images li').index()
    //   i=index
       $(".images li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    var i=0
   setTimeout(move(),5000) 
})
// 实现tab切换
$(function(){
    $('.anynav').on('mouseenter', 'span' ,function(){
        var index= $(this).index()
        $('.sub').stop().animate({left:(index*198)})
        $('.table').eq(index).addClass('active').siblings().removeClass('active')
    })
})