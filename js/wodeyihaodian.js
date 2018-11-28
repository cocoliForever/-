(function($){
  $(function(){
    // 客户服务hover
    $(".hd_has_child").on('mouseenter',function(){
      $(this).children('.hd_menu').css({
        'border':'1px solid #dbdbdb',
        'border-top':'0',
        'background':'white'
      })
      $(this).children('.hd_menu_list').css({
        'display':'block'
      })
      $(this).children('.hd_qrcode_bg').css({
        'display':'block'
      })
    })
    $('.hd_has_child').on('mouseleave',function(){
      $(this).children('.hd_menu').css({
        'border':'1px solid #f4f4f4',
        'border-top':'0',
        'background':''
      })
      $(this).children('.hd_menu_list').css({
        'display':'none'
      })
      $(this).children('.hd_qrcode_bg').css({
        'display':'none'
      })
    })

    // hover 顶部导航的时候  添加类名
    $(".nav_item").hover(function(){
      $(this).addClass('active').siblings().removeClass('active')
      $(this).children('.pull_list_wrap').css('display','block')
      $(this).find('i').css({
        'transform':'rotate(180deg)',
        'transition':'all .5s'
      })
    },function(){
      $(this).removeClass('active').siblings().removeClass('active')
      $(this).children('.pull_list_wrap').css('display','none')
      $(this).find('i').css({
        'transform':'',
      })
    })

    // 搜素框focus的时候
    $('.enter_box').focus(function(){
      $(this).css('background','white').parent().css('background','white')
    })
    // 搜索框blur的时候
    $('.enter_box').blur(function(){
      $(this).css('background','#514f57').parent().css('background','#514f57')
    })
    


  
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
      var s = myDate.getSeconds();     //获取当前秒(0-59) 

      var $now = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);                      //年月日时分秒
      // var $now = year + '-' + p(month) + "-" + p(date);
      $('.user_account_date .date').html($now);
    }, 1000)
    
    
    // 获取星期几
    var mydate = new Date();
    var today = new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
    var week = today[mydate.getDay()-1];
    $('.user_account_date .week').html(week)























  })
}(jQuery))