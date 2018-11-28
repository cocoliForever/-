(function($){
    $(function(){
        $("#cateId").on("click","a",function(){
            $(this).addClass("cur").siblings().removeClass('cur')
        })
    })
}(jQuery))