$(function() {
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

    //burger-menu
    $('.menu__btn').on('click', function(){
       $('.burger-menu').toggleClass('active');    
       $('body').toggleClass('active-hidden');       
    });
    $('.burger-menu__list li a').on('click', function(){
        $('.burger-menu').removeClass('active'); 
        $('body').removeClass('active-hidden');       
    });
    $(document).mouseup(function (e){
        var div = $(".burger-menu"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
            $('.burger-menu').removeClass('active'),
            $('body').removeClass('active-hidden');    

        }
    });

    $('.link-click').on('click', function(e) {
        e.preventDefault();
        $('.social__inner').slideToggle();
    });

    //dropdown-menu
    $('.burger-menu__dropdown-link').on('click', function() {
        $('.burger-menu__dropdown').toggleClass('active');
        $('.burger-menu__dropdown-link>a').toggleClass('arrows-rotate');
    });

    //top menu dropdown
    $('.top-navigation__dropdown-link').hover(function() {
        $('.top-navigation__dropdown').slideToggle();
    });

    //popup
    $('.popup-link').magnificPopup({});

    //jquery form style
    $('input[type="file"], select').styler({
        // fileBrowse: "Choose File",
        // filePlaceholder: "No File Choosen"
    });

    //slick
    $('#portfolio-slider__inner').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="prev icon-chevron-left"></div>',
        nextArrow: '<div class="next icon-chevron-right"></div>'
    });

    //wow.js
    wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       200,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

    //scroll
    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
    $(window).scroll(function(){
        if ($(window).scrollTop() > 250) {
            $("#arrow-top").addClass('active');
        }else{
            $("#arrow-top").removeClass('active');
        }
    });


});