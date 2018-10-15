;(function($){
    $(function(){
        $('.cart_list').on('click','.prop_txt',function(){
             
            $(this).next().slideToggle()
            $(this).css({
                'border':'1px dashed red'
            })
            console.log($(this).css('border'))
            if($(this).css('border','1px dashed rgb(255, 0, 0)')){
        
            }
           
        
        })










    })












}(jQuery))