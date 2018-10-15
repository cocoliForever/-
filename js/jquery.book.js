;(function($){
    var tabs = [
        'A', 'B', 'C', 'D','E','F', 'G', 'H', 'J','K', 'L', 'M', 'N', 'P','Q', 'R', 'S', 'T', 'W','X', 'Y', 'Z'
      ]

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
    // 创建brandWrap
   var $brandWrap=$('<div class="brandWrap wrap_h clearfix"></div>')
    // 创建导航品牌
    var $guide_title=$('<div class="guide_title"><span>品牌</span></div>')
    // 创建guide_main
    var $guide_main=$('<div class="guide_main add_padding"></div>')
    // 创建guide_switch
    var $guide_switch=$('<div class="clearfix guide_switch">  <span class="other cur">全部品牌</span><span>A</span><span>B</span><span>C</span><span>D</span><span>F</span><span>G</span><span>H</span><span>J</span><span>K</span><span>L</span><span>M</span><span>P</span><span>Q</span><span>R</span><span>S</span><span>T</span><span>W</span><span>X</span><span>Y</span><span>Z</span><span class="other">其他</span><div class="switch_search"><input type="text"><button class="iconfont icon-fangdajing"></button></div></div>')
    // 创建guide_lists 
    var $guide_lists=$('<div class="guide_lists"></div>')
    // 创建jspContainer
    var $jspContainer=$('<div class="jspContainer"></div>')
    // 创建guide_ul 
    var  $guide_ul =$('<ul class="guide_ul guide_ulto clearfix"></div>')
    // 创建guide_selected
    var $guide_selected=$('<div class="clearfix guide_selected"><div class="sel_title">已选:</div></div>')
    // 创建guide_btn
    var $guide_btn=$('<div class="clearfix guide_btn"><a href="javascript:;" class="btn_ok un">确定</a><a href="javascript:;" class="btn_cancel">取消</a></div>')
    

    // 循环遍历brand
    $.each(brand,function(index,brad){
        var $content=$('<li data-type="'+brad.zm+'"><a href="javascript:;"><span class="sr" >'+brad.press+'</span><span class="sl">'+brad.press+'</span><span class="cl"></span></a></li>')
        
        $jspContainer.append($guide_ul.append($content))
    })
    $jspContainer.appendTo($guide_lists)
    $guide_switch.appendTo($guide_main)
    $guide_lists.appendTo($guide_main)
    
    $guide_selected.appendTo($guide_main)
    $guide_btn.appendTo($guide_main)
    $guide_title.appendTo($brandWrap)
    $guide_main.appendTo($brandWrap)
   
    return $brandWrap

}
var hotWriterPanel=function(hotwriter){
        // 创建guide_box
        var $guide_box=$('<div class="guide_box guide_no_margin"></div>')
         // 创建导航品牌
        var $guide_title=$('<div class="guide_title"><span>热门作家</span></div>')
        // 创建guide_main
        var $guide_main=$('<div class="guide_main add_padding"></div>')
        // 创建guide_con
        var $guide_con=$('<ul class="guide_con clearfix"><ul>')
        // 创建guide_btn
        var $guide_btn=$('<div class="clearfix guide_btn"><a href="javascript:;" class="btn_ok un">确定</a><a href="javascript:;" class="btn_cancel">取消</a></div>')
        $.each(hotwriter,function(index,writer){
            var $hot_wr=$('<li><a href="javascript:;"><i class="ali"></i><span class="sp_wid">'+writer.name+'</span></a></li>')
            $guide_con.append($hot_wr)
        })
        $guide_con.appendTo($guide_main)
        $guide_btn.appendTo($guide_main)
        $guide_title.appendTo($guide_box)
        $guide_main.appendTo($guide_box)
        return $guide_box
        
}























$.fn.area = function () {

    return this.each(function () {
        $(this).append(relatedPanel(area[0])).append(brandPanel(area[1])).append(hotWriterPanel(area[2]))
    })
}
}(jQuery))