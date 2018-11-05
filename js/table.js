;$(function(){
// 点击更多使相关分类中内容全部展示****************
    $('.classWrap .multiple_choice a').on('click',function(){
        var num = parseInt($('.guide_con_noLabel').css('height'))
        if(num===80){
            $('.guide_con_noLabel ').css('height','auto')
            $('.classWrap .multiple_choice a').html('收起 <i class=" iconfont icon-xiangshang amine"></i>')
        }else{
            $('.guide_con_noLabel ').css('height','80')
            $('.classWrap .multiple_choice a').html('更多 <i class=" iconfont icon-xiangxia amine"></i>')
        }
    })
    // 生成jspDrag
   
      
})
$(function(){
// 品牌***************************************** 
    var $jspDrag=$('<div class="jspDrag"></div>')
    $('.brandWrap .multiple_choice a').on('click',function(){
        var m=parseInt($('.guide_lists').css('height'))
        // 添加滚动条
        if(m===107){
            $('.brandWrap .guide_lists').css('height',213)
            $('.brandWrap .guide_ul').css( 'width',1270 )
            $('.jspTrack').css('height',213)
            $('.jspDrag').css('height',48)
            $('.brandWrap .over_any').css('display','none')
            $('.guide_switch').css('display','block')
            $('.guide_selected').css('display','block')
            $('.brandWrap .guide_btn').css('display','block')
            $('.brandWrap .multiple_choice .many').html('收起 <i class=" iconfont icon-xiangshang amine"></i>')
             // 向下滑动jspDrag，使内容跟着滑动
            
        }else{
            $('.brandWrap .guide_lists').css( 'height','')
            $('.brandWrap .over_any').css('display','inline')
            $('.jspTrack').css('height','')
            $('.jspDrag').css('height',12)
            $('.guide_switch').css('display','none')
            $('.brandWrap .guide_ul').css( 'width',1156 )
            $('.guide_selected').css('display','none')
            $('.brandWrap .guide_btn').css('display','none')
            $('.brandWrap .multiple_choice .many').html('更多 <i class=" iconfont icon-xiangxia amine"></i>')
        }
        $('.jspTrack').append($jspDrag)
    })
        
                 // 品牌展开下的事件
      
            $('.jspTrack').on('mousedown','.jspDrag',function(e) {　
                var positionY = e.pageY - $(this).offset().top;
                $(document).on('mousemove',function(e) {　　
            　　　　var divY = e.clientY - positionY;
                    if(divY<=135){
                        divY=135;
                    }
                    if(divY>=300){
                        divY=300;
                    }
                    $('.jspDrag').css({
                        'top':divY-135
                    })
                    // console.log(divY)
                    var haa = parseInt((4.3)*divY)
                    $('.jspContainer').css('top',-haa+580)
                    // console.log(-haa)
            　　　　})
                $(document).on('mouseup',function(){
                    $(document).off('mousemove');
                })
            })
         // 品牌未展开时
         $('.jspTrack').on('mousedown','.jspDrag',function(e) {
                if( parseInt($('.jspTrack').css('height'))==107){
                var positionY = e.pageY - $(this).offset().top;
                $(document).on('mousemove',function(e) {　　
            　　　　var divY = e.clientY - positionY;
                    if(divY<=100){
                        divY=100;
                    }
                    if(divY>=230){
                        divY=230;
                    }
                    $('.jspDrag').css({
                        'top':divY-100
                    })
                    var haa = parseInt((6.6)*divY)
                    $('.jspContainer').css('top',-haa+660)
            　　　　})
                $(document).on('mouseup',function(){
                    $(document).off('mousemove');
                })
            }
        })
        // 点击品牌li事件************************
    $('.jspContainer .guide_ul').on('click','li',function(){
        // console.log($(this).find('.sl'))
        // 点击内容使内容呈现在已选之中 
        if( parseInt($('.jspTrack').css('height'))==213){
            var index=$(this).data('index')
            console.log(index)
            var $span=$('<div class="ansery" data-to="'+index+'"><span class="cont">'+$(this).find('.sl').text()+'</span><span class="close">×</span></div>')
            $('.guide_selected').append($span)
            // 遍历ansery若有相同内容的盒子，删去
            $('.ansery').each(function(){
                if($(this).text() == $(this).prev().text()){
                    $(this).remove();
                }
            })
            // 点中li，border显示红色，再次点击颜色消失
            if($(this).find('.cl').css('display')==='none'){
                
                $(this).find('.sr').addClass('sy')
                $(this).find('.sl').addClass('al')
                $(this).find('.cl').show()
            }else{
                $(this).find('.sr').removeClass('sy')
                $(this).find('.sl').removeClass('al')
                $(this).find('.cl').hide()
                $('.ansery[data-to="'+index+'"]').remove()
            } 
            if($('.ansery').length>=1){
                $('.btn_ok').css({
                'cursor':'auto',
                'backgroundColor':'#ff855c',
                'borderColor':'#f27e57',
                'color':'#fff'
                })
            }
        }
    })
    // 点击确定按钮刷新页面
    $('.guide_btn').on('click','.btn_ok',function(){
        if($('.btn_ok').css('backgroundColor')=='rgb(255, 133, 92)'){
            window.location.reload()
        }
    })
    $('.guide_selected').on('click','.close',function(){
        var to=$(this).parents('.ansery').data('to')
        $('guide_ul .li').find('.sl').css('borderColor','#fff') 
        $('.jspContainer .guide_ul li[data-index="'+to+'"]').find('.sr').removeClass('sy')
        $('.jspContainer .guide_ul li[data-index="'+to+'"]').find('.sl').removeClass('al')
        $('.jspContainer .guide_ul li[data-index="'+to+'"]').find('.cl').hide()
       $(this).parents('.ansery').remove()
        if($('.ansery').length===0){
            // 确定按钮变化
            $('.btn_ok').css({
                'cursor': 'not-allowed',
                'color': '#999',
                'borderColor':'#cfcfcf',
                'background':' #fbfbfb'
            })
        }
        })
    // 点击取消事件
    $('.btn_cancel').on('click',function(){
        $('.guide_switch').css('display','none')
        $('.guide_selected').css('display','none')
        $('.brandWrap .guide_ul').css('width',1156)
        $('.brandWrap .guide_btn').css('display','none')
        $('.brandWrap .guide_lists').css('height',107)       
    })
    // 品牌实现tab切换
    $('.guide_switch').on('click','span',function(){
        $(this).addClass('cur').siblings('.cur').removeClass('cur')
        var num = $(this).text();
        console.log(num)
        // $('.guide_ul li').not('li[data-type="'+num+'"]').hide()
        $('.guide_ul li').fadeOut(0)
        $('.guide_ul li[data-type="'+num+'"]').fadeIn(100)
        if($(this).text()==="全部品牌"){
            $('.guide_ul li').fadeIn(100)
        }
        if($(this).text()==='其他'){
            $('.guide_ul li').fadeOut(0)
            $('.guide_ul li[data-type="other"]').fadeIn(100)
        }
    })
    })
$(function(){
    // 点击多选事件
    $('.search_guide ').on('click','.over_mush .over_any',function(){ 
        // console.log($(this))
        var $guide_main= $(this).parent().nextAll('.guide_main').find(".ali")
        $(this).parents('.guide_box').css('height','auto')
        $(this).parent().hide()
        // console.log($guide_main)
        $(this).parent().nextAll('.guide_main').find('.guide_btn').css('display','block')
        $guide_main.css('display','block') 
    })
    // 点击按钮事件
    $('.search_guide ').on('click','.guide_main .guide_btn',function(){
        $(this).hide()
        $(this).parents('.guide_box').css('height',34)
        $(this).parents('.guide_main').prevAll('.over_mush').show()
        $(this).parent().find('.ali').css('display','')

        })
    //  点击更多事件
        $('.search_guide ').on('click','.over_mush .many',function(){ 
        if( $(this).parents('.guide_box').css('height')==34+"px"){
            $(this).parents('.guide_box').css('height','auto')
            $(this).html('收起 <i class=" iconfont icon-xiangshang amine"></i>')
            
        }else{
            $(this).parents('.guide_box').css('height',34)
            $(this).html('更多 <i class=" iconfont icon-xiangxia amine"></i>')
        } 
        })
    //  点击ul中li，精灵图变为对号
        $('.search_guide ').on('click','.guide_con li',function(){ 
        //  console.log($(this).parents('.guide_box'))
            if( $(this).children().find('i').css('display')=="block"){
            if($(this).children().find('i').css('backgroundPositionX')==-64+"px"){
                $(this).children().find('i').css('backgroundPositionX',-75)
                $(this).children().find('i').css('backgroundPositionY',-58)
                $(this).children().find('span').css('color','#ff4040')
                $(this).parents('.guide_main').find('.btn_ok').css({
                    'cursor':'auto',
                    'backgroundColor':'#ff855c',
                    'borderColor':'#f27e57',
                    'color':'#fff'
                })
            }else{
                $(this).children().find('i').css('backgroundPositionX',-64)
                $(this).children().find('i').css('backgroundPositionY',-70)
                $(this).children().find('span').css('color','')
                $(this).parents('.guide_main').find('.btn_ok').css({
                    'cursor': 'not-allowed',
                    'color': '#999',
                    'borderColor':'#cfcfcf',
                    'background':' #fbfbfb'
                })
            }
        }  
        // 点击btn_ok事件
        $(this).parent().next('.guide_btn').children().first().on('click',function(){
            window.location.reload()
        })
        // 点击取消btn_cancel事件
        $(this).parent().next('.guide_btn').children().last().on('click',function(){
            // console.log(1)
            $(this).parent().prev().children().children().find('span').css('color','')
            $(this).parent().prev().children().children().find('i').css({
                'backgroundPositionX':-64,
                'backgroundPositionY':-70,
            })
            $(this).prev('.btn_ok').css({
                'cursor': 'not-allowed',
                'color': '#999',
                'borderColor':'#cfcfcf',
                'background':' #fbfbfb'
            })
        })
        })
})

$(function(){
//更多筛选项 **********************************************
$('.select_property' ).on('mouseenter','.guide_ax li',function(){
    // 去除横向滚动条
    if($(this).offset().left>=1199){            
        $(this).children().last().css('left',-50)
    }
    if($(this).offset().left>=1277){
        $(this).children().last().css('left',-129)
    } 
})
// 点击更多事件
$('.son_m' ).on('click','.over_mush',function(){ 
    $(this).parents('.son_m').find('.sub').css('display','block')
    $(this).parents('.son_m').find('.guide_btn').css('display','block')
    $(this).hide()
})
// if( $(this).parents('.son_m').find('.guide_btn').css('display','block')){
//  点击som_an中a，精灵图变为对号
$('.son_m').on('click','.som_an a',function(){
    if( $(this).parents('.son_m').find('.sub').css('display')=='block'){

    
    if($(this).find('.sub').css('backgroundPositionX')===-64+"px"){
        $(this).find('.sub').css('backgroundPositionX',-75)
        $(this).find('.sub').css('backgroundPositionY',-58)
        $(this).find('span').css('color','#ff4040')
        $(this).parents('.son_m').find('.btn_ok').css({
            'cursor':'auto',
            'backgroundColor':'#ff855c',
            'borderColor':'#f27e57',
            'color':'#fff'
        })
    }else{
        $(this).find('.sub').css('backgroundPositionX',-64)
        $(this).find('.sub').css('backgroundPositionY',-70)
        $(this).find('span').css('color','')
        $(this).parents('.son_m').find('.btn_ok').css({
            'cursor': 'not-allowed',
            'color': '#999',
            'borderColor':'#cfcfcf',
            'background':' #fbfbfb'
        })
    } 
} 
})
// 点击确定刷新页面
$('.son_m').on('click','.btn_ok ',function(){
    window.location.reload()
})
// 点击取消事件
$('.son_m').on('click','.btn_cancel',function(){    
    $(this).parent().css('display','none')
    $(this).parents('.son_m').find('.over_mush').css('display','block')
    $(this).parents('.son_m').find('.som_an span').css('color','')
    
    $(this).parents('.son_m').find('.som_an i').css({
            'backgroundPositionX':-64,
            'backgroundPositionY':-70,
        })                
    $(this).parents('.son_m').find('.som_an i').css('display','');
    $(this).siblings('.btn_ok').css({
        'cursor': 'not-allowed',
        'color': '#999',
        'borderColor':'#cfcfcf',
        'background':' #fbfbfb'
    })
})

})  

$(function(){
    $('.between input').on('click',function(){
        $('.btn').fadeIn()
        $('.mon').fadeIn()
    })
    $('.show_interval').on('mouseleave',function(){
        $('.mon').fadeOut(2000)
        $('.btn').fadeOut(2000)
    })
    $('.mon ').on('click','span',function(){
        $(this).parents('.between').find('.input_a').val($(this).children().first().text())
        $(this).parents('.between').find('.input_b').val($(this).children().last().text())
    })
    $('.btn_sure').on('click',function(){
        window.location.reload()
    })
    $('.btn_close').on('click',function(){
        $(this).parents('.between').find('.input_a').val('')
        $(this).parents('.between').find('.input_b').val('')
    })

})
//  内容
$(function(){
    $('.simple_table_nonFashion').on('mouseover',function(){
        $(this).find('.bg_border ').show()
    })
    $('.simple_table_nonFashion').on('mouseout',function(){
        $(this).find('.bg_border ').hide()
    })
    $('.buy_btn').on('click',function(){
        $(this).parents('.simple_table_nonFashion').find('.pro_toast').fadeIn().fadeOut(5000)
    })
    var i=1;
    $('.add').on('click',function(){
        i++;
        $(this).parents('.shopping_num').find('input').val(i)
    })
    
    $('.decrease').on('click',function(){
        if($(this).parents('.shopping_num').find('input').val()>1){
            i--;
            $(this).parents('.shopping_num').find('input').val(i)
        }
        
    })
})


////头部js/////////////////////////////////////////////////////////
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
          console.log(e)
          $('.hd_city_list li').eq(e)
          console.log($('.hd_city_list li').eq(0))
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
        })
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
