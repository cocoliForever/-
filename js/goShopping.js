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
    var tiao = function (dom, parmas) {
      $(dom).on('click', function () {

        var $a = $(this).parents('.main_item.item_line');
        height = $a.offset().top
        left = $a.offset().left
        width = $a.width() / 2,
          fleft = $(parmas).offset().left
        ftop = $(parmas).offset().top
        wl = fleft - left - width
        hl = ftop - height
        $a.css({
          transform: 'scale(0.2)',
          transition: 'all .8s'
        })
        var $ts = $(this)
        var $url = $a.find('.mainCart').attr('src')
        setTimeout(function () {
          $a.empty().appendTo(parmas).addClass('active').css({
            'left': -wl, 'top': -hl, width: '50px', height: '50px', transform: '',
            transition: '', 'background-image': 'url(' + $url + ')',
          }).animate({
            left: -wl + 200,
            top: -hl - 100
          }, 500, function () {
            $(this).animate({
              left: -10,
              top: -10
            }, 800)

            $(this).fadeOut(1000)

          })

        }, 900)

      })

    }
    // 调用上面的函数
    tiao('.del_btn', '#trash')
    tiao('.collect_btn', '#collect')
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
      console.log($(this).length)
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
    // console.log($(this).attr('class'))

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
  // 顶部的三级联动
  // 遍历数据
  // $.each(provinceList, function (index, data) {
  //   console.log(data)
  //   console.log(data.name)
  //   console.log(data.cityList)


  // })


  var $top = $('.bottom_wrap').offset().top - $(window).height()
  var $top1 = $('.bottom_wrap').offset().top - 60
  // 总价条固定top和bottom
  $(function () {
    $(document).on('scroll', function () {
      // console.log($(this).scrollTop())
      var _top = $(this).scrollTop()
      var banH = $('.bottom_wrap').offset().top - _top
      var screen = $(window).height() / 2

      if (_top < $top) {
        $(".pay_tools_bar").addClass('tools_bar_bottom')
        // 这里的条件是为了判断总价条是否到了屏幕中间，为了改变隐藏块的显示方向

        // console.log()
      } else if ($top1 < _top) {
        $(".pay_tools_bar").addClass('tools_bar_top')
      } else {
        $('.pay_tools_bar').removeClass('tools_bar_bottom')
        $(".pay_tools_bar").removeClass('tools_bar_top')

      }
      if (banH <= screen) {
        $('.pay_total_tips t_arrow').addClass('t_arrow_top')
        $('.pay_total_tips').css({
          top: '50px'
        })

      } else {
        $('.pay_total_tips t_arrow').addClass('t_arrow_bot')
        $('.pay_total_tips').css({
          top: '-86px'
        })
      }
      $('.pay_total_tips .t_arrow').toggleClass('t_arrow_bot')

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

  //实现选择框的关联
  //三级全选影响二级全选和一级全选
  $(function () {
    $('.cart_item').on('click', '.check', function () {
      if ($(this).find('i').css('display') === 'none') {
        funt($(this))
        $(this).addClass('xz').parents('.item_line.main_item').css({ backgroundColor: '#fff7f7' })
        $(this).find('i').css('display', 'block')
      } else {
        funt($(this))
        $(this).find('i').css('display', 'none')
        $(this).removeClass('xz').parents('.item_line.main_item').css({ backgroundColor: '#fff' })
      }
      var s = $(this).parents('.cart_item').find('.check').length
      var num = $(this).parents('.cart_item').find('.xz').length;
      var t = $('.xz').length
      var m = $('.check_item').length
      if (s === num) {
        $(this).parents('.cart_list_wrap').siblings('.cart_tit').find('i').css('display', 'block')
      } else {
        $(this).parents('.cart_list_wrap').siblings('.cart_tit').find('i').css('display', 'none')
      }
      if (t === m) {
        $('.check_all').find('i').css('display', 'block')
      } else {
        $('.check_all').find('i').css('display', 'none')
      }
      funt($(this))
    })
    //二级全选影响三级和二级
    $('.cart_tit').on('click', '.check_list', function () {
      if ($(this).find('i').css('display') === 'none') {
        funt($(this))
        $(this).find('i').css('display', 'block').parents('.cart_list').find('.check_item').addClass('xz').parents('.item_line.main_item').css({ backgroundColor: '#fff7f7' })
        $(this).addClass('ejxz')
        $(this).find('i').css('display', 'block').parents('.cart_list').find('.check').find('i').css('display', 'block')
      } else {
        funt($(this))
        $(this).removeClass('ejxz')
        $(this).find('i').css('display', 'block').parents('.cart_list').find('.check_item').removeClass('xz').parents('.item_line.main_item').css({ backgroundColor: '#fff' })
        $(this).find('i').css('display', 'block').parents('.cart_list').find('.check').find('i').css('display', 'none')
      }
      var l = $('.check_list ').length
      var h = $('.ejxz').length
      if (l === h) {
        $('.check_all').find('i').css('display', 'block')
      } else {
        $('.check_all').find('i').css('display', 'none')
      }

    })
    //一级全选影响所有
    $('.check_all').on('click', function () {
      // $('.check_list').click()

      if ($(this).find('i').css('display') === 'none') {
        $('.check_all').find('i').css('display', 'block')
        $('.check_list').find('i').css('display', 'block');
        $('.check_item').find('i').css('display', 'block');
        funt($(this))
      } else {
        $('.check_all').find('i').css('display', 'none')
        $('.check_list').find('i').css('display', 'none');
        $('.check_item').find('i').css('display', 'none');
        funt($(this))
      }
    })

  })




  // 计算单行价格 =================
  // function getSubtotal(tr) {
  //   var parmas = tr.attr('class') == 'item item_line main_item clearfix' ? tr : tr.parents('.item_line.main_item');
  //   var price = parmas.find('.item_price p').text();/* 单价 */
  //   var counts = parmas.find('.num_act.clearfix input').val(); //数量
  //   var subtotal = parmas.find('.item_a_money'); //小计total
  //   text = (parseInt(counts) * parseFloat(price)).toFixed(2);
  //   subtotal.html(text);
  //   var check = parmas.find('.check_item').find('i');
  //   var littleTotal = parmas.parents('.cart_list').find('.cart_amount').find('.littleTotal')
  //   var len = check.parents('.check_item').hasClass('xz')
  //   console.log(len)
  //   if (!len) {
  //     littleTotal.text(subtotal.html())
  //   } else {
  //     littleTotal.text(0.00)
  //   }
  // }
  //封装一个函数通过判断三级选中的个数来影响总价格
  function funt(hh) {
    var Totalnumber = 0, Totalprice = 0;
    var l = hh.parents('.cart_main_body').find('.xz').length;

    //还是通过判断选中的三级按钮再次获得选中的数量，改变总共的数量和价格。
    if (hh.parents('.cart_main_body').find('xz')) {
      for (var k = 0; k < l; k++) {
        Totalnumber += parseInt(hh.parents('.cart_main_body').find('.input').val());
        Totalprice += parseInt((hh.parents('.main_item').find('.item_price').find('p').text()) * Totalnumber);
      }
    }
    var a = $('.rpv_count b')
    var c = $('.rpt_count b')
    var d = hh.parents('.cart_main_body').find('.littleTotal');
    if (l > 0) {
      a.text(Totalnumber)//全部的数量
      c.text(Totalprice.toFixed(2));//总价
      d.text(Totalprice.toFixed(2));//总价
    } else {
      console.log("进去了")
      a.text(0.00)//全部的数量
      c.text((0.00).toFixed(2));//总价
      d.text((0.00).toFixed(2));//总价
    }
    // }


  }



  //input筐的点击事件================、

  // $('.item_line.main_item').on('click', '.add,.unable', function () {
  //   // var e = e || window.event
  //   // var target = e.target || e.srcElement
  //   var cls = $(this).attr('class')
  //   var countInout = $(this).find('input')
  //   var value = parseInt(countInout.val())
  //   var kg = $(this).find('.item_a_weight span')
  //   if (countInout.val() == '') {
  //     // 设置input为空时，要显示1
  //     countInout.val('1')
  //   }
  //   if (cls == 'add') {
  //     countInout.val(value + 1);
  //   }
  //   if (cls == 'unable') {
  //     countInout.val(value - 1);
  //     if (countInout.val() < 1) {
  //       countInout.val(1)
  //     }
  //   }
  //   getSubtotal($(this))
  //   console.log(cls)
  //   // 清除上一次的重量值，否则会叠加！！！
  //   kg.html('3.78')
  //   kgs = (parseFloat(kg.html()) * parseInt(countInout.val())).toFixed(2);
  //   kg.html(kgs);
  // })

  // oninput = "value=value.replace(/[^\d]/g,'')"
  // 上一行加在input元素中，可以实现只允许输入数字！！！！



  // 当前店铺的总价！！！
  // function getTotal(total) {
  //   var parents = total.parents('.cart_list')
  //   var total = parents.find('.cart_amount span span')
  // }

  // function getKeyup(tot) {
  //   var tr = tot.parents('.item_line.main_item')
  //   var jj = tr.find('.item_amount')
  //   var kg = jj.find('.item_a_weight span')

  //   // 清除上一次的重量值，否则会叠加！！！
  //   kg.html('3.78')
  //   getSubtotal(tr)
  //   kgs = (parseFloat(kg.html()) * parseInt(tot.val())).toFixed(2);
  //   kg.html(kgs);

  // }

  // // input框 onkeyup事件 即直接输入数字所发生的改变！！！
  // $('.item_line.main_item').on('keyup', 'input', function () {
  //   if ($(this).val() == '') {
  //     // 设置input为空时，要显示1
  //     $(this).val('1')
  //   }
  //   getKeyup($(this))
  //   // 三级复选框的勾选，与价格变动

  // })
}(jQuery))
