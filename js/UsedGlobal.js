$( function () {
  $( '#keyword' ).on( 'focus', function () {
    $( '.hd_search_history_new' ).slideDown()
  } )
  $( '#keyword' ).on( 'blur', function () {
    $( '.hd_search_history_new' ).slideUp()
  } )
} )
//上面待解决：当点击提示框，怎样解决其不消失
$( function () {
    var $num=0,s;
    $( '#navCategoryMould' ).on( 'mouseover','li.item ', function () {
      $num=$( this ).index();
      /* 点击元素.添加类名(active).所有同胞(有active类名的).删除类名(active) */
      $( this ).addClass( 'active' ).siblings( '.active' ).removeClass( 'active' )
      /* li.第对应下标的那个组成jquery对象.添加类名(active).所有同胞(有active类名的).删除类名(active) */
      $( '.panel_con' ).eq($num).css({
        'display':'block'
      })
      move($num);
    } ).on('mouseout','li.item',function(){
      console.log($num)
        if($( '.panel_con' ).eq($( this ).index()).css('display') === 'block'){
          $( this ).addClass( 'active' )
           $( '.panel_con' ).eq($( this ).index()).css({
           'display':'block'
         })
        }else{
         $( this ).removeClass( 'active' )
         $( '.panel_con' ).eq($( this ).index()).css({
         'display':'none'
       })
        }
    })
    console.log($num)
    function move($num){
      $( '.panel_con' ).eq( $num ).on('mouseleave',s=function(){
        $(this).css('display','none')
      })

    }

  //没法hover到显示的盒子上
 

} )
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
  $('.screen_slide_list .item').on('mouseover',function(){
    $(this).children('.pro_pic img').css(marginTop,"5px")
  })
} )
