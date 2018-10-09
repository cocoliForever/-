
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
    
var timer
    function ele(){                                          
        clearTimeout(timer)
       if(j>1190){
        j=0
        $('.brand_name').css('left',0)
       }
       
        $('.brand_name').animate({
       left:-j
   },10)
   timer= setTimeout(function(){ 
    ele(j++)
},10) 
 
}
   var j=0
   var a=0
    timer= setTimeout(function(){ 
        ele(j++)
    },10) 
// 鼠标点中li，轮播停止，支开继续运动
$('.brand_name li').on('mouseenter',function(){
    clearTimeout(timer)
    var index=$(this).index()
    $('.img').eq(index).fadeOut(0)
    $('.imgs').eq(index).fadeIn(0)
     var i=index
    $('.brand_name li').on('mouseleave',function(){
        clearTimeout(timer)
    $('.img').eq(index).fadeIn(0)
    $('.imgs').eq(index).fadeOut(0)
    timer= setTimeout(function(){ 
        ele(j++)
    },10) 
    })      
})
    // clearTimeout(timer)
    $('.left').on('click',function(){
        clearTimeout(timer)
        a++
        if(a>7){
            a=1
            $('.brand_name').css('left',0)
        }
        $('.brand_name').stop().animate(
            {left:-170*a}
        )
    })
    $('.right').on('click',function(){
        clearTimeout(timer)
        a--
        if(a<0){
            a=6
            $('.brand_name').css('left',1020)
        }
        $('.brand_name').stop().animate(
            {left:-170*a}
        )
       
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