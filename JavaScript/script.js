$(window).on('scroll', function () {
  if ($(window).scrollTop() > 600) {
      $('#header').addClass('colored');
      
  } else {
      $("#header").removeClass('colored');
  }
})