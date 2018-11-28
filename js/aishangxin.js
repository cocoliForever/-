(function($){
    $(function(){
      // 实现轮播
        var i=0;
        var timer
        function move(){
          if(i>2){
            i=0
          }
          if(i<0){
            i=2
          }
          $("#img1 li").eq(i).css({
            "z-index":"1",
            "display":"block"
          }).siblings().css({
            "z-index":"0",
            "display":"none"
          })
          $("#img1_li li").eq(i).addClass("cur").siblings().removeClass("cur")
        }
        timer=setInterval(function(){
          move(i++)
        },2000)
        $("#slideid").on("mouseover",function(){
          $('.show_next,.show_pre').css("display","block")
          clearInterval(timer)
        })
        $("#slideid").on("mouseout",function(){
          $('.show_next,.show_pre').css("display","none")
          timer=setInterval(function(){
            move(i++)
          },2000)
        }) 
        $(".show_next").on("click",function(){
          clearInterval(timer)
          move(i++)
        })
        $(".show_pre").on("click",function(){
          clearInterval(timer)
          move(i--)
        })
        $("#img1_li").on('mouseover',"li",function(){
          $("#img1 li").eq($(this).index()).css({
            "z-index":"1",
            "display":"block"
          }).siblings().css({
            "z-index":"0",
            "display":"none"
          })
          $(this).addClass("cur").siblings().removeClass("cur")
        })
      // 轮播结束
    })
}(jQuery))