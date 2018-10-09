(function($){
  $(function(){
    // console.log($)
    // 顶部 帮助中心
    $('.help_wrap').on('mouseover',function(){
      $('.hd_menu_list').css('display','block')
    })
    $('.hd_menu_list').on('mouseleave',function(){
      $(this).css('display','none')
    })

  
      // 用户名注册     当用户名输入框聚焦的时候
    $('.ysame_input').eq(0).focus(function(){
      $(this).parent().removeClass('ipt_wrong').parent().addClass('ifocus')
      $(this).next().stop().animate({
        'left':-62
      })
      $(this).parent().next().stop().animate({
        'top':-4,
        'opacity':1
      }).next().css('display','none').prev().children(0).css('backgroundColor','rgb(228, 228, 228)').children(0).css('border-right-color','rgb(228, 228, 228)').next().html('4-20位字符，可由中文、英文、数字或符号“_”组成')

    })
    // 当用户名输入框失焦的时候
    $('.ysame_input').eq(0).blur(function(){
      // 判断用户名的正则表达式
      var regYH = /^[\u4e00-\u9fa50-9a-zA-Z_]{4,20}$/;
      // 获得用户所输入的用户名
      var yongHuMing = $(this).val()
      // 判断用户输入的用户名是否符合条件
      var rYH = yongHuMing.match(regYH)
      // 如果   用户输入的用户名不符合条件的话
      if(rYH == null){
        $(this).parent().addClass('ipt_wrong').next().stop().animate({
          'top':-4
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('请输入正确的用户名，用户名应为4-20位字符')
      }else{    
        // 如果用户输入的用户名符合条件
        $(this).parent().parent().removeClass('ifocus').children('.y_regist_tips').stop().animate({
          'opacity':0
        }).next().css('display','block')
      }

      // 当用户名输入框为空的时候
      if($(this).val() == ''){
        $(this).parent().addClass('ipt_wrong').next().stop().animate({
          'top':6
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('用户名不能为空')
      }
    })
    


    // 手机号     当手机号输入框聚焦的时候
    $('.ysame_input').eq(1).focus(function(){
      $(this).parent().removeClass('ipt_wrong').parent().addClass('ifocus')
      $(this).next().stop().animate({
        'left':-62
      })
      $(this).parent().next().stop().animate({
        'top':-4,
        'opacity':1
      }).next().css('display','none').prev().children(0).css('backgroundColor','rgb(228, 228, 228)').children(0).css('border-right-color','rgb(228, 228, 228)').next().html('请填写正确的手机号码，以便 接收订单通知，找回密码等')

    })
    // 当手机号输入框失焦的时候
    $('.ysame_input').eq(1).blur(function(){
      // 判断手机号的正则表达式
      var regSJ = /^1[34578]\d{9}$/; 
      // 获得用户所输入的手机号
      var shouJiHao = $(this).val()
      // 判断用户输入的手机号是否符合条件
      var rSJ = shouJiHao.match(regSJ)
      // 如果   用户输入的手机号不符合条件的话
      if(rSJ == null){
        $(this).parent().addClass('ipt_wrong').next().stop().animate({
          'top':-4
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('格式错误，请输入正确的手机号码')
        $('.same_code_btn').css({
          'background-color':'#57565f',
          'color':'#fff'
        })
      }else{    
        // 如果用户输入的手机号符合条件
        $(this).parent().parent().removeClass('ifocus').children('.y_regist_tips').stop().animate({
          'opacity':0
        }).next().css('display','block')
        $('.same_code_btn').css({
          'background-color':'#f3f3f3',
          'color':'#666'
        })
      }
    })


    // 短信验证码     当短信验证码输入框聚焦的时候
    $('.ysame_input').eq(3).focus(function(){
      $(this).parent().removeClass('ipt_wrong').parent().addClass('ifocus')
      $(this).next().stop().animate({
        'left':-90
      })
      $(this).parent().next().next().stop().animate({
        // 'top':-4,
        'opacity':1
      }).children(0).css('backgroundColor','rgb(228, 228, 228)').children(0).css('border-right-color','rgb(228, 228, 228)').next().html()

    })
    // 当短信验证码输入框失焦的时候
    $('.ysame_input').eq(3).blur(function(){
      // 判断手机号的正则表达式
      var regDX = /^\d{6}$/;
      // 获得用户所输入的手机号
      var duanXinYan = $(this).val()
      // 判断用户输入的手机号是否符合条件
      var rDX = duanXinYan.match(regDX)
      // 如果   用户输入的手机号不符合条件的话
      if(rDX != null){
        // $(this).parent().addClass('ipt_wrong').next().stop().animate({
        //   'top':-4
        // }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('格式错误，请输入正确的手机号码')
      // }else{    
        // 如果用户输入的手机号符合条件
        $(this).parent().parent().removeClass('ifocus').children('.y_regist_tips').stop().animate({
          'opacity':0
        })
      }
    })




    // 密码     当密码输入框聚焦的时候
    $('.ysame_input').eq(4).focus(function(){
      $(this).parent().removeClass('ipt_wrong').parent().addClass('ifocus')
      $(this).next().stop().animate({
        'left':-76
      })
      $(this).parent().next().stop().css({
        'top':-4,
        'opacity':1
      }).next().css('display','none').next().css('display','none').next().css('display','none').prev().prev().prev().children(0).css('backgroundColor','rgb(228, 228, 228)').children(0).css('border-right-color','rgb(228, 228, 228)').next().html('6-20个大小写英文字母、符号或数字的组合')

    })
    // 当密码输入框失焦的时候
    var miMa,flag = false;
    $('.ysame_input').eq(4).blur(function(){
      // 判断密码的正则表达式
      var regMM = /^[\x21-\x7E]{6,20}$/; 
      // 获得用户所输入的密码
      miMa = $(this).val()
      // 判断用户输入的密码是否符合条件
      var rMM = miMa.match(regMM)
      // 数字
      var rMM2 = miMa.match(/^[0-9]*$/);
      // 字母
      var rMM3 = miMa.match(/^[A-Za-z]+$/);
      // 字符
      var rMM4 = miMa.match(/^[^\w\s]+$/);
      // 如果   用户输入的密码不符合条件的话
      if(rMM == null){
        $(this).parent().addClass('ipt_wrong').next().stop().css({
          'top':6
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('密码应为6-20位字符')
      }else if(rMM2 != null){
        $(this).parent().addClass('ipt_wrong').next().stop().css({
          'top':6
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('密码不能全为数字')
      }else if(rMM3 != null){
        $(this).parent().addClass('ipt_wrong').next().stop().css({
          'top':6
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('密码不能全为字母')
      }else if(rMM4 != null){
        $(this).parent().addClass('ipt_wrong').next().stop().css({
          'top':6
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('密码不能全为字符')
      }else{    
        // 如果用户输入的密码符合条件
        $(this).parent().parent().removeClass('ifocus').children('.y_regist_tips').stop().css({
          'opacity':0
        })
        // var miMaLength = miMa.length
        if(miMa.length >=6 && miMa.length <=10){
          $(this).parents().parent().children('.strength_l').css('display','block')
        }else if(miMa.length >10 && miMa.length <=15){
          $(this).parents().parent().children('.strength_m').css('display','block')
        }else{
          $(this).parents().parent().children('.strength_m').css('display','none').next('.strength_h').css('display','block')
        } 
        flag = true;
      }

      // 当密码输入框为空的时候
      if($(this).val() == ''){
        $(this).parent().addClass('ipt_wrong').next().stop().animate({
          'top':6
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('密码不能为空')
      }
    })




    // 确认密码
    $('.ysame_input').eq(5).focus(function(){
      $(this).parent().removeClass('ipt_wrong').parent().addClass('ifocus')
      $(this).next().stop().animate({
        'left':-76
      })
      $(this).parent().next().stop().animate({
        'top':6,
        'opacity':1
      }).next().css('display','none').prev().children(0).css('backgroundColor','rgb(228, 228, 228)').children(0).css('border-right-color','rgb(228, 228, 228)').next().html('请再次输入密码')

      if(flag == false){
        $('.y_same_item').eq(4).addClass('ipt_wrong').next().stop().animate({
          'top':6,
          'opacity':1
        }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('密码不能为空')
        
      }
    })

    $('.ysame_input').eq(5).blur(function(){
      if(flag == true){
        var qyeRenMm = $(this).val()
        if(qyeRenMm === miMa){
          $(this).parent().parent().removeClass('ifocus').children('.y_regist_tips').stop().animate({
            'opacity':0
          }).next().css('display','block')
        }else{
          $(this).parent().addClass('ipt_wrong').next().stop().animate({
            'top':6
          }).children(0).css('backgroundColor','rgb(255, 244, 215)').children(0).css('border-right-color','rgb(255, 244, 215)').next().html('两次密码输入不一致')
        }
      }
    })


  })
})(jQuery)