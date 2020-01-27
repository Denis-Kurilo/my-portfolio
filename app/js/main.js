$(function(){
//typed 
  var typed = new Typed(".hero-typed-text", {
      strings: [
      "низкие цены.", 
       "самые оптимальные сроки разработки.",
       "чистый код и адаптивная верстка.",
       "2 месяца бесплатной техподдержки."
       ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true
  });

  $('.link-click').on('click', function(e){
    e.preventDefault();
    $('.social__inner').slideToggle();
  });

  //dropdown-menu
  $('.burger-menu__dropdown-link').on('click', function(){
  $('.burger-menu__dropdown').toggleClass('active');
  $('.burger-menu__dropdown-link>a').toggleClass('arrows-rotate');
  });

   //top menu dropdown
  $('.top-navigation__dropdown-link').hover(function(){
  $('.top-navigation__dropdown').slideToggle();
  });

  //popup
  $('.popup-link').magnificPopup({});

  //jquery form style
$('input[type="file"], select').styler({
    // fileBrowse: "Choose File",
    // filePlaceholder: "No File Choosen"
});

(function($) {
  $(window).on("load", function() {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
      scrollSpeed: 1000,
      scrollingEasing: "easeInCubic"
    });
  });
})(jQuery);
/*$("#header a,nav a,a[href='#header'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
      highlightSelector:"nav a"
  });*/

//slick
$('.portfolio-slider__inner').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll:1,
  arrows: true,
  prevArrow: '<div class="prev icon-chevron-left"></div>',
  nextArrow: '<div class="next icon-chevron-right"></div>',
});

});



