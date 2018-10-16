$(function(){


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
          }),
    //  tab切换
    $('li.lb').on('mouseenter',function(){
        $(this).addClass('active').siblings('.active').removeClass('active')
        $('.panel_con').eq($(this).index()).show().siblings().hide()
    })
    $('.import_category').mouseleave(function(){
        $('.panel_con').hide()
        $(this).find('li.active').removeClass('active')
        
    })
    // 顶部的轮播
          var $ul = $('#lb')//获取图片外的ul
          var $li1 = $ul.children().eq(0)//找到第一张图片
          var $li2 = $ul.children().eq(1)//找到第二张图片
          var LI_WIDTH = $li1.width()//得到每一张图片li的宽度
          var LI_LENGTH = $ul.children().length//得到ul下子元素的长度即为子元素的个数为5
          var index = 0
          $('.slides_right').on('click', function () {
            index++ 
            if (index == LI_LENGTH - 1) {//当index值加到为1的回到第2个图片的位置
            $li1.fadeToggle()
            $li2.fadeToggle()
            $('#bl_li li').eq(index).addClass('cur').siblings('.cur').removeClass('cur')
            index = 0
            }
            // changePage(index)
          })
          $('.slides_left').on('click', function () {
            if (index == 0) {//当index值减到为0的时候再回到最后一个图片的位置
              index = LI_LENGTH - 1//同时让index的值变为1
              $li1.fadeToggle()
              $li2.fadeToggle()
            }
            index--
            // changePage(index)
          })
          $("#bl_li").on('click', 'li', function () {
            var i = $(this).index()
            index = i
            // changePage(i)
          })
        //   timer = setTimeout(function () {
        //     $('.next').click()
        //   }, 3000)
        //   function changePage (i) {
        //     clearTimeout(timer)
        //     changeProgress(i)
        //     $ul.stop().animate({
        //       left: -i * LI_WIDTH
        //     }, function () {
        //       timer = setTimeout(function () {
        //         $('.next').click()
        //       }, 3000)
        //     })
        //   }
        //   function changeProgress (i) {
        //     if (i === LI_LENGTH - 1) {
        //       i = 0
        //     }
        //     $('i').removeClass('active').eq(i).addClass('active')
        //   }


    // 全球精选轮播
    $(".slide_arrow .slide_left").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list').animate({'left':'0'},800)
        $('.cur_num').html('1')
    })
    $(".slide_arrow .slide_right").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list').animate({'left':'-1236'},800)
        $('.cur_num').html('2')
    })
    $(".slide_arrow .slide_left").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    $(".slide_arrow .slide_right").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    // 鼠标扶到图片上时上移
    $('.pro_pic').on('mouseover',function(){
        $(this).stop().animate({'top':'-15px'},500);  
    }).on('mouseout',function(){
        $(this).stop().animate({'top':'0'},500);
    })
    // 品牌直达轮播
    $(".slide_arrow .slide_left1").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list1').animate({'left':'0'},800)
        $('.cur_num1').html('1')
    })
    $(".slide_arrow .slide_right1").mouseover(function(){
        $(this).css('backgroundColor','#ccc')
    }).click(function(){
        $('.slide_list1').animate({'left':'-1236'},800)
        $('.cur_num1').html('2')
    })
    $(".slide_arrow .slide_left1").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })
    $(".slide_arrow .slide_right1").mouseout(function(){
    $(this).css('backgroundColor','#fff')
    })

   


    






    
})