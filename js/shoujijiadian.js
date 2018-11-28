(function($){
    // 顶部的轮播
    $(function(){
        var $ul = $('.jImgNodeArea')//获取图片外的div
        var $li1 = $ul.children().eq(0)//找到第一张图片
        var LI_WIDTH = $li1.width()//得到每一张图片li的宽度
        var LI_LENGTH = $ul.children().length//得到父元素下子元素的长度即为子元素的个数为5
        var i = 0
        var timer1,timer2
        if(i==0){
          clearTimeout(timer2)
        timer1 = setTimeout(function () {
            i++;
            changePage (i) 
          }, 2000)
         }
        //  左右来回切换的轮播
        function changePage (i) {
            clearTimeout(timer1)
            clearTimeout(timer2)
            changeProgress (i)
            $ul.stop().animate({
              left: -i * LI_WIDTH
            },1000,function () {
              timer1 = setTimeout(function () {
                 i++
                 changePage (i)
              }, 2000)
              if(i==4){
                clearTimeout(timer1)
                timer2 = setTimeout(function () {
                  i--;
                  changePag(i) 
                }, 2000)
              }
            })
          }
          function changePag (i) {
              clearTimeout(timer1)
              clearTimeout(timer2)
              changeProgress (i)
              $ul.stop().animate({
                left: -i * LI_WIDTH
              },1000, function () {
                timer2 = setTimeout(function () {
                  i--
                  changePag (i)
               }, 2000)
               if(i==0){
                clearTimeout(timer2)
              timer1 = setTimeout(function () {
                  i++;
                  changePage (i) 
                }, 2000)
               }
              })
            }
            // 对应的小点的变化
            function changeProgress (i) {
              $('.jbannerThumbnail span').removeClass('active').eq(i).addClass('active')
            }
            $(".jbannerThumbnail").on('click', 'span', function () {
              var i = $(this).index()
              changePage(i-1)
            })
            // 鼠标放在轮播图片的时候让轮播停止
            





    })












}(jQuery))