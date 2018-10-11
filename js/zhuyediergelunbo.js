// 电梯导航
;(function(){


    $(function(){
        // console.log(1)
        // $sss=$('.td').eq(0).offset().top
        // $sss1=$('.td').eq(1).offset().top
        // $sss2=$('.td').eq(2).offset().top


        // console.log($sss)
        // console.log($sss1)
        // console.log($sss2)
        
        $ttt=$('.contt').offset().top
        $(window).scroll(function() {
        if($(document).scrollTop()>=$ttt || $('body,html').scrollTop()>=$ttt){
     			$('#fly').fadeIn()
             		}else{
            		$('#fly').fadeOut()
            		}
        })

    //     var fly=document.getElementById("fly");//获得每个边栏控制按钮的父集用于委托控制使用
    //     var t = getOffsetPosition(fly).top;    
    //     //获取边栏控制按钮的父集距离窗口顶部的距离用于到达一定位置时的定位
    //     var th=document.querySelectorAll(".th");//获取边栏每个控制按钮
        $td1Top = $('.td').eq(0).offset().top
        $td2Top = $('.td').eq(1).offset().top
        $td3Top = $('.td').eq(2).offset().top
        $td4Top = $('.td').eq(3).offset().top
        $td5Top = $('.td').eq(4).offset().top//获取每个板块距离窗口顶部的距离
    //     window.onscroll=function(){
    //         if(document.documentElement.scrollTop>=(t-100)|| document.body.scrollTop>=(t-100)){
    //             fly.className="fl";
    //         }else{
    //             fly.className="";
    //         }
    //         //遍历每一个边栏按钮让其状态为原始状态
    //         for(var i=0;i<th.length;i++){
    //             th[i].className = th[i].className.replace("active","");
    //         }
    //         //判断当窗口到达一定为位置时候对应的按钮上的属性变化
    //         if(document.documentElement.scrollTop>=td4Top){
    //             th[3].className+=" active";
    //         }else if(document.documentElement.scrollTop>=td3Top){
    //             th[2].className+=" active";
    //         }else if(document.documentElement.scrollTop>=td2Top){
    //             th[1].className+=" active";
    //         }else if(document.documentElement.scrollTop>=td1Top){
    //             th[0].className+=" active";
    //         }
    //     }
        //使用委托
        //当点击每个按钮的时候对应板块的位置变化
        .onclick=function(eve){
            var e=eve || window.event;
            var target=e.target || e.srcElement;
            if(target.getAttribute("index")){
                var i = target.getAttribute("index");
                document.documentElement.scrollTop=getBoundingClientRect(td[i]).top; 
            }
              
        }
    })


}(jQuery))