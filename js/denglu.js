(function($){
  $(function(){
    $('.help_wrap').on('mouseover',function(){
      $('.hd_menu_list').css('display','block')
    })
    $('.hd_menu_list').on('mouseleave',function(){
      $(this).css('display','none')
    })


    // 点击自动登录  
    $("#check_agreement").on('click',function(){
      if($(this).hasClass('uncheck_agreement')){
        $(this).addClass('check_agreement').removeClass('uncheck_agreement').next().next().css('display','block')
      }else {
        $(this).addClass('uncheck_agreement').removeClass('check_agreement').next().next().css('display','none')
      }
    })


    // 点击更多合作网站
    $(".unfold").on('click',function(){
      $(this).toggleClass('fold').parent().next().children().css('display','list-item')
      if(!$(this).hasClass('fold')){
        $(this).parent().next().children().css('display','none')
      }
    })

    // 点击二维码登录
    $(".two_dimension_code").on('click',function(){
      $(this).css('display','none').next().css('display','block')
      $(".login_pc").css('display','none')
      $(".login_code").css('display','block')
    })
    $('.static_pc').on('click',function(){
      $(this).css('display','none').prev().css('display','block')
      $(".login_pc").css('display','block')
      $(".login_code").css('display','none')
    })









  })
})(jQuery)