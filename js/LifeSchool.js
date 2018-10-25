(function ($) {
  $(function () {
    $('#keyword').on('focus', function () {
      $('.hd_search_history_new').slideDown()
    })
    $('#keyword').on('blur', function () {
      $('.hd_search_history_new').slideUp()
    })
  })

}(jQuery))