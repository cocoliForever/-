// 电梯导航
;(function($){
    $(function(){
        // 当滑动到一定的距离时导航板块出现
        $ttt=$('.contt').offset().top
        $(window).scroll(function() {
        if($(document).scrollTop()>=$ttt || $('body,html').scrollTop()>=$ttt){
     			$('#fly').fadeIn()
             		}else{
            		$('#fly').fadeOut()
            		}
        })
       var $td1Top = $('.td').eq(0).offset().top
       var $td2Top = $('.td').eq(1).offset().top
       var $td3Top = $('.td').eq(2).offset().top
       var $td4Top = $('.td').eq(3).offset().top
       var $td5Top = $('.td').eq(4).offset().top//获取每个板块距离窗口顶部的距离
        //判断当窗口到达一定为位置时候对应的按钮上的属性变化
        $(window).scroll(function() {
            $('#ths').find('.th').removeClass('active')
        if($(document).scrollTop()>=$td5Top){
            $('.th').eq(4).addClass('active');
        }else if($(document).scrollTop()>=$td4Top){
            $('.th').eq(3).addClass('active');
        }else if($(document).scrollTop()>=$td3Top){
            $('.th').eq(2).addClass('active');
        }else if($(document).scrollTop()>=$td2Top){
            $('.th').eq(1).addClass('active');
        }else if($(document).scrollTop()>=$td1Top){
            $('.th').eq(0).addClass('active');
        }
    })
        //使用委托
        //当点击每个按钮的时候对应板块的位置变化
        $('#ths').on('click','.th',function(){
            var $i=$(this).index()
            var $tdTop$i = $('.td').eq($i).offset().top
            // $ (document).scrollTop($tdTop$i)
            $('body,html,document').stop().animate({ scrollTop: $tdTop$i }, 600);   
        })
        // 点击返回顶部
        $(".fin5").click(function(){
            $('body,html,document').animate({scrollTop:0},100);
            return false;
        });
    })
    

}(jQuery))