$( function () {
  $( '#keyword' ).on( 'focus', function () {
    $( '.hd_search_history_new' ).slideDown()
  } )
  $( '#keyword' ).on( 'blur', function () {
    $( '.hd_search_history_new' ).slideUp()
  } )
} )
//上面待解决：当点击提示框，怎样解决其不消失
$(function(){
  $('li.item').mouseover(function(){
    $( this ).addClass( 'active' ).siblings( '.active' ).removeClass( 'active' )
    $('.panel_con').eq($(this).index()).show().siblings().hide();
  })
//上面正常写tab切换，下面leave的事件对象是两部分父集，即可实现类似hover的效果！
$('.import_category').mouseleave(function(){
  $('.panel_con').hide();
  $( this ).find('li.active').removeClass( 'active' )
})

})

//轮播图
$( function () {

  var $bgLi = $( '#lb li' );
  var $dots = $( '#lb_li li' );
  var $prev = $( '.slide_prev' )
  var $next = $( '.slide_next' )
  var index = 0;
  var length = $( '#lb li' ).length;
  //加载进来就开始让第一个出现，即从开始播放
  init();
  function init () {
    $bgLi.eq( 0 ).fadeIn().siblings().fadeOut()
    $next.on( 'click', function () {
      index++;
      index %= length;
      play();
    } )
    $prev.on( 'click', function () {
      index--;
      index = index < 0 ? length - 1 : index;
      play();
    } )
    timer = setTimeout( function () {
      $next.click()
    }, 3000 )
    function play () {
      clearTimeout( timer )
      timer = setTimeout( function () {
        $next.click()
      }, 3000 )

      $bgLi.eq( index ).fadeIn().siblings().fadeOut();
      $dots.eq( index ).addClass( 'cur' ).siblings().removeClass( 'cur' );

    }

  }
  $dots.on( 'click', function () {
    index = $( this ).index();
    $bgLi.eq( index ).fadeIn().siblings().fadeOut();
    $dots.eq( index ).addClass( 'cur' ).siblings().removeClass( 'cur' );
  } )



} )
$( function () {
  var $con = $( '.slide_page_num .cur_num' )
  var $prev = $( '.slide_arrow .prev' )
  var $next = $( '.slide_arrow .next' )
  var $shopList = $( '.slide_list' )
  // $('.screen_slide_list .item').on('mouseover',function(){
  //   $(this).children('.pro_pic img').css(marginTop,"5px")
  // })
} )
