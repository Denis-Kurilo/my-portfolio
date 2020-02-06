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

    //social
     $('.link-click').on('click', function(e) {
        e.preventDefault();
        $('.social__inner').slideToggle();  
    });

    //burger-menu
    $('.menu__btn').on('click', function(){
       $('.burger-menu').toggleClass('active');    
       $('body').toggleClass('active-hidden');       
    });
    $('.burger-menu__list li a').on('click', function(){
        $('.burger-menu').removeClass('active'); 
        $('body').removeClass('active-hidden'); 
        $('.burger-menu__dropdown').removeClass('active');  
    });
    $(document).mouseup(function (e){
        var div = $(".burger-menu"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
            $('.burger-menu').removeClass('active'),
            $('body').removeClass('active-hidden'); 
            $('.burger-menu__dropdown').removeClass('active');   
        }
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
        speed: 1000,
        prevArrow: '<div class="prev icon-chevron-left"></div>',
        nextArrow: '<div class="next icon-chevron-right"></div>',

        responsive: [
        {
          breakpoint: 1540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
            centerPadding: '200px'
          }
        }
    ]
    });

    //wow.js
    wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       200,          // default
      mobile:       true,       // default
      live:         true
    }
    )
    wow.init();

    //mask-phone
    $("#phone").mask("+8 (999) 999-99-99");
   

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


    $('.works-popup-slider').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    function checkSupport(fn) {
    var html = document.documentElement,
        WebP = new Image();

    WebP.onload = WebP.onerror = function() {
        isSupported = (WebP.height === 2);

        if (isSupported) {
            if (html.className.indexOf('no-webp') >= 0)
                html.className = html.className.replace(/\bno-webp\b/, 'webp');
            else html.className += ' webp';
        }
        fn(isSupported);
    };
    WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
});