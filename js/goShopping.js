(function ($) {
  $(function () {
    //倒计时========================================
    var starttime = new Date("2018/11/20");
    var starttime1 = new Date("2018/12/12");
    //这里声明到期时间
    function p(s) {
      return s < 10 ? '0' + s : s;
    }
    setInterval(function () {
      var nowtime = new Date();
      function timer(time, parmas) {
        var day = parseInt(time / 1000 / 60 / 60 / 24);
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
        $(parmas).html(p(day) + "天" + p(hour) + ':' + p(minute) + ":" + p(seconds));

      }
      (function () {
        var time = starttime - nowtime;
        var time1 = starttime1 - nowtime;
        // 这里声明时间差值
        // 下面调用，第二个参数为要填入的地方的类名
        timer(time, '.countdown');
        timer(time1, '.countlast')
      }())
    }, 1000);
  })

  $(function () {
    /**
   *
   * 获取当前时间
   */
    function p(s) {
      return s < 10 ? '0' + s : s;
    }
    setInterval(function () {

      var myDate = new Date();
      //获取当前年
      var year = myDate.getFullYear();
      //获取当前月
      var month = myDate.getMonth() + 1;
      //获取当前日
      var date = myDate.getDate();
      var h = myDate.getHours();       //获取当前小时数(0-23)
      var m = myDate.getMinutes();     //获取当前分钟数(0-59)
      var s = myDate.getSeconds();

      var $now = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
      $('#nowTime').html($now);
    }, 1000)
  })




  var wl, hl, s;
  $(function () {
    // 初始化 右边栏 红色背景的数字 begin ======
    var leng = $('#toGo').children().length
    var leng1 = $('#toOut').children().length
    $('#collect').find('.c_lit_tip').text(leng)
    $('#trash').find('.c_lit_tip').text(leng1)
    // 初始化   ending===========
    var tiao = function (dom, parmas, ele, num) {
      $(dom).on('click', function () {
        var $a = $(this).parents('.order_content .order_lists');
        var $par = $a.parents('.cartBox').find('.shop_info .shop_name a').text()
        console.log($par)
        height = $a.offset().top
        left = $a.offset().left
        width = $a.width() / 2
        fleft = $(parmas).offset().left
        ftop = $(parmas).offset().top
        wl = fleft - left - width
        hl = ftop - height
        $a.css({
          transform: 'scaleX(0.1) scaleY(0.5)',
          transition: 'all .8s'
        })
        // 下面三个var 是为了找到相应的属性 append进去 右边栏 
        var $url = $a.find('.list_con img').attr('src')
        var $content = $a.find('.list_con .list_text a').text()
        var $price = $a.find('.list_price.price_dan p').text().substring(1)
        setTimeout(function () {
          $a.empty().appendTo(parmas).addClass('fly').css({
            'left': -wl, 'top': -hl, 'width': '50px', 'height': '50px', 'transform': '',
            'transition': '', 'background-image': 'url(' + $url + ')', 'backgroundColor': ''
          }).animate({
            // 这里是刚开始向上移动的动画
            left: -wl + 200,
            top: -hl - 100
          }, 500, function () {
            $(this).animate({
              // 经过500ms后 移动到对应的盒子中(经历200ms)
              left: -10,
              top: -10
            }, 200, function () {
              // 这里为了图片动画结束后 将其隐藏
              $(this).fadeOut(1000, function () {
                // $(this).remove()

              })
              // 记录收藏或 移除的数量
              num += 1
              //找到写入右上角的商品的盒子
              count = $(this).parent().find('.c_lit_tip')

              // 将 收藏 或者移除的商品数量添加至 右上角的盒子中
              // 找到右边栏的最大父盒子，为其绑定添加或删除事件
              // $par 找到的事
              var $li = '<li class="clearfix" data-shopTag="' + $par + '"><div class="t_prodimg"><a href="javascript:;" target="_blank"><img src="' + $url + '" width = "80" height = "80"></a></div><div class="t_prodinfo"><div class="tp_title clearfix"><a class="ti_name is-truncated" href="javascript:;" target = "_blank" style = "word-wrap: break-word;" >' + $content + '</a ></div><p class="tp_price">¥<b>' + $price + '</b></p><a class="tp_add_cart iconfont icon-gouwuche" href="javascript:;"></a></div></li>'

              $(ele).append($li)
              count.text(num)
            })

          })
        }, 900)
        // 这里判断当删除或者收藏时，最后一个时，将本快内容全部删除
        if ($a.parent().children().length == 1) {
          $(this).parents('.cartBox').fadeOut(2100)
        }
      })

    }
    // 调用上面的函数
    // 第三个参数是为了找到 右边栏的对应的ul 列表盒子
    // 第四个参数是为了 将 初始化的 列表长度和新添加的商品数量
    tiao('.list_op .del', '#trash', '#toOut', leng1)
    tiao('.list_op .cang', '#collect', '#toGo', leng)


    // 反向添加到购物车列表

    $('.tp_add_cart').on('click', function () {
      console.log($(this))

    })
  })



  // 这里是静态轮播(只有点击状态)   轮播乱码。稍后检查！！！

  $(function () {

    var $ul = $('.sale_scroll_ul.only_ul');
    var $li1 = $ul.children().eq(0);
    //克隆前五个，利用for循环，为了无缝轮播
    //获取对应的属性
    var LI_WIDTH = 360 + 5 * $li1.width();
    var LI_LENGTH = Math.ceil($ul.children().length / 5);
    // //声明一个变量一会存索引值
    var index = 0;
    $('.left_arrow_f').on('click', function () {
      $('.right_arrow_f').css({
        display: 'block'
      })
      if (index === 1) {
        $(this).css({
          display: 'none'
        })
      }
      index--
      changePage(index)
    })
    $('.right_arrow_f').on('click', function () {
      $('.left_arrow_f').css({
        display: 'block'
      })
      if (index === 2) {
        $(this).css({
          display: 'none'
        })
      }
      index++

      changePage(index)
    })

    $(".view_dot").on('click', 'span', function () {
      var i = $(this).index()
      index = i
      changePage(index)
      if (index == 0) {
        $('.left_arrow_f').css({
          display: 'none'
        })
      } else {
        $('.left_arrow_f').css({
          display: 'block'
        })
      }
      if (index == 3) {
        $('.right_arrow_f').css({
          display: 'none'
        })
      } else {
        $('.right_arrow_f').css({
          display: 'block'
        })
      }
    })

    function changePage(i) {
      $('.view_dot span').removeClass('cur').eq(i).addClass('cur')
      $ul.stop().animate({
        left: -i * LI_WIDTH
      })
    }
    // 页面加载后的默认状态应该为消失的状态，且在最后，否则会覆盖后期的点击事件！！！
    $('.left_arrow_f').css({
      display: 'none'
    })
  })

  // 侧边的收藏特效


  $('.t_control_btn_a').on('click', function (e) {
    // 阻止冒泡。为防止冒泡到document点击事件上！！！在下面
    var e = e || window.event;
    e.stopPropagation();
    $('.tbar_wrap_panels>div').eq($(this).index()).addClass('t_panel_content_show').siblings().removeClass('t_panel_content_show')
    $('.tbar_wrap_panels>div').eq($(this).index()).addClass('toolbar-animate-in').siblings().removeClass('toolbar-animate-in')
    var $this = $(this).index()
    if (!$(this).hasClass('t_btn_selected')) {
      $('.c_global_toolbar').stop().animate({
        right: '286px'
      })
      $('.t_panel_content').eq($this).stop().animate({
        left: 0
      }).siblings().css({
        left: '286px'
      })
      $(this).addClass('t_btn_selected').siblings().removeClass('t_btn_selected')
    } else {
      $('.c_global_toolbar').stop().animate({
        right: 0

      }, function () {
        $('.t_btn_selected').removeClass('t_btn_selected')
      })



    }

  })
  //解绑回顶部的盒子的点击事件document事件
  $('.t_control_btn_a').eq(3).off('click')


  $(document).on('click', function () {
    $('.c_global_toolbar').animate({
      right: 0
    })
    $('.t_btn_selected').removeClass('t_btn_selected')

  })

  $('i.icon-yinger').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    })
  })



  // 先实现批量删除按键的弹窗功能！！！
  $(function () {
    $('.lt_delete').on('click', function () {
      $('html,body').css({
        overflowY: 'hidden'
      })
      $('.popup_mask').css({
        display: 'block'
      })
    })
    // 取消
    $('.cancel.pop_close').on('click', function () {
      $('html,body').css({
        overflowY: 'visible'
      })
      $(this).parents('.popup_mask').css({
        display: 'none'
      })
    })
  })


}(jQuery))
