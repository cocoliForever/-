(function($){
    $(function(){
       $(".mBox").on("mouseenter","b",function(){
           $(this).addClass("cur").siblings().removeClass('cur')
           var imgssss = $(this).children(".detail_main_pic_class").attr("src")
           console.log(imgssss)
           $("#J_prodImg").attr("src",imgssss) 
        }) 
    })
}(jQuery))