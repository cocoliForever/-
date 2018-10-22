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

    //  让顶部导航  固定到一个位置
    var bs_nav_box_top = $('.bs_nav_box').offset().top;
    var bs_hot_module_top = $('.bs_hot_module').offset().top;
    console.log(bs_nav_box_top)
    $(document).on('scroll',function(){
      // console.log(1)
      var document_top = $(this).scrollTop();
      // console.log(document_top)
      if(document_top >= bs_nav_box_top){
        $('.bs_nav_box').addClass('bs_nav_fixed')
      }else{
        $('.bs_nav_box').removeClass('bs_nav_fixed')
      }
      if(document_top >= bs_hot_module_top){
        $('.suspend_nav').css('display','block')
      }else{
        $('.suspend_nav').css('display','none')
      }
    })


    // 点击侧边导航  给其加背景颜色
    $('.bsn_floor').on('click',function(){
      $(this).addClass('cur').siblings('.cur').removeClass('cur');
      var bs_common_module_index = $(this).index()+1;
      console.log(bs_common_module_index)
      $('body,html').stop().animate({
        scrollTop:$('.bs_common_module').eq(bs_common_module_index).offset().top-81
      })
    })

    // 返回顶部  
    $('.bsn_go_top').on('click',function(){
      $('body,html').stop().animate({
        scrollTop:0
      })
    })

    // 鼠标 hove到  banner图中的每件商品的时候
    $('.hb_link').hover(function(){
      $(this).children('.link_hover').css('opacity','1')
    },function(){
      $(this).children('.link_hover').css('opacity','0')
    }) 


    // banner  hover
    $('.hb_index ul li').on('mouseenter',function(){
      $(this).addClass('cur').siblings().removeClass('cur');
      var _index = $(this).index();
      // console.log(_index)
      $('.hb_slide_con .hb_list').eq(_index).css({
        'display':'block'
      }).stop().animate({
        'opacity':'1'
      }).siblings().css({
        'display':'none',
      }).stop().animate({
        'opacity':"0"
      })
    })

    // 查看更多   hover
    $('.check_more_btn').hover(function(){
      $(this).children('span').stop().animate({
        width:60
      },0)
    },function(){
      $(this).children('span').stop().animate({
        width:50
      },0)
    })






  })
})(jQuery)