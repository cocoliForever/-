$(function(){
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
    var $jspDrag=$('<div class="jspDrag"></div>')
      

// 品牌***************************************** 
    $('.brandWrap .multiple_choice a').on('click',function(){
        var m=parseInt($('.guide_lists').css('height'))
        // 添加滚动条
        if(m===107){
            $('.brandWrap .guide_lists').css('height',213)
            $('.brandWrap .guide_ul').css( 'width',1270 )
            $('.jspTrack').css('height',213)
            $('.jspDrag').css('height',48)
            $('.over_any').css('display','none')
            $('.guide_switch').css('display','block')
            $('.guide_selected').css('display','block')
            $('.brandWrap .guide_btn').css('display','block')
            $('.brandWrap .multiple_choice .many').html('收起 <i class=" iconfont icon-xiangshang amine"></i>')
        }else{
            $('.brandWrap .guide_lists').css( 'height',107)
            $('.over_any').css('display','inline')
            $('.jspTrack').css('height',107)
            $('.jspDrag').css('height',12)
            $('.guide_switch').css('display','none')
            $('.brandWrap .guide_ul').css( 'width',1156 )
            $('.guide_selected').css('display','none')
            $('.brandWrap .guide_btn').css('display','none')
            $('.brandWrap .multiple_choice .many').html('更多 <i class=" iconfont icon-xiangxia amine"></i>')
        }
         // 向下滑动jspDrag，使内容跟着滑动
        $('.jspTrack').append($jspDrag)
                 // 品牌展开下的事件
        if( parseInt($('.jspTrack').css('height'))==213){
            $('.jspDrag').on('mousedown',function(e) {　
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
                // 点击品牌li事件************************
            $('.jspContainer .guide_ul').on('click','li',function(){
                console.log($(this).find('.sl'))
               
                // 点中li，border显示红色，再次点击颜色消失
                if($(this).find('.sl').css('display')==='block'){
                    $(this).find('.sl').css({'display':'block'})
                    $(this).find('.sr').css({'display':'block','color':'#fff'})
                    $(this).find('.cl').css('display','block')
                }else{
                    $(this).find('.sl').css({'display':'none'})
                    $(this).find('.sr').css({'display':'block','color':'#333'})
                    $(this).find('.cl').css('display','none')
                }
               // 点击内容使内容呈现在已选之中 
               var $span=$('<div class="ansery">'+$(this).find('.sl').text()+'<span class="close">×</span></div>')
                $('.guide_selected').append($span)
                $('.close').on('click',function(){
                    $(this).parent().remove()
                    $('guide_ul .li').find('.sl').css('borderColor','#fff') 
                    if($('.ansery').length===0){
                        // 确定按钮变化
                        $('.btn_ok').css({
                            'cursor': 'not-allowed',
                            'color': '#999',
                            'borderColor':'#cfcfcf',
                            'background':' #fbfbfb'
                        })
                    }
                    // console.log($(document).text($(this).parent().text()))
                 })
                $('.btn_ok').css({
                    'cursor':'auto',
                    'backgroundColor':'#ff855c',
                    'borderColor':'#f27e57',
                    'color':'#fff'
                })
            })
            // 点击取消事件
            $('.btn_cancel').on('click',function(){
                $('.guide_switch').css('display','none')
                $('.guide_selected').css('display','none')
                $('.brandWrap .guide_ul').css( 'width',1156 )
                $('.brandWrap .guide_btn').css('display','none')
                $('.brandWrap .guide_lists').css('height',107)       
            })
        }
        // 品牌未展开时
        if( parseInt($('.jspTrack').css('height'))==107){
            $('.jspDrag').on('mousedown',function(e) {　
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
                        'top':divY-135
                    })
                    var haa = parseInt((6.6)*divY)
                    $('.jspContainer').css('top',-haa+660)
            　　　　})
                $(document).on('mouseup',function(){
                    $(document).off('mousemove');
                })
            })
        }
    })
 
        
    

    
    
})