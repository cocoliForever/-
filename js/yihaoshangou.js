(function($){
  $(function(){
    console.log(1)
    $(".hd_has_child").on('mouseenter',function(){
      $(this).children('.hd_menu').css({
        'border':'1px solid #dbdbdb',
        'border-top':'0',
        'background':'white'
      })
      $(this).children(1).css({
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














  })
})(jQuery)