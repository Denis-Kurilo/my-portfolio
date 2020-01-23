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

/*  $('.burger-menu__dropdown-link').on('click', function(){
    $('.burger-menu__dropdown').addClass('btt');
  });*/

/*  $('.burger-menu__dropdown-link').on('click', function(){
    $('.burger-menu__dropdown>li').css('display','block');
    $('.burger-menu__dropdown').css('display','none');
  });*/

});