
////头部js/////////////////////////////////////////////////////////
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
        //点击字母到达对应的位置
  $(function(){
    var e = 0 ;
    $('.hd_city_initial a').on('click',function(){
      e = $(this).index();
      var nNext = $('.hd_city_list ul li').eq(e).position().top;
      var top = $('.hd_city_list ul').scrollTop();
      var s = top + nNext;
      console.log(nNext)
      console.log(e)
      // 页面滚屏操作。
      $('.hd_city_list ul').animate({
          scrollTop: s
      },300);
    })
  })
////头部js//////////////////////////////////////////////////////////////

$(function(){
    // 实现淡入淡出效果轮播图
    
    $('.dots li').on('mouseover',function(){
        
        $(this).addClass('cur').siblings().removeClass("cur");
        
        var index=$(this).index()
        console.log(index)
        j=index
        $(".images li").eq(j).fadeIn(300).siblings().fadeOut(300);
    })
    var j=0
    function move(){  
        if(j===2){
            j=0
        }
        
       $(".images li").eq(j).fadeIn(300).siblings().fadeOut(300,function(){
        // setInterval(move,3000)
       });
       
       $(".dots li").eq(j).addClass('cur').siblings().removeClass("cur");
       j++
    }
    setInterval(move,3000)  
})
//  实现左右无缝轮播切换
$(function(){  
var timer
    function ele(){                                          
        clearTimeout(timer)
       if(j>1190){
        j=0
        $('.brand_name').css('left',0)
       }
       
        $('.brand_name').animate({
       left:-j
   },10)
   timer= setTimeout(function(){ 
    ele(j++)
},10) 
 
}
   var j=0
   var a=0
    timer= setTimeout(function(){ 
        ele(j++)
    },10) 
// 鼠标点中li，轮播停止，支开继续运动
$('.brand_name li').on('mouseenter',function(){
    clearTimeout(timer)
    var index=$(this).index()
    $('.img').eq(index).fadeOut(0)
    $('.imgs').eq(index).fadeIn(0)
     var i=index
    $('.brand_name li').on('mouseleave',function(){
        clearTimeout(timer)
    $('.img').eq(index).fadeIn(0)
    $('.imgs').eq(index).fadeOut(0)
    timer= setTimeout(function(){ 
        ele(j++)
    },10) 
    })      
})
    // clearTimeout(timer)
    $('.left').on('click',function(){
        clearTimeout(timer)
        a++
        if(a>7){
            a=1
            $('.brand_name').css('left',0)
        }
        $('.brand_name').stop().animate(
            {left:-170*a}
        )
    })
    $('.right').on('click',function(){
        clearTimeout(timer)
        a--
        if(a<0){
            a=6
            $('.brand_name').css('left',1020)
        }
        $('.brand_name').stop().animate(
            {left:-170*a}
        )
       
    })
})

// 实现tab切换
$(function(){
var as
$('.content .ware_set').on('mouseenter','.anynav span',function(){
    var index=$(this).index()
    console.log($(this).parent().find('span').length)
    if($(this).parent().find('span').length===3){
        as=264
    }
    if($(this).parent().find('span').length===4){
        as=198
    }
    if($(this).parent().find('span').length===5){
        as=158
    }
    $(this).parent().parent().find('.sub').stop().animate({left:(index*as)})
    $(this).parent().parent().find('.table').eq(index).css("display",'block').siblings('.table').css('display','none')
})
})
$(window).scroll(function(){
//    console.log( $('.go_shops').offset().top)
   console.log($(document).scrollTop())
   if( $('.go_shops').offset().top<$(document).scrollTop()){
       $('.user').css('display','block')
   }
   if($('.go_shops').offset().top>$(document).scrollTop()){
    $('.user').css('display','none')
   }
})