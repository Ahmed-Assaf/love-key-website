$(function () {
  /* WOW.js */
  new WOW().init();

  // START NAV BAR TOGGLER
  if ($(window).outerWidth() <= 1199) {
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").toggleClass("show");
      $(".nav-overlay").toggleClass("show");
    });

    $(".nav-overlay").click(function () {
      $(".navbar-collapse").removeClass("show");
      $(this).removeClass("show");
    });
  }
});
