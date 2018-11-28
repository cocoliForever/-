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
    $("#area_name").on('click',function(e){
      e.stopPropagation();
      $(this).next().css('display','block')
    })

    // 点击关闭的时候  让所选城市消失
    $(document).on('click',function(){
      $('.selectlist').css('display','none')
    })
    $('.selectlist').on('click',function(e){
      e.stopPropagation();
    })
    $('.selectclose').on('click',function(e){
      e.stopPropagation();
      $('.selectlist').css('display','none')
    })

    // 点击对应地址  给其添加类名
    $('.tablist').on('click','li',function(){
      $(this).addClass('cur').siblings('.cur').removeClass('cur')
      $('.sec_level' + $(this).attr('tag-index')).css('display','block').siblings().css('display','none')
    })

    // 商品介绍中  加入购物车  让当前商品的img显示出来
    $('.des_buy').on('mouseenter',function(){
      $(this).addClass('hover')
      $('.tab_buy_info').css('display','block')
    })
    // 移走消失
    $('.des_buy').on('mouseleave',function(){
      $(this).removeClass('hover')
      $('.tab_buy_info').css('display','none')
    })
    
    // 点击商品介绍的时候   规格及包装div none
    $('#spjs_fixed').on('click',function(){
      $('#detail_desc_prop').css('display','none')
      $('#prodDetailCotentDiv').css('display','block')
      $('body,html').stop().animate({
        'scrollTop':jDesTop
      })
    })
    $('#spjs').on('click',function(){
      $('#detail_desc_prop').css('display','none')
      $('#prodDetailCotentDiv').css('display','block')
    })

    // 点击规格及包装的时候  商品介绍div  none
    $('#ggbz_fixed').on('click',function(){
      $('#prodDetailCotentDiv').css('display','none')
      $('#detail_desc_prop').css('display','block')
      // console.log(1)
      $('body,html').stop().animate({
        'scrollTop':jDesTop
      })
    })
    $('#ggbz').on('click',function(){
      $('#prodDetailCotentDiv').css('display','none')
      $('#detail_desc_prop').css('display','block')
    })

    // 点击售后服务的时候   商品介绍和规格及包装  div  none
    $('#shfw_fixed').on('click',function(){
      $('#detail_desc_prop').css('display','none')
      $('#prodDetailCotentDiv').css('display','none')
      $('body,html').stop().animate({
        'scrollTop':jDesTop
      })
    })
    $('#shfw').on('click',function(){
      $('#detail_desc_prop').css('display','none')
      $('#prodDetailCotentDiv').css('display','none')
    })

    // 顶部导航   滚动鼠标
    var hdHeaderNavTop = $('.hd_header_nav').offset().top
    var jDesTop = $('#J_des').offset().top
    console.log(jDesTop)
    $(document).on('scroll',function(){
      var _top = $(this).scrollTop()
      if(_top >= hdHeaderNavTop){
        $('.hd_header_nav').addClass('hd_cm_fixed')
        $('.hd_header_nav .clearfix').css('display','none')
      }else{
        $('.hd_header_nav').removeClass('hd_cm_fixed')
        $('.hd_header_nav .clearfix').css('display','block')
      }

      if(_top >= jDesTop){
        $('.des_fixed').css('display','block')
      }else{
        $('.des_fixed').css('display','none')
      }
    })


    // <!-- 放大镜JS -->
    $(".mBox").on("mouseenter","b",function(){
      $(this).addClass("cur").siblings().removeClass('cur')
      var imgssss = $(this).children(".detail_main_pic_class").attr("src")
      $("#J_prodImg").attr("src",imgssss)
      $("#J_zoom").children("img").attr("src",imgssss)
      $("#J_zoom").css({display:"none"})
    })
    $('.mask').on('mousemove',function(eve){
      var x1=eve.clientX-$(this).offset().left
      var y1=eve.clientY-$(this).offset().top
      var x=x1-90;
      var y=y1-90;
      if(x<0) { x=0 } if(x>=180){
        x=180
      }
      if(y<0) { y=0 } if(y>=180){
        y=180
      }
      $(".zoomCursor").css({
        'display':'block',
        'left':x,
        'top':y
      })

      $("#J_zoom").css({
        'display':'block'
      }).children('img').css({
        'top':-2*y,
        'left':-2*x,
      })
    })

    $('.mask').on('mouseleave',function(){
      $(".zoomCursor").css({
      'display':'none'
      })
      $("#J_zoom").css({
      'display':'none'
      })
    })

    $('.cBtn').eq(1).on('click',function(){
      $('.mBox').stop().animate({
        'left':-204
      })
    })

    $('.cBtn').eq(0).on('click',function(){
      $('.mBox').stop().animate({
        'left':0
      })
    })

    // 换一批
    var i=0;
    var chaMLength = $('.cha_m').length;
    $(".cha_m").css("display","none")
    $(".cha_m").eq(0).css("display","block")
    $("#r_cha_t").on('click',function(){
      if(i<chaMLength-1) { 
        i++; 
      }else{
        i=0 
      }
      $(".cha_m").eq(i).css("display",'block').siblings('.cha_m').css("display",'none') 
    }) 




















  })
})(jQuery)