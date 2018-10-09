(function($){
   $(function(){
       $('h3').on('click',function(){
         $(this).parent().siblings().find("ul").css("display","none") 
         $(this).parent().find("ul").slideToggle("slow");
       })
   })
}(jQuery))