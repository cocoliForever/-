(function($){
  $(function(){
    $(".hd_has_child").on('mouseenter',function(){
      // $(this).toggleClass('hd_cur')
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

    // tab切换
    $('.ctrl-box li').on('mouseenter',function(){
      $(this).addClass('on').siblings('.on').removeClass('on');
      $(this).children('i').css('display','block').parent().siblings().children('i').css('display','none')
      $('.slide-box .slide-screen').eq($(this).index()).animate({
        'opacity':'1',
        'z-index':'1'
      }).siblings().css({
        'opacity':'0',
        'z-index':'0'
      })
      
    })
    var kktimer
    function set(){
      kktimer = setInterval(function(){
            var kk = $('.ctrl-box li.on').index()
            kk++
            // console.log(kk)
            if(kk==4){
              kk=0
            }
            $('.ctrl-box li.on').removeClass('on').children('i').css({
              'display':'none'
            })

            $('.ctrl-box li').eq(kk).addClass('on').children('i').css({
              'display':'block'
            })
            $('.slide-box .slide-screen').eq(kk).animate({
              'opacity':'1',
              'z-index':'1'
            }).siblings().css({
              'opacity':'0',
              'z-index':'0'
            })
          },5000)
    }
    set()

    $('.skiphop').on('mouseover',function(){
      clearInterval(kktimer)
    })
    $('.skiphop').on('mouseout',function(){
      set()
    })


    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;

    // function dianji(a,b){
    //   b = 0;
    //   $('.prev-btn-box').eq(a).on('click',function(){
    //     if(parseInt($(this).prev().css('left'))<0){
    //       b--;
    //       $(this).prev().stop().animate({
    //         'left':-b*1100
    //       },800)
    //     }
        
    //   })
    //   $('.next-btn-box').eq(a).on('click',function(){
    //     if(parseInt($(this).prev().prev().css('left'))>-1100){
    //       b++;
    //       $(this).prev().prev().stop().animate({
    //         'left':-b*1100
    //       },800)
    //     }
        
    //   })
    // }
    // var arr = ['i','j','k','l']
    // dianji($('.ctrl-box li.on').index(),arr[$('.ctrl-box li.on').index()])
    $('.prev-btn-box').eq(0).on('click',function(){
      if(i>0){
        i--;
        $(this).prev().stop().animate({
          'left':-i*1100
        },100)
      }
    })
    $('.next-btn-box').eq(0).on('click',function(){
      if(i<1){
        i++;
        $(this).prev().prev().stop().animate({
          'left':-i*1100
        },100)
      }
    })


    $('.prev-btn-box').eq(1).on('click',function(){
      if(j>0){
        j--;
        $(this).prev().stop().animate({
          'left':-j*1100
        })
      }
    })
    $('.next-btn-box').eq(1).on('click',function(){
      if(j<1){
        j++;
        $(this).prev().prev().stop().animate({
          'left':-j*1100
        })
      }
    })

    $('.prev-btn-box').eq(2).on('click',function(){
      if(k>0){
        k--;
        $(this).prev().stop().animate({
          'left':-k*1100
        })
      }
    })
    $('.next-btn-box').eq(2).on('click',function(){
      if(k<1){
        k++;
        $(this).prev().prev().stop().animate({
          'left':-k*1100
        })
      }
    })

    $('.prev-btn-box').eq(3).on('click',function(){
      if(l>0){
        l--;
        $(this).prev().stop().animate({
          'left':-l*1100
        })
      }
    })
    $('.next-btn-box').eq(3).on('click',function(){
      if(l<1){
        l++;
        $(this).prev().prev().stop().animate({
          'left':-l*1100
        })
      }
    })



    
    // 
    $('.grouplist li').on('mouseenter',function(){
      $(this).stop().animate({
        'top':-5
      })
    })
    $('.grouplist li').on('mouseleave',function(){
      $(this).stop().animate({
        'top':0
      })
    })


  })
})(jQuery)