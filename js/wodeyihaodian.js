(function($){
  $(function(){
    // 客户服务hover
    $(".hd_has_child").on('mouseenter',function(){
      $(this).children('.hd_menu').css({
        'border':'1px solid #dbdbdb',
        'border-top':'0',
        'background':'white'
      })
      $(this).children('.hd_menu_list').css({
        'display':'block'
      })
      $(this).children('.hd_qrcode_bg').css({
        'display':'block'
      })
    })
    $('.hd_has_child').on('mouseleave',function(){
      $(this).children('.hd_menu').css({
        'border':'1px solid #f4f4f4',
        'border-top':'0',
        'background':''
      })
      $(this).children('.hd_menu_list').css({
        'display':'none'
      })
      $(this).children('.hd_qrcode_bg').css({
        'display':'none'
      })
    })

    // hover 顶部导航的时候  添加类名
    $(".nav_item").hover(function(){
      $(this).addClass('active').siblings().removeClass('active')
      $(this).children('.pull_list_wrap').css('display','block')
      $(this).find('i').css({
        'transform':'rotate(180deg)',
        'transition':'all .5s'
      })
    },function(){
      $(this).removeClass('active').siblings().removeClass('active')
      $(this).children('.pull_list_wrap').css('display','none')
      $(this).find('i').css({
        'transform':'',
      })
    })

    // $('.nav_item').eq(2).on('mouseenter',function(){
    //   $('.pull_list_wrap').css('display','block')
    // })

    
























  })
}(jQuery))