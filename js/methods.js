(function ($) {
  $.validator.addMethod('isPassword', function (value, element) {
    var reg = /^\w{5,17}$/
    return this.optional(element) || value.match(reg)

  }, '请输入正确格式的密码')
}(jQuery))