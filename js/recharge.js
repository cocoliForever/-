;(function ($) {


    //导航头送货地址
    
        //点击出现送货地址导航头城市搜索出现
        $(function(){
          $('.hd_indexprovce .hd_topbar_city').on('click',function(e){
            e.stopPropagation();
            $(this).css('background','#ffffff')
            $('.hd_city_select').css('display','block');
            $(document).on('click.a', function() {
              if(!$('.hd_city_select:hidden').length && !($('.hd_city_input input,.hd_city_innitial_tit'))){
                $('.hd_city_select').hide();
                $('.hd_indexprovce .hd_topbar_city').css('background','#f4f4f4')
                $(this).off('.a')
              }
            })
          })
          $('.hd_city_close').on('click',function(){
            $('.hd_city_select').css('display','none');
            $('.hd_indexprovce .hd_topbar_city').css('background','#f4f4f4')
          })
      
          
          //点击其他区域也能关闭送货地址列表暂未完成
            // $('div').not('div.hd_city_select').on("click",function(){
            //   console.log($('.hd_city_select').css('display'))
            //   if($('.hd_city_select').css('display') === 'block'){
            //   $('.hd_city_select').css('display','none');
            //   }
            // })
        }),
        //点击字母到达对应的位置
        $(function(){
          var e = 0 ;
          $('.hd_city_initial a').on('click',function(){
            e = $(this).index();
            console.log(e)
            $('.hd_city_list li').eq(e)
            console.log($('.hd_city_list li').eq(0))
          })
        })
        //导航头右边的客户服务一栏分栏下单栏目鼠标浮上去字体颜色变化
        $(function(){
          $('.hd_menu_list a').hover(function(){
            $(this).css("color","#ff4040");
          },function(){
            $(this).css("color","#666");
          })
        }),
        $(function(){
          $('.hd_city_input input').on('keyup',function(){
            $('.hd_city_suggest').css('display','block');
            $('.hd_city_input i').css("display","block");
            $('.hd_city_search .hd_citys_close').css('display','none');
            if($('.hd_city_input input').val()){
              $('.hd_city_input i').css('display','none');
              $('.hd_city_search .hd_citys_close').css('display','block');
            }
          })
        }),
          // 点击出现提示内容和点击关闭提示内容
          $(function(){
            $('.hd_city_suggest').on('click','a',function(){
              console.log($(this).text())
              $('.hd_city_input input').val($(this).text());
            })
            $('.hd_city_search .hd_citys_close').on('click',function(){
              $('.hd_city_suggest').css('display','none');
              $('.hd_city_input i').css('display','block')
              $('.hd_city_input input').val('');
              $('.hd_city_search .hd_citys_close').css('display','none')
            })
          }),
          //小图标的旋转
          $(function(){
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
          }),
          // 浮上去出现二维码
          $(function(){
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
          }),
          // 搜索提示的出现和消失
          $(function(){
            $('.hd_search_from').click(function(){
              $('.hd_search_tips_result').css("display","block");      
            }).on('mouseleave',function(){
              $('.hd_search_tips_result').css("display","none");
            }).on('mouseleave',function(){
              $('.hd_search_tips_result').css("display","none");
            })
          })
          // 所有商品分类的下拉菜单
          $(function(){
            $('.aa1').mouseover(function(){
                $('.hd_cm_menu').css("display","block");
            })
            $('.hd_cm_allsort').on('mouseleave',function(){
              $('.hd_cm_menu').css("display","none");
            })




          })
          
}(jQuery))