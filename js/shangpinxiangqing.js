(function ($) {
  $(function(){
    //导航头右边的客户服务一栏分栏下单栏目鼠标浮上去字体颜色变化
    $('.hd_menu_list a').hover(function(){
      $(this).css("color","#ff4040");
    },function(){
      $(this).css("color","#666");
    })

    //小图标的旋转
    $('.menus').hover(function(){
      $('.menus .iconfont').css({
        'display': 'inline-block',
        '-webkit-transform': 'rotate(180deg)',
        '-moz-transform': 'rotate(180deg)',
        '-o-transform':'rotate(180deg)',
        'transform':'rotate(180deg)',
        '-webkit-transition': '-webkit-transform .2s linear',
        'transition': '-webkit-transform .2s linear',
        'transition': 'transform .2s linear,-webkit-transform .2s linear,-moz-transform .2s linear,-o-transform .2s linear',
        'cursor': 'pointer',
      })
    },function(){
      $('.menus .iconfont').css({
        'display': 'inline-block',
        '-webkit-transform': 'rotate(0deg)',
        '-moz-transform': 'rotate(0deg)',
        '-o-transform':'rotate(0deg)',
        'transform':'rotate(0deg)',
        '-webkit-transition': '-webkit-transform .2s linear',
        'transition': '-webkit-transform .2s linear',
        'transition': 'transform .2s linear,-webkit-transform .2s linear,-moz-transform .2s linear,-o-transform .2s linear',
        'cursor': 'pointer',
      })
    })

    // 浮上去出现二维码
    $('.hd_title').hover(function(){
      $('.hd_qrcode_bg').css("display","block");
    },function(){
      $('.hd_qrcode_bg').css('display','none');
    }),
    $('.hd_qrcode_bg').hover(function(){
      $('.hd_qrcode_bg').css("display","block");
    },function(){
      $('.hd_qrcode_bg').css('display','none');
    })

    // 搜索提示的出现和消失
    $('.hd_search_from').click(function(){
      $('.hd_search_tips_result').css("display","block");      
    }).on('mouseleave',function(){
      $('.hd_search_tips_result').css("display","none");
    }).on('mouseleave',function(){
      $('.hd_search_tips_result').css("display","none");
    })

    // 赠品查看  点击查看赠品信息
    $('[promotion_name=promotion_index_1]').on('click',function(){
      $('#promotion_index_1').css('display','block')
    })
    // 点击的时候  让赠品信息关闭
    $('.close').on('click',function(){
      $(this).parents('#promotion_index_1').css('display','none')
    })

    // 选择商品颜色的时候  点击哪一个  给哪一个添加border
    $('#choose-attr-1 .dd').on('click','div',function(){
      $(this).addClass('selected').siblings('.selected').removeClass('selected')
    })

    // 选择商品版本的时候  点击哪一个   给哪一个添加border
    $('#choose-attr-2 .dd').on('click','div',function(){
      $(this).addClass('selected').siblings('.selected').removeClass('selected')
    })

    // 点击商品所选套装的时候   点击哪一个  给哪一个添加border
    $('#choose-attr-3 .dd').on('click','div',function(){
      $(this).addClass('selected').siblings('.selected').removeClass('selected')
    })

    // 点击送货至哪一个地方的时候   让所选城市显示出来
    $("#area_name").on('click',function(){
      $('.pop_win_mask').css({
        'display':'block',
        'opacity':'0',
        'z-index':'19'
      })
      $(this).next().css('display','block')
    })

    // 点击关闭的时候  让所选城市消失
    $('.selectclose').on('click',function(){
      $('.selectlist').css('display','none')
      $('.pop_win_mask').css({
        'display':'none',
        'opacity':'0',
        'z-index':'19'
      })
    })
    
    $('.pop_win_mask').on('click',function(){
      $(this).css({
        'display':'none',
        'opacity':'0.4',
        'z-index':'8888'
      })
      $('.selectlist').css('display','none')
    })

    // 点击对应地址  给其添加类名
    $('.tablist').on('click','li',function(){
      $(this).addClass('cur').siblings('.cur').removeClass('cur')
      $('.sec_level' + $(this).attr('tag-index')).css('display','block').siblings().css('display','none')
    })

    





























  })
})(jQuery)