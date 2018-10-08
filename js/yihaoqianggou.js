$(function(){
    $(".product_list li").on('mouseenter',function(){
         $(this).find('.bottom-detail').stop().animate({top:"-45"},500);
        //  console.log($(this).parents(".inner").find('.btn'))
         $(this).find(".btn").animate({height:"40"},100);
         $(this).find("img").animate({width:"102%",
            height:'102%',
            margintop:'-1%',
            marginleft:'-1%'})
    }).on('mouseleave',function(){
        $(this).find('.bottom-detail').stop().animate({top:"0"},500);
        $(this).find(".btn").animate({height:"0"},100);
        $(this).find("img").animate({width:"100%",
        height:'100%',})
    })
    //浮出加入购物车
    //获取元素想对于文档左上角的距离的函数
function getOffsetPosition(dom){
    var left=0,t=0;
    while(dom.offsetParent){
        t += dom.offsetTop;
        left += dom.offsetLeft;
        dom = dom.offsetParent;
    }
    var o = {left:left,top:t};
    return o;
}
 //当body或HTML被卷起的值大于或等于该元素相对于文档左上角的高度值时seckill_header固定定位
 document.documentElement=document.body.onscroll=function(){
    var seckill_container=document.getElementsByClassName("seckill_container")[0]
    var t=getOffsetPosition(seckill_container).top;
    var seckill_header=document.getElementsByClassName("seckill_header")[0]
    // console.log(t)
    var yihaoqianggou=document.getElementsByClassName("yihaoqianggou")[0]
    console.log(t)
    if(document.documentElement.scrollTop >= t){
        seckill_header.className="seckill_header fixed";
        yihaoqianggou.style.display="block";
    }else{
        console.log(1)
        seckill_header.className="seckill_header";
        yihaoqianggou.style.display="none";
    }
}

})

