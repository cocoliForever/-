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
    var tiao = function (dom, le, to) {
      $(dom).on('click', function () {
        var $a = $(this).parents('.main_item.item_line');
        height = $a.offset().top
        left = $a.offset().left
        width = $a.width() / 2,
          fleft = $('.fixde_shop').offset().left
        ftop = $('.fixde_shop').offset().top
        wl = fleft - left - width
        hl = ftop - height
        $a.css({
          transform: 'scale(0.2)',
          transition: 'all .8s'
        })
        var $ts = $(this)
        var $url = $a.find('.mainCart').attr('src')
        setTimeout(function () {
          $a.empty().appendTo('.fixde_shop').addClass('active').css({
            'left': -wl, 'top': -hl, width: '100%', height: '100%', transform: '',
            transition: '', 'border-radius': '50%', 'background-image': 'url(' + $url + ')',
          }).animate({
            left: -wl + 200,
            top: -hl - 100
          }, 500, function () {
            $(this).animate({
              left: -le,
              top: -to
            }, 800)

            $(this).fadeOut(1000)

          })

        }, 900)

      })

    }
    // 调用上面的函数
    tiao('.del_btn', 0, 0)
    tiao('.collect_btn', 0, 100)
  })


  // 这里是静态轮播(只有点击状态)


  $(function () {
    var $ul = $('.sale_scroll_ul');
    var $li1 = $ul.children().eq(0);
    //克隆前五个，利用for循环，为了无缝轮播
    for (var $i = 0; $i < 5; $i++) {
      $ul.append($ul.children().eq($i).clone())
    }
    // $ul.append($li1.clone())
    //获取对应的属性
    var LI_WIDTH = 360 + 5 * $li1.width();
    var LI_LENGTH = Math.ceil($ul.children().length / 5);
    console.log(LI_WIDTH)
    console.log(LI_LENGTH)
    var left = $ul.width(LI_WIDTH * LI_LENGTH)
    // //声明一个变量一会存索引值
    var index = 0;
    $('.left_arrow').on('click', function () {
      if (index === 0) {
        index = LI_LENGTH - 1
        $ul.css('left', -index * LI_WIDTH)
      }
      index--
      changePage(index)
    })
    $('.right_arrow').on('click', function () {
      if (index === LI_LENGTH - 1) {
        index = 0
        $ul.css('left', 0)
      }

      index++
      changePage(index)
    })

    $(".view_dot").on('click', 'span', function () {
      var i = $(this).index()
      index = i
      changePage(index)
    })

    timer = setTimeout(function () {
      $('.right_arrow').click()
    }, 3000)

    // $('sale_prod_cont').on('mouseenter', function () {
    //   clearTimeout(timer)
    // })
    // $('sale_prod_cont').on('mouseleave', function () {
    //   timer = setTimeout(function () {
    //     $('.right_arrow').click()
    //   }, 1000)
    // })
    function changePage(i) {
      clearInterval(timer)
      changeProgress(i)
      $ul.stop().animate({
        left: -i * LI_WIDTH
      }, function () {
        timer = setTimeout(function () {
          $('.right_arrow').click()
        }, 3000)
      })
    }

    function changeProgress(i) {
      if (i === LI_LENGTH - 1) {
        i = 0
      }
      $('.view_dot span').removeClass('cur').eq(i).addClass('cur')
    }
  })

  // 侧边的收藏特效

  $('.t_control_btn_a').on('click', function () {
    $('.c_global_toolbar').animate({
      right: '286px'
    })
    $(this).addClass('t_btn_selected').siblings().removeClass('t_btn_selected')
  })
  $('.t_btn_selected').on('click', function () {
    $('.c_global_toolbar').animate({
      right: 0
    })
    $(this).addClass('t_btn_selected').siblings().removeClass('t_btn_selected')
  })


}(jQuery))
