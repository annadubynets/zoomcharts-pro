if ($('.company .owl-carousel').length > 0) {
    $('.company .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        autoWidth: true,
        responsive: {
            0: {
                items: 5,
                stagePadding: 60,
                nav: false
            },
            768: {
                items: 4,
                nav: false
            },
            1200: {
                items: 6,
                nav: true
            }
        }
    })
}

if ($('.features .owl-carousel').length > 0) {
    $('.features .owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        dots: true,
        dotsContainer: ".features-dots-container",
        nav: true,
        responsive: {
            0: {
                items: 1,
                navContainer: ".features-nav-container-mobile"
            },
            1200: {
                items: 1,
                navContainer: ".features-nav-container-desktop"
            }
        }
    })
}

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.go-to-top').fadeIn();
        } else {
            $('.go-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('.go-to-top').click(function() {
        $('body,html').animate({
            scrollTop: $('form.request-visuals-form').offset().top - 150,
        }, 400);
        $('form.request-visuals-form input').focus();
        return false;
    });
});