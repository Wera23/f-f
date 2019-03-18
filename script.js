$(document).ready(function() {
  // scrollowanie na następny background-image
  $('a[href^="#"]').on('click', function(event) {
    const target = $($(this).attr('href'))

    if (target.length) {
      event.preventDefault()
      $('html, body').animate(
        {
          scrollTop: target.offset().top
        },
        1000
      )
    }
  })
})

/*

$(document).ready(function() {
  let interval = 500
  $('.element-delay').each(function(index) {
    $(this)
      .delay(interval)
      .fadeIn(500)
    interval += 500
  })
}) */

/*

$(document).ready(function() {
  let interval = 600
  $('span').each(function(index) {
    $(this)
      .delay(interval)
      .fadeIn(600)
    interval += 600
  })
})
*/
