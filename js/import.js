$(function(){
    // 全球精选轮播
    $(".slide_left").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list').animate({'left':'0'},800)
        $('.cur_num').html('1')
    })
    $(".slide_right").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list').animate({'left':'-1236'},800)
        $('.cur_num').html('2')
    })
    $(".slide_left").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    $(".slide_right").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    // 鼠标扶到图片上时上移
    $('.pro_pic').on('mouseover',function(){
        $(this).stop().animate({'top':'-15px'},500);  
    }).on('mouseout',function(){
        $(this).stop().animate({'top':'0'},500);
    })
   


    






    
})