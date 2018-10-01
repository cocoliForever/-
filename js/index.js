//导航头送货地址
(function(){
  //点击出现送货地址导航头城市搜索出现
  $(function(){
    $('.hd_indexprovce a').on('click',function(){
      $('.hd_city_select').css('display','block')
    })
    $('.hd_city_select .hd_city_close').on('click',function(){
      $('.hd_city_select').css('display','none')
    })
  })
  $(function(){
    $('.hd_city_input input').on('keyup',function(){
      $('.hd_city_suggest').css('display','block');
      $('.hd_city_input i').css("display","block");
      $('.hd_city_search .hd_citys_close').css('display','none');
      if($('.hd_city_input input').val()){
        $('.hd_city_input i').css('display','none');
        $('.hd_city_search .hd_citys_close').css('display','block');
      }
    }),
    // 点击出现提示内容和点击关闭提示内容
    $(function(){
      $('.hd_city_suggest').on('click','a',function(){
        $('.hd_city_input input').val($(this).text());
      })
      $('.hd_city_search .hd_citys_close').on('click',function(){
        $('.hd_city_suggest').css('display','none');
        $('.hd_city_input i').css('display','block')
        $('.hd_city_input input').val('');
        $('.hd_city_search .hd_citys_close').css('display','none')
      })
    })
    //小图标的旋转
    // $(function(){
    //   $('.hd_menu').on('mouseenter',function(){
    //     $('.hd_menu .iconfonts').css({
    //       'display': 'inline-block',
    //       '-webkit-transform': 'rotate(180deg)',
    //       '-moz-transform': 'rotate(180deg)',
    //       '-o-transform':'rotate(180deg)',
    //       'transform':'rotate(180deg)',
    //       '-webkit-transition': '-webkit-transform .2s linear',
    //       'transition': '-webkit-transform .2s linear',
    //       'transition': 'transform .2s linear,-webkit-transform .2s linear,-moz-transform .2s linear,-o-transform .2s linear',
    //       'cursor': 'pointer',
    //     })
    //     console.log('122')

    //   })

    // })
  })
})()