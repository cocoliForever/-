(function($){
  $(function(){
    // 客户服务
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

    // 凑单专区   tab切换
    $('.ctrl-box li').on('mouseenter',function(){
      $(this).addClass('on').siblings('.on').removeClass('on');
      $(this).children('i').css('display','block').parent().siblings().children('i').css('display','none')
      $('.slide-box .slide-screen').eq($(this).index()).siblings().stop().animate({
        'opacity':'0',
        'z-index':'0'
      })
      $('.slide-box .slide-screen').eq($(this).index()).stop().animate({
        'opacity':'1',
        'z-index':'1'
      })
      
    })

    // 凑单专区   自动轮播
    var kktimer;
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
      // console.log(111)
      clearInterval(kktimer)
    })
    $('.skiphop').on('mouseout',function(){
      set()
    })


    

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

    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    // console.log($('.slide-con'))
    //   凑单专区 10元以下 点击轮播
    var totali = $('.slide-con').eq(0).children()
    totali = Math.floor((totali.length / 5))
    // console.log(totali)
    var totalj = $('.slide-con').eq(1).children()
    totalj = Math.floor((totalj.length / 5))
    var totalk = $('.slide-con').eq(2).children()
    totalk = Math.floor((totalk.length / 5))
    var totall = $('.slide-con').eq(3).children()
    totall = Math.floor((totall.length / 5))
    $('.prev-btn-box').eq(0).on('click',function(){
      if(i>0){
        i--;
        $(this).prev().stop().animate({
          left:-i*1100
        },0)
      }
    })
    $('.next-btn-box').eq(0).on('click',function(){
      if(i<totali){
        i++;
        $(this).prev().prev().stop().animate({
          left:-i*1100
        },0)
      }
    })

    
    //   凑单专区 10-20元 点击轮播
    $('.prev-btn-box').eq(1).on('click',function(){
      if(j>0){
        j--;
        $(this).prev().stop().animate({
          'left':-j*1100
        },0)
      }
    })
    $('.next-btn-box').eq(1).on('click',function(){
      if(j<totalj){
        j++;
        $(this).prev().prev().stop().animate({
          'left':-j*1100
        },0)
      }
    })


    //   凑单专区 20-30元 点击轮播
    $('.prev-btn-box').eq(2).on('click',function(){
      if(k>0){
        k--;
        $(this).prev().stop().animate({
          'left':-k*1100
        },0)
      }
    })
    $('.next-btn-box').eq(2).on('click',function(){
      if(k<totalk){
        k++;
        $(this).prev().prev().stop().animate({
          'left':-k*1100
        },0)
      }
    })


    //   凑单专区 30-40元 点击轮播
    $('.prev-btn-box').eq(3).on('click',function(){
      if(l>0){
        l--;
        $(this).prev().stop().animate({
          'left':-l*1100
        },0)
      }
    })
    $('.next-btn-box').eq(3).on('click',function(){
      if(l<totall){
        l++;
        $(this).prev().prev().stop().animate({
          'left':-l*1100
        },0)
      }
    })



    
    //  今日精选  所有的商品 
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



    // 返回顶部
    $(document).on('scroll',function(){
      var _top = $(this).scrollTop();
      console.log(_top)
      if(_top >= 200){
        $('.index-rbar').stop().animate({
          'top':'50%'
        },200)
      }else{
        $('.index-rbar').stop().animate({
          'top':'110%'
        },200)
      }
    })


    $('.index-rbar').on('click',function(){
      $('body,html').animate({
        'scrollTop':'0'
      },200)
    })

  })
})(jQuery)