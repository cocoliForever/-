(function($){
    $(function(){
        var i=0;
        var chaMLength = $('.cha_m').length;
        $(".cha_m").css("display","none")
        $(".cha_m").eq(0).css("display","block")
        $("#r_cha_t").on('click',function(){
            if(i<chaMLength-1){
                i++;
            }else{
                i=0
            }
            $(".cha_m").eq(i).css("display",'block').siblings('.cha_m').css("display",'none')
        })



















    })
}(jQuery))