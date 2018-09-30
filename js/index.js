//导航头送货地址
(function(){
  $(function(){
    console.log($('.hd_city_input i'))
    $('.hd_city_input input').on('keyup',function(){
      $('.hd_city_input i').css("display","block");
      $('.hd_city_serch .hd_city_close').css('display','none');
      if($('.hd_city_input input').val()){
        $('.hd_city_input i').css('display','none');
        $('.hd_city_serch .hd_city_close').css('display','block');
      }
    })
  })
})()