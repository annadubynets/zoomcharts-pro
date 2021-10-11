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
        autoplay: false,
        autoHeight: true,
        dots: true,
        dotsContainer: ".features-dots-container",
        nav: true,
        navContainer: ".features-nav-container-desktop",
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
}