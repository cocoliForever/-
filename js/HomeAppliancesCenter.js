(function($){
    $(function(){
        var $ul = $('.jBanner')
        var $li1 = $ul.children().eq(0)
        //克隆第一个，为了无缝轮播
        $ul.append($li1.clone())
        //获取对应的属性
        var LI_WIDTH = $li1.width()
        var LI_LENGTH = $ul.children().length
        console.log(LI_WIDTH)
        $ul.width(LI_WIDTH * LI_LENGTH)
        $('.jBanner li').width(100 / LI_LENGTH + '%')
        //声明一个变量一会存索引值
        var index=0;
        $('.slide_prev').on('click', function () {
            if (index === 0) {
              index = LI_LENGTH - 1
              $ul.css('left', -index * LI_WIDTH)
            }
            index--
            changePage(index)
          })
          $('.slide_next').on('click', function () {
            if (index === LI_LENGTH - 1) {
              index = 0
              $ul.css('left', 0)
            }
      
            index++ 
            changePage(index)
          })

          $(".jbannerThumbnail").on('click', 'span', function () {
            var i = $(this).index()
            index = i
            changePage(i)
          })
      
          timer = setTimeout(function () {
            $('.slide_next').click()
          }, 3000)
      
          function changePage (i) {
            clearTimeout(timer)
            changeProgress(i)
            $ul.stop().animate({
              left: -i * LI_WIDTH
            }, function () {
              timer = setTimeout(function () {
                $('.slide_next').click()
              }, 3000)
            })
          }
      
          function changeProgress (i) {
            if (i === LI_LENGTH - 1) {
              i = 0
            }
            $('.jbannerThumbnail span').removeClass('show').eq(i).addClass('show')
          }
    })
}(jQuery))