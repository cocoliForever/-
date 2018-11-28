;(function($){
// 封装函数得到相关分类////////////////////////////
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

// 封装函数得到品牌///////////////////////
var brandPanel=function(brands){
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
     // 创建multiple_choice
     var $multiple_choice=$('<div class="multiple_choice  over_mush"><a href="javascript:;" class="over_any">多选</a><a href="#" class="many">更多<i class="iconfont icon-xiangxia amine"></i></a></div>')
    // 添加滚动条jspVerticalBar
    var $jspVerticalBar=$('<div class="jspVerticalBar"></div>')
    var $jspTrack=$('<div class="jspTrack"></div>')
    

    // 循环遍历brand
    $.each(brands,function(index,brad){
        var $content=$('<li data-type="'+brad.zm+'" data-index="'+brad.cold+'"><a href="javascript:;"><span class="sr" >'+brad.press+'</span><span class="sl">'+brad.press+'</span><span class="cl"></span></a></li>')
        
        $jspContainer.append($guide_ul.append($content))
    })
    $jspContainer.appendTo($guide_lists)
    $guide_switch.appendTo($guide_main)
    $guide_lists.appendTo($guide_main)
    
    $jspTrack.appendTo($jspVerticalBar)
    $jspVerticalBar.appendTo($guide_lists)
    $guide_selected.appendTo($guide_main)
    $guide_btn.appendTo($guide_main)
    $multiple_choice.appendTo($brandWrap)
    $guide_title.appendTo($brandWrap)
    $guide_main.appendTo($brandWrap)
   
    return $brandWrap

}
// 封装函数得到热门作家///////////////////////
var searchPanel=function(search){


var $search_guide=$('<div class="search_guide clearfix search_add_border"></div>')

    var hotWriterPanel=function(hotwriters){
        // 创建guide_box
        var $guide_box=$('<div class="guide_box guide_no_margin"></div>')
         // 创建导航热门作家
        var $guide_title=$('<div class="guide_title"><span>热门作家</span></div>')
        // 创建guide_main
        var $guide_main=$('<div class="guide_main add_padding"></div>')
        // 创建guide_con
        var $guide_con=$('<ul class="guide_con clearfix"><ul>')
         // 创建multiple_choice
     var $multiple_choice=$('<div class="multiple_choice  over_mush"><a href="javascript:;" class="over_any">多选</a></div>')
        // 创建guide_btn
        var $guide_btn=$('<div class="clearfix guide_btn"><a href="javascript:;" class="btn_ok un">确定</a><a href="javascript:;" class="btn_cancel">取消</a></div>')
        $.each(hotwriters,function(index,writer){
            var $hot_wr=$('<li><a href="javascript:;"><i class="ali"></i><span class="sp_wid">'+writer.name+'</span></a></li>')
            $guide_con.append($hot_wr)
        })
        $guide_con.appendTo($guide_main)
        $guide_btn.appendTo($guide_main)
        $multiple_choice.appendTo($guide_box)
        $guide_title.appendTo($guide_box)
        $guide_main.appendTo($guide_box)
        return $guide_box
        
    }

    var seriesPanel=function(seriess){
         // 创建guide_box
         var $guide_box=$('<div class="guide_box guide_no_margin"></div>')
           // 创建导航国家及地区
        var $guide_title=$('<div class="guide_title"><span>国家及地区</span></div>')
        // 创建guide_main
        var $guide_main=$('<div class="guide_main"></div>')
         // 创建guide_con
         var $guide_con=$('<ul class="guide_con clearfix"><ul>')
          // 创建multiple_choice
     var $multiple_choice=$('<div class="multiple_choice  over_mush"><a href="javascript:;" class="over_any">多选</a><a href="#" class="many">更多<i class="iconfont icon-xiangxia amine"></i></a></div>')
          // 创建guide_btn
        var $guide_btn=$('<div class="clearfix guide_btn"><a href="javascript:;" class="btn_ok un">确定</a><a href="javascript:;" class="btn_cancel">取消</a></div>')
        // 循环遍历li
        $.each(seriess,function(index,series){
            var $hot_wr=$('<li><a href="javascript:;"><i class="ali"></i><span class="sp_wid">'+series.name+'</span></a></li>')
            $guide_con.append($hot_wr)

        })
        $guide_con.appendTo($guide_main)
        $guide_btn.appendTo($guide_main)
        $multiple_choice.appendTo($guide_box)
        $guide_title.appendTo($guide_box)
        $guide_main.appendTo($guide_box)
        return $guide_box
    }

    var agePanel=function(ages){
         // 创建guide_box
         var $guide_box=$('<div class="guide_box guide_no_margin"></div>')
           // 创建导航年龄
        var $guide_title=$('<div class="guide_title"><span>年龄</span></div>')
        // 创建guide_main
        var $guide_main=$('<div class="guide_main"></div>')
         // 创建guide_con
         var $guide_con=$('<ul class="guide_con clearfix"><ul>')
           // 创建multiple_choice
     var $multiple_choice=$('<div class="multiple_choice  over_mush"><a href="javascript:;" class="over_any">多选</a></div>')
          // 创建guide_btn
        var $guide_btn=$('<div class="clearfix guide_btn"><a href="javascript:;" class="btn_ok un">确定</a><a href="javascript:;" class="btn_cancel">取消</a></div>')
        $.each(ages,function(index,age){
            var $hot_wr=$('<li><a href="javascript:;"><i class="ali"></i><span class="sp_wid">'+age.name+'</span></a></li>')
            $guide_con.append($hot_wr)

        })
        $guide_con.appendTo($guide_main)
        $guide_btn.appendTo($guide_main)
        $multiple_choice.appendTo($guide_box)
        $guide_title.appendTo($guide_box)
        $guide_main.appendTo($guide_box)
        return $guide_box
    }

var litYpePanel=function(litYpes){
    // 创建guide_box
    var $guide_box=$('<div class="guide_box guide_no_margin"></div>')
      // 创建导航年龄
   var $guide_title=$('<div class="guide_title"><span>文学类型</span></div>')
   // 创建guide_main
   var $guide_main=$('<div class="guide_main"></div>')
    // 创建guide_con
    var $guide_con=$('<ul class="guide_con clearfix"><ul>')
     // 创建guide_btn
   var $guide_btn=$('<div class="clearfix guide_btn"><a href="javascript:;" class="btn_ok un">确定</a><a href="javascript:;" class="btn_cancel">取消</a></div>')
    // 创建multiple_choice
    var $multiple_choice=$('<div class="multiple_choice  over_mush"><a href="javascript:;" class="over_any">多选</a><a href="#" class="many">更多<i class="iconfont icon-xiangxia amine"></i></a></div>')
   $.each(litYpes,function(index,litYpe){
       var $hot_wr=$('<li><a href="javascript:;"><i class="ali"></i><span class="sp_wid">'+litYpe.name+'</span></a></li>')
       $guide_con.append($hot_wr)

   })
   $guide_con.appendTo($guide_main)
   $guide_btn.appendTo($guide_main)
   $multiple_choice.appendTo($guide_box)
   $guide_title.appendTo($guide_box)
   $guide_main.appendTo($guide_box)
   return $guide_box
}



    $search_guide.append(hotWriterPanel(area[2])).append(seriesPanel(area[3])).append(agePanel(area[4])).append(litYpePanel(area[5]))
    return $search_guide
}



var about=function(letter){
    var arr = area.ant[letter]
    // var arr=area.ant[by]        
    var $son_m=$('<div class="son_m"></div>')
    var $son_an=$('<div class="som_an"></div>')
      // 创建multiple_choice
      var $multiple_choice=$('<div class="multiple_choice  over_mush"><a href="javascript:;" class="over_any">多选</a></div>')
     // 创建guide_btn
    var $guide_btn=$('<div class="clearfix guide_btn"><a href="javascript:;" class="btn_ok un">确定</a><a href="javascript:;" class="btn_cancel">取消</a></div>')
    // 循环遍历a
    $.each(arr,function(index,let){
        var $scany=$('<a href="javascript:;"><i class="sub"></i><span>'+let.mac+'</span></a>')
        $son_an.append($scany)  
    })
    $multiple_choice.appendTo($son_m)
    $son_an.appendTo($son_m)
    $guide_btn.appendTo($son_m)
    return $son_m
}
var propertyPanel=function(propertys){
    
    var citiesArr = area[6]
     // 创建select_property
    var $select_property=$('<div class="select_property clearfix"></div>')
     // 创建导航更多筛选项
   var $guide_title=$('<div class="guide_title"><span>更多筛选项</span></div>')
   // 创建guide_main
   var $guide_main=$('<div class="guide_main clearfix"></div>')
    // 创建guide_ax
    var $guide_con=$('<ul class="guide_ax clearfix"><ul>')
    // 循环遍历li
    $.each(citiesArr,function(index,property){ 
       
        var $hot_wr=$('<li><span>'+property.cy+'</span><i class=" iconfont icon-xiangxia"></i></li>')
            var sj = about(index);
            $hot_wr.append(sj)
            $guide_con.append($hot_wr)

    })
    $guide_con.appendTo($guide_main)
    $guide_title.appendTo($select_property)
    $guide_main.appendTo($select_property)
    return $select_property
}
 
$.fn.area = function () {

    return this.each(function () {
        $(this).append(relatedPanel(area[0])).append(brandPanel(area[1])).append(searchPanel(area[2],area[3],area[4],area[5])).append(propertyPanel(area))
    })
}
}(jQuery))