;(function($){
    $(function(){
        
        $('.cart_list').on('mouseover','.prop_txt',function(){
             
            $(this).css({
                'border':'1px dashed red'
            })
        }).on('mouseout','.prop_txt',function(){
            $(this).css({
                'border':'1px dashed #fff'
            })
        })
        $('.cart_list').on('click','.prop_txt',function(){
            $(this).next().slideToggle()
            $(this).css({
                'border':'1px dashed red'
            })
        })








    })












}(jQuery))