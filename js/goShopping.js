( function ( $ ) {
  $( function () {
    //倒计时========================================
    var starttime = new Date( "2018/11/20" );
    var starttime1 = new Date( "2018/12/12" );
    //这里声明到期时间
    function p ( s ) {
      return s < 10 ? '0' + s : s;
    }
    setInterval( function () {
      var nowtime = new Date();
      function timer ( time, parmas ) {
        var day = parseInt( time / 1000 / 60 / 60 / 24 );
        var hour = parseInt( time / 1000 / 60 / 60 % 24 );
        var minute = parseInt( time / 1000 / 60 % 60 );
        var seconds = parseInt( time / 1000 % 60 );
        $( parmas ).html( p( day ) + "天" + p( hour ) + ':' + p( minute ) + ":" + p( seconds ) );

      }
      ( function () {
        var time = starttime - nowtime;
        var time1 = starttime1 - nowtime;
        // 这里声明时间差值
        // 下面调用，第二个参数为要填入的地方的类名
        timer( time, '.countdown' );
        timer( time1, '.countlast' )
      }() )
    }, 1000 );
  } )

  $( function () {
    /**
   *
   * 获取当前时间
   */
    function p ( s ) {
      return s < 10 ? '0' + s : s;
    }
    setInterval( function () {

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

      var $now = year + '-' + p( month ) + "-" + p( date ) + " " + p( h ) + ':' + p( m ) + ":" + p( s );
      $( '#nowTime' ).html( $now );
    }, 1000 )
  } )







  // 这里是静态轮播(只有点击状态)   轮播乱码。稍后检查！！！

  $( function () {

    var $ul = $( '.sale_scroll_ul.only_ul' );
    var $li1 = $ul.children().eq( 0 );
    //克隆前五个，利用for循环，为了无缝轮播
    //获取对应的属性
    var LI_WIDTH = 360 + 5 * $li1.width();
    var LI_LENGTH = Math.ceil( $ul.children().length / 5 );
    // //声明一个变量一会存索引值
    var index = 0;
    $( '.left_arrow_f' ).on( 'click', function () {
      $( '.right_arrow_f' ).css( {
        display: 'block'
      } )
      if ( index === 1 ) {
        $( this ).css( {
          display: 'none'
        } )
      }
      index--
      changePage( index )
    } )
    $( '.right_arrow_f' ).on( 'click', function () {
      $( '.left_arrow_f' ).css( {
        display: 'block'
      } )
      if ( index === 2 ) {
        $( this ).css( {
          display: 'none'
        } )
      }
      index++

      changePage( index )
    } )

    $( ".view_dot" ).on( 'click', 'span', function () {
      var i = $( this ).index()
      index = i
      changePage( index )
      if ( index == 0 ) {
        $( '.left_arrow_f' ).css( {
          display: 'none'
        } )
      } else {
        $( '.left_arrow_f' ).css( {
          display: 'block'
        } )
      }
      if ( index == 3 ) {
        $( '.right_arrow_f' ).css( {
          display: 'none'
        } )
      } else {
        $( '.right_arrow_f' ).css( {
          display: 'block'
        } )
      }
    } )

    function changePage ( i ) {
      $( '.view_dot span' ).removeClass( 'cur' ).eq( i ).addClass( 'cur' )
      $ul.stop().animate( {
        left: -i * LI_WIDTH
      } )
    }
    // 页面加载后的默认状态应该为消失的状态，且在最后，否则会覆盖后期的点击事件！！！
    $( '.left_arrow_f' ).css( {
      display: 'none'
    } )
  } )

  // 侧边的收藏特效


  $( '.t_control_btn_a' ).on( 'click', function ( e ) {
    // 阻止冒泡。为防止冒泡到document点击事件上！！！在下面
    var e = e || window.event;
    e.stopPropagation();
    $( '.tbar_wrap_panels>div' ).eq( $( this ).index() ).addClass( 't_panel_content_show' ).siblings().removeClass( 't_panel_content_show' )
    $( '.tbar_wrap_panels>div' ).eq( $( this ).index() ).addClass( 'toolbar-animate-in' ).siblings().removeClass( 'toolbar-animate-in' )
    var $this = $( this ).index()
    if ( !$( this ).hasClass( 't_btn_selected' ) ) {
      $( '.c_global_toolbar' ).stop().animate( {
        right: '286px'
      } )
      $( '.t_panel_content' ).eq( $this ).stop().animate( {
        left: 0
      } ).siblings().css( {
        left: '286px'
      } )
      $( this ).addClass( 't_btn_selected' ).siblings().removeClass( 't_btn_selected' )
    } else {
      $( '.c_global_toolbar' ).stop().animate( {
        right: 0

      }, function () {
        $( '.t_btn_selected' ).removeClass( 't_btn_selected' )
      } )



    }

  } )
  //解绑回顶部的盒子的点击事件document事件
  $( '.t_control_btn_a' ).eq( 3 ).off( 'click' )


  $( document ).on( 'click', function () {
    $( '.c_global_toolbar' ).animate( {
      right: 0
    } )
    $( '.t_btn_selected' ).removeClass( 't_btn_selected' )

  } )

  $( 'i.icon-yinger' ).on( 'click', function () {
    $( 'html,body' ).animate( {
      scrollTop: 0
    } )
  } )



  // 先实现批量删除按键的弹窗功能！！！
  $( function () {
    $( '.lt_delete' ).on( 'click', function () {
      $( 'html,body' ).css( {
        overflowY: 'hidden'
      } )
      $( '.popup_mask' ).css( {
        display: 'block'
      } )
    } )
    // 取消
    $( '.cancel.pop_close' ).on( 'click', function () {
      $( 'html,body' ).css( {
        overflowY: 'visible'
      } )
      $( this ).parents( '.popup_mask' ).css( {
        display: 'none'
      } )
    } )
  } )


}( jQuery ) )
