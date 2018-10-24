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
        $(this).parents('.ansery').remove()
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
            $(this).parent().find('.ali').css('display','none')

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
            //  if( $(this).find('.guide_box').css('height')==="auto"){
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
                    $(this).children().find('span').css('color','#333')
                    $(this).parents('.guide_main').find('.btn_ok').css({
                        'cursor': 'not-allowed',
                        'color': '#999',
                        'borderColor':'#cfcfcf',
                        'background':' #fbfbfb'
                    })
                }
            // }  
            // 点击btn_ok事件
            $(this).parent().next('.guide_btn').children().first().on('click',function(){
                window.location.reload()
            })
            // 点击取消btn_cancel事件
            $(this).parent().next('.guide_btn').children().last().on('click',function(){
                // console.log(1)
                $(this).parent().prev().children().children().find('span').css('color','#333')
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
                $(this).find('span').css('color','#333')
                $(this).parents('.son_m').find('.btn_ok').css({
                    'cursor': 'not-allowed',
                    'color': '#999',
                    'borderColor':'#cfcfcf',
                    'background':' #fbfbfb'
                })
            } 
        // } 
        })
        // 点击确定刷新页面
        $('.son_m').on('click','.btn_ok ',function(){
            window.location.reload()
        })
        // 点击取消事件
        $('.son_m').on('click','.btn_cancel',function(){    
            $(this).parent().css('display','none')
            $(this).parents('.son_m').find('.over_mush').css('display','block')
            $(this).parents('.son_m').find('.som_an span').css('color','#333')
            
            $(this).parents('.son_m').find('.som_an i').css({
                    'backgroundPositionX':-64,
                    'backgroundPositionY':-70,
                })                
            $(this).parents('.son_m').find('.som_an i').css('display','none');
            $(this).siblings('.btn_ok').css({
                'cursor': 'not-allowed',
                'color': '#999',
                'borderColor':'#cfcfcf',
                'background':' #fbfbfb'
            })
        })

     })  
    
    
