//导航头送货地址
(function(){
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
        $('.lala').addClass('activeBorder')
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
        $('.hd_has_child').removeClass('activeBorder')
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
    }),
    // 解决banner图列表旁边的展示列表中的a元素转为行内块元素产生的4px的间隙
    $(function(){
      $('.hd_good_category dd').contents().filter(function(){
        return this.nodeType===3;
        }).remove();
    // banner图列表旁边的展示列表中的a元素鼠标浮上去字体变粗
      $('.hd_good_category dd a').hover(function(){
        $(this).css("fontWeight","bold");
      },function(){
        $(this).css('fontWeight','400');
      })
    }),
    // banner图列表旁边的展示列表中的li标签浮上去展示详情列表以及背景色变化字体颜色变化
    $(function(){
      var nums = 0;
      $('.mod_hd_allsort ul .frw').hover(function(){
        $(this).css("background","#ffffff");
        nums = $(this).index();
        $('.hd_show_sort').eq(nums).css('display','block');
        $('.mod_hd_allsort .iconfont').eq(nums).css("color","red");
        $('.mod_hd_allsort .hd_allsort li h3').eq(nums).css("color","#666").find('a').css("color","#666");
      },function(){
        $(this).css("background","#444444");
        $('.hd_show_sort').eq(nums).css('display','none');
        $('.mod_hd_allsort .iconfont').eq(nums).css("color","#666");
        $('.mod_hd_allsort .hd_allsort li h3').eq(nums).css("color","#fff").find('a').css("color","#fff");
      })
    }),
    //把banner图旁边的详情列表的最后一号的底部边框去掉
    $(function(){
      for(var i=0;i<$('.hd_good_category').length;i++){
        $('.hd_good_category').eq(i).find('dl').last().find('dd').css("borderBottom","0px");
      }
    }),
    // banner图的切换
    $(function(){
      var len = $('.promo_wrapper ul li').length;
      var li = $('.promo_wrapper ul li');
      var index = 0;
      $('.show_next').on('click',function(e){
        e.stopPropagation();
        li.eq(index).css('display','none').stop().animate({
          'opacity':'0',
          'z-index':'0'
        })
        index++;
        if(index === len){
          index = 0;
        }
        changePage(index);
      }),
      $('.show_pre').on('click',function(e){
        e.stopPropagation();

        li.eq(index).css('display','none').stop().animate({
          'opacity':'0',
          'z-index':'0'
        })
        index--;
        if(index === -1){
          index = len-1;
        }
        changePage(index);
      }),
      timer = setTimeout(function(){
        $('.show_next').click();
      },3000)
      function changePage(num){
        clearTimeout(timer);
        changeActive(num);
        li.eq(num).css('display','block').stop().animate({
          'opacity':1,
          'z-index':1
        },function(){
          timer = setTimeout(function(){
            $('.show_next').click()
          },3000)
        })
      }
      //点击小点切换图片和小点的背景颜色
      var dots = $('.promonum_show ol li');
      function changeActive(i){
        if(i === len){
          i=0;
        }
        dots.removeClass('cur').eq(i).addClass('cur');
      }
      $('.promonum_show ol').on('mouseenter','li',function(){
        var i = $(this).index();
        index = i;
        li.not(li.eq(index)).css('display','none').stop().animate({
          'opacity':'0',
          'z-index':'0'
        },3000)//把其他的变为none，透明度变为0
        changePage(index);//这里的点击要切换图片和改变类名两者要同步进行所以不能调用changeActive()函数要调用changePage()
      })
      //鼠标浮上去左右切换图标出现和消失
      $('.promo_wrapper li,.promonum_show,a.show_pre,a.show_next').on('mouseenter',function(){
        $('a.show_pre,a.show_next').fadeIn(20);
        clearTimeout(timer);
      })
      $('.promo_wrapper li,.promonum_show,a.show_pre,a.show_next').on('mouseleave',function(){
        $('a.show_pre,a.show_next').fadeOut(20);
        timer = setTimeout(function(){
          $('.show_next').click()
        },3000)
      })
    }),
      //未解决问题banner图结束未完成问题当点击左右切换按钮后，鼠标浮上去不能让轮播停止
      //1好抢购切换
      $(function(){
        //鼠标浮上去图片改变位置
        var i = 0,s=0,num=0;
        $('.pro_pic').eq(i).css('opacity','0.8')
        $('.prod').hover(function(){
          i = $(this).index();
          $('.pro_pic').eq(i).stop().animate({left:-5,opacity:1});
        },function(){
          $('.pro_pic').eq(i).stop().animate({left:0,opacity:0.8});
        })
          $('.next').addClass('next_clickable');//先让右切换按钮出来
          //点击左右切换按钮切换图片
        $('.seckill_list_wrap .next').on('click',function(){
          s++;
          $('.seckill_list ul').stop().animate({'marginLeft':(s*-1020)},500);
          pd(s)
        })
        $('.seckill_list_wrap .pre').on('click',function(){
          s--;
          $('.seckill_list ul').stop().animate({'marginLeft':(s*-1020)},500);
          pd(s);
        })
        // 控制按钮的出现和消失函数
        function pd(t){
          if(t ===0){
            $('.next').addClass('next_clickable');
            $('.pre').removeClass('prev_clickable');
          }else if(t === 1){
            $('.next').addClass('next_clickable');
            $('.pre').addClass('prev_clickable');
          }else if(t === 2){
            $('.next').removeClass('next_clickable');
            $('.pre').addClass('prev_clickable');
          }
        }
    }),
    //一号闪购左边第一张图片鼠标浮上去下面的白块透明度发生变化
    $(function(){
      $('.left_banner').hover(function(){
        $('.brand_caption').css('background','rgba(255,255,255,0.9)');
      },function(){
        $('.brand_caption').css('background','rgba(255,255,255,0.8)');
      })
      //一号闪购左边图片鼠标浮上去图片发生偏移
      $('.group_variety').hover(function(){
        $('.group_variety img').stop().animate({'right':24})
      },function(){
        $('.group_variety img').stop().animate({'right':18})
      })
      $('.group_brand').hover(function(){
        $('.group_brand img').stop().animate({'right':24})
      },function(){
        $('.group_brand img').stop().animate({'right':18})
      })
      //一号闪购右边的菜单浮上去对应页面显示
      var n = 0;
      $('.rank_tab ul li').hover(function(){
        var n = $(this).index()
        $(this).addClass('curs').siblings().removeClass('curs')
        $('.cur_item').stop().animate({'left':n*'82'},0)
        $('.rank_content').eq(n).css('display','block').siblings('.rank_content').css('display','none');
      })
      $('.brand_right ul li').hover(function(){
        $(this).find('img').stop().animate({'right':10});
      },function(){
        $(this).find('img').stop().animate({'right':5});
      })
    })    
    //屏幕滚动条滚动到一定的位置出现fixed搜索框
    $(function(){
      $(document).on('scroll',function(){
        var h = $(document).scrollTop();
        if(h >= 600){
          $('.hd_search_from').addClass('hd_search_fixed').unbind("click");
        }else if(h <=600 ){
          $('.hd_search_from').removeClass('hd_search_fixed').click(function(){
            $('.hd_search_tips_result').css("display","block");      
          }).on('mouseleave',function(){
            $('.hd_search_tips_result').css("display","none");
          }).on('mouseleave',function(){
            $('.hd_search_tips_result').css("display","none");
          });
        }
      })
    })
    //鼠标浮上去图片的大小和阴影发生变化效果不是很好已经弃用
    // $(function(){
    //   var width,height,width2,height2;
    //  $('.mod_global_imported .center_con').on('mouseenter','a',function(){
    //     width = parseInt($(this).css('width')),
    //     height = parseInt($(this).css('height'));
    //     width2 = $(this).find('img').css('width');
    //     console.log($(this).find('img'))
    //     height2 = $(this).find('img').css('height');
    //     $(this).css({
    //       'z-index':105,
    //       'box-shadow': '0 0 5px #bdbcbc',
    //     }).stop().animate({
    //       top:-3.5,
    //       left:-3.5,
    //       width: width+7,
    //       height: height+7
    //     },200)
    //     $(this).find('img').animate({
    //       width: width2+7,
    //       height: height2+7
    //     },200)
    //   }).on('mouseleave','a',function(){
    //     $(this).css({
    //       'z-index':'',
    //       'box-shadow': '',
    //       top:0,
    //       left:0,
    //       width: width,
    //       height: height
    //     },200,function(){
    //       $(this).css({
            
    //       })
    //     })
    //   })
    // })
    //小轮播
    $(function(){
      var len = $('.floor_silder li').length;
      var index = 0,timer;
      $('.turn_show').on('click','.next_btn',function(){
        if(index === 3){
          index=0
        }
        console.log(index)
        $('.floor_silder li').eq(index).stop().animate({
          'z-index':80,
          'width':155,
          'left':20,
          'top':-18
        }).find('.color_mask').css('opacity','.8')
          index++;
          console.log(index)
          if(index === 3){
            index=0
          }
        $('.floor_silder li').eq(index).stop().animate({
          'z-index':100,
          'left':0,
          'width':195,
          'top':0
        }).find('.color_mask').css('opacity','0')
        index++;
          if(index === 3){
            index=0
          }
          console.log(index)
        $('.floor_silder li').eq(index).stop().animate({
          'z-index':90,
          'width':175,
          'left':10,
          'top':-10
        }).find('.color_mask').css('opacity','.5')
        timer = setTimeout(function () {
          $('.next_btn').click()
        }, 3000)
      })
      timer = setTimeout(function(){
        $('.next_btn').click()
      },3000)
    })
})()