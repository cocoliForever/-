$(function () {
  $('.d-swith-nav .d-tab-item ').on('mouseover', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.j-module.type-2-2').eq($(this).index()).addClass('module-jz').siblings().removeClass('module-jz')
  })
})