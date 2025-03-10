$(document).ready(function () {
  $(".body-wrapper").fadeIn(2000);

  $(window).on("scroll resize", function () {
    startScroll();
  });

  function startScroll() {
    if ($(window).scrollTop() > 0) {
      $(".back-to-top").addClass("active");
    } else {
      $(".back-to-top").removeClass("active");
    }
  }

  $(".back-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  $("body").on("click", ".about-section__video-pause", function () {
    var $this = $(this);
    $this
      .addClass("about-section__video-play")
      .removeClass("about-section__video-pause");
    $("#video").get(0).pause();
  });

  $("body").on("click", ".about-section__video-play", function () {
    var $this = $(this);
    $this
      .addClass("about-section__video-pause")
      .removeClass("about-section__video-play");
    $("#video").get(0).play();
  });

  $(".close").on("click", function () {
    if ($(window).width() < 767) {
      $("body").css("overflow", "visible");
      $(".header").toggleClass("active");
    }
  });

  $(".header__hamburger-div").on("click", function () {
    if ($(window).width() < 767) {
      $("body").css("overflow", "hidden");
      $(".header").toggleClass("active");
    }
  });
});
