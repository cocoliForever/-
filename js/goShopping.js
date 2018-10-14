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
  tiao('.collect_btn', 0, 80)
})
