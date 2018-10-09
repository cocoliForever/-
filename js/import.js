$(function(){
    //  tab切换
    $('li.item').on('mouseenter',function(){
        $(this).addClass('active').siblings('.active').removeClass('active')
        $('.panel_con').eq($(this).index()).show().siblings().hide()
    })
    $('.import_category').mouseleave(function(){
        $('.panel_con').hide()
        $(this).find('li.active').removeClass('active')
        
    })
    // 顶部的轮播
          var $ul = $('#lb')//获取图片外的ul
          var $li1 = $ul.children().eq(0)//找到第一张图片
          var $li2 = $ul.children().eq(1)//找到第二张图片
          var LI_WIDTH = $li1.width()//得到每一张图片li的宽度
          var LI_LENGTH = $ul.children().length//得到ul下子元素的长度即为子元素的个数为5
          var index = 0
          $('.slides_right').on('click', function () {
            index++ 
            if (index == LI_LENGTH - 1) {//当index值加到为1的回到第2个图片的位置
            $li1.fadeToggle()
            $li2.fadeToggle()
            $('#bl_li li').eq(index).addClass('cur').siblings('.cur').removeClass('cur')
            index = 0
            }
            // changePage(index)
          })
          $('.slides_left').on('click', function () {
            if (index == 0) {//当index值减到为0的时候再回到最后一个图片的位置
              index = LI_LENGTH - 1//同时让index的值变为1
              $li1.fadeToggle()
              $li2.fadeToggle()
            }
            index--
            // changePage(index)
          })
          $("#bl_li").on('click', 'li', function () {
            var i = $(this).index()
            index = i
            // changePage(i)
          })
        //   timer = setTimeout(function () {
        //     $('.next').click()
        //   }, 3000)
        //   function changePage (i) {
        //     clearTimeout(timer)
        //     changeProgress(i)
        //     $ul.stop().animate({
        //       left: -i * LI_WIDTH
        //     }, function () {
        //       timer = setTimeout(function () {
        //         $('.next').click()
        //       }, 3000)
        //     })
        //   }
        //   function changeProgress (i) {
        //     if (i === LI_LENGTH - 1) {
        //       i = 0
        //     }
        //     $('i').removeClass('active').eq(i).addClass('active')
        //   }


    // 全球精选轮播
    $(".slide_arrow .slide_left").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list').animate({'left':'0'},800)
        $('.cur_num').html('1')
    })
    $(".slide_arrow .slide_right").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list').animate({'left':'-1236'},800)
        $('.cur_num').html('2')
    })
    $(".slide_arrow .slide_left").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    $(".slide_arrow .slide_right").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    // 鼠标扶到图片上时上移
    $('.pro_pic').on('mouseover',function(){
        $(this).stop().animate({'top':'-15px'},500);  
    }).on('mouseout',function(){
        $(this).stop().animate({'top':'0'},500);
    })
    // 品牌直达轮播
    $(".slide_arrow .slide_left1").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list1').animate({'left':'0'},800)
        $('.cur_num1').html('1')
    })
    $(".slide_arrow .slide_right1").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list1').animate({'left':'-1236'},800)
        $('.cur_num1').html('2')
    })
    $(".slide_arrow .slide_left1").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    $(".slide_arrow .slide_right1").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })

   


    






    
})