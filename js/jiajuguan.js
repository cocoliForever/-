
$(function(){
    // 实现淡入淡出效果轮播图
    
    $('.dots li').on('mouseover',function(){
        
        $(this).addClass('cur').siblings().removeClass("cur");
        
        var index=$(this).index()
        console.log(index)
        j=index
        $(".images li").eq(j).fadeIn(300).siblings().fadeOut(300);
    })
    var j=0
    function move(){  
        if(j===2){
            j=0
        }
        
       $(".images li").eq(j).fadeIn(300).siblings().fadeOut(300,function(){
        // setInterval(move,3000)
       });
       
       $(".dots li").eq(j).addClass('cur').siblings().removeClass("cur");
       j++
    }
    setInterval(move,3000)  
})
//  实现左右无缝轮播切换
$(function(){
    $('.brand_name li').on('mouseover',function(){
        var index=$(this).index()
        $('.imgs').eq(index).addClass('abl').siblings().removeClass('abl')
        $('.img').eq(index).addClass('nas').siblings().removeClass('nas')
        console.log(index)
    })
})
// 实现tab切换
$(function(){
    $('.anynav').on('mouseenter', 'span' ,function(){
        var index= $(this).index()
        $('.sub').stop().animate({left:(index*198)})
        $('.table').eq(index).addClass('active').siblings().removeClass('active')
    })
})