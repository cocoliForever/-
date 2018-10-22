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


    var bs_nav_box_top = $('.bs_nav_box').offset().top;
    var bs_hot_module_top = $('.bs_hot_module').offset().top;
    console.log(bs_nav_box_top)
    $(document).on('scroll',function(){
      var document_top = $(this).scrollTop();
      //  当滚动条的高大于 140px 让顶部导航固定到一个位置
      if(document_top >= bs_nav_box_top){
        $('.bs_nav_box').addClass('bs_nav_fixed')
      }else{
        $('.bs_nav_box').removeClass('bs_nav_fixed')
      }
      // 当滚动条的高大于 150px的  让侧边的电梯导航显示出来
      if(document_top >= bs_hot_module_top){
        $('.suspend_nav').css('display','block')
      }else{
        $('.suspend_nav').css('display','none')
      }
      // 鼠标滚动  给电梯导航添加类名
      for(var ll=0;ll<9;ll++){
        if(document_top>=$('.bs_common_module').eq(ll+1).offset().top && document_top<$('.bs_common_module').eq(ll+2).offset().top){
          $('.bsn_list a').eq(ll).addClass('cur').siblings('.cur').removeClass('cur')
        }
      }
    })


    // 点击侧边电梯导航  给其子代元素加背景颜色
    $('.bsn_floor').on('click',function(){
      $(this).addClass('cur').siblings('.cur').removeClass('cur');
      var bs_common_module_index = $(this).index()+1;
      // 点击侧边电梯导航  让滚动条滚动到对应的位置
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


    // 查看更多   hover
    $('.check_more_btn').hover(function(){
      $(this).children('span').stop().animate({
        'width':'60'
      },0)
    },function(){
      $(this).children('span').stop().animate({
        'width':'50'
      },0)
    })


    // banner图   move自动轮播
    var LI_LENGTH = $('.hb_slide_con .hb_list').length-1;
    function move(){
      clearTimeout(timer)
      var kk= $('.hb_index ul li.cur').index();
      if(kk >= LI_LENGTH){
        kk = -1;
      }
      kk++;
      $('.hb_index ul li').eq(kk).addClass('cur').siblings().removeClass('cur');
      $('.hb_slide_con .hb_list').eq(kk).css({
        'display':'block'
      }).stop().animate({
        'opacity':'1'
      },0,function(){
        clearTimeout(timer)
        timer = setTimeout(function(){
          move()
        },2000)
      }).siblings().css({
        'display':'none',
      }).stop().animate({
        'opacity':"0"
      },0)
    }

    
    // 打开页面的时候让轮播转一会
    var timer = setTimeout(function(){
      move()
    },2000)


    // 当hover的时候    让settimeout停止
    $('.hot_brand_list').on('mouseover',function(){
      clearTimeout(timer)
    })
    $('.hot_brand_list').on('mouseout',function(){
      timer = setTimeout(function(){
        move()
      },2000)
    })
    // $('.hot_brand_list').hover(function(){
    //   clearTimeout(timer)
    // },function(){
    //   timer = setTimeout(function(){
    //     move()
    //   },500)
    // })


    // banner  hover
    $('.hb_index ul li').on('mouseenter',function(){
      clearTimeout(timer)
      $(this).addClass('cur').siblings().removeClass('cur');
      var _index = $(this).index();
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

  })
})(jQuery)