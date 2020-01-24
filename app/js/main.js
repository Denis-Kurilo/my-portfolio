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

});