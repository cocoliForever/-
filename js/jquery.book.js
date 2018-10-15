;(function($){
    

// 封装函数得到相关分类
var relatedPanel=function(related){
    // 创建classWrap
    var $classWrap=$('<div class="classWrap about_filter"></div>')
    // 创建guide_box
    var $guide_box=$('<div class="guide_box guide_con_noLabel clearfix"></div>')
    // 创建导航相关分类
    var $guide_title=$('<div class="guide_title"><span>相关分类</span></div>')
    // 创建guide_main
    // 创建multiple_choice
    var $multiple_choice=$('<div class="multiple_choice"><a href="#">更多<i class="iconfont icon-xiangxia amine"></i></a></div>')
    var $guide_main=$('<div class="guide_main"></div>')
    //创建guide_con
    var $guide_con=$('<ul class="guide_con  clearfix"><ul>')
    // 循环遍历数组related
    $.each(related,function(index,city){
        var $cities=$('<li><a href="#"><span>'+city.name+'</span></a></li>')
        $guide_main.append( $guide_con.append($cities))
    })
    $multiple_choice.appendTo($guide_box)
    $guide_title.appendTo($guide_box);
    $guide_main.appendTo($guide_box);
    $guide_box.appendTo($classWrap);
    return $classWrap
}

// 封装函数得到品牌
var brandPanel=function(brand){
    创建
}


















$.fn.area = function () {

    return this.each(function () {
        $(this).append(relatedPanel(area[0]))
    })
}
}(jQuery))