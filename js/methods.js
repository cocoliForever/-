(function ($) {
  $.validator.addMethod('isPassword', function (value, element) {
    var reg = /^[\x21-\x7E]{6,20}$/
    return this.optional(element) || value.match(reg)

  }, '请输入正确格式的密码')
}(jQuery))