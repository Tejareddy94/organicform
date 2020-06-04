(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })

    $(document).ready(function () {
        // lightcase 
        $('a[data-rel^=lightcase]').lightcase();

        // search cart option
        $(document).on('click', '.cart-option', function () {
            $(".cart-option").toggleClass("open");
        });
        // Header Section Menu Part
        $("ul li ul").parent("li").addClass("menu-item-has-children");
        $(".shop-menu>li .shop-submenu").parent("li").children("a").addClass("dd-icon-down");

        // drop down menu width overflow problem fix
        $('ul').parent().on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({ left: newpos });
            }
        });

        // mobile menu responsive
        $(document).on('click', '.header-bar', function () {
            $(".header-bar").toggleClass("close");
            $(".mobile-menu").toggleClass("open");
        });
        //menu options
        var fixed_top = $(".header-area, .mobile-header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                fixed_top.addClass("animated fadeInDown menu-fixed");
            }
            else {
                fixed_top.removeClass("animated fadeInDown menu-fixed");
            }
        });

        // scroll up start here
        $(function () {
            //Check to see if the window is top if not then display button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({ 'bottom': '2%', 'opacity': '1', 'transition': 'all .5s ease' });
                } else {
                    $('.scrollToTop').css({ 'bottom': '-30%', 'opacity': '0', 'transition': 'all .5s ease' })
                }
            });
            //Click event to scroll to top
            $('.scrollToTop').on('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 500);
                return false;
            });
        });

        // Banner slider
        var swiper = new Swiper('.banner-slider', {
            slidesPerView: 1,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.banner-pagination',
                clickable: true,
            },
            loop: true,
        });

        // Testimonial Slider
        var swiper = new Swiper('.testi-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                420: {
                    slidesPerView: 1,
                },
            },
            loop: true,
        });
        var swiper = new Swiper('.testi-slider-2', {
            slidesPerView: 1,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testi-slider-next',
                prevEl: '.testi-slider-prev',
            },
            pagination: {
                el: '.testi-pagination',
                clickable: true,
            },
            loop: true,
        });

        // sponsor slider
        var swiper = new Swiper('.sponsor-slider', {
            slidesPerView: 5,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                },
                420: {
                    slidesPerView: 1,
                },
            },
            loop: true,
        });


    });
}(jQuery));

