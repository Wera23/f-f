;(function($) {
  $.fn.scrollReveal = function() {
    // get viewport size
    const windowHeight = $(window).height()

    const windowWidth = $(window).width()

    const initialScroll = $(window).scrollTop()

    const items = $('.js-reveal')

    let scroll

    // hide anything not in the viewport
    items.each(function() {
      if ($(this).offset().top >= windowHeight) {
        $(this).addClass('js-reveal--hidden')
      }
    })

    // on scroll
    $(window).scroll(function(event) {
      // get the current scroll position
      scroll = $(window).scrollTop()
      // show anything that is now in view (scroll + windowHeight)
      items.each(function() {
        if ($(this).offset().top <= scroll + windowHeight) {
          $(this).removeClass('js-reveal--hidden')
        }
      })
    })

    return this
  }
})(jQuery)
