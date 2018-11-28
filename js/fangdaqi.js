(function($){
    $(function(){
       $(".mBox").on("mouseenter","b",function(){
           $(this).addClass("cur").siblings().removeClass('cur')
           var imgssss = $(this).children(".detail_main_pic_class").attr("src")
           $("#J_prodImg").attr("src",imgssss)
           $("#J_zoom").children("img").attr("src",imgssss)
           $("#J_zoom").css({display:"none"})

        }) 
        $('.mask').on('mousemove',function(eve){
            var x1=eve.clientX-$(this).offset().left
            var y1=eve.clientY-$(this).offset().top
            var x=x1-90;
            var y=y1-90;
            if(x<0){
                x=0
            }
            if(x>=180){
                x=180
            }
            if(y<0){
                y=0
            }
            if(y>=180){
                y=180
            }
            $(".zoomCursor").css({
                'display':'block',
                'left':x,
                'top':y
            })
                
            $("#J_zoom").css({
                'display':'block'
            }).children('img').css({
                'top':-2*y,
                'left':-2*x,
            })
        })
        $('.mask').on('mouseleave',function(){
            $(".zoomCursor").css({
                'display':'none'
            })
            $("#J_zoom").css({
                'display':'none'
            })

        })


        $('.cBtn').eq(1).on('click',function(){
            $('.mBox').stop().animate({
                'left':-204
            })
        })

        $('.cBtn').eq(0).on('click',function(){
            $('.mBox').stop().animate({
                'left':0
            })
        })

    })
}(jQuery))