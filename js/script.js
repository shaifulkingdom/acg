//=================================================================================//
//                                banner-part start
//=================================================================================//
$('#banner .container').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
});
//=================================================================================//
//                                banner-part end
//=================================================================================//

//=================================================================================//
//                                menu-part start
//=================================================================================//

$('.navbar-nav .nav-item').click(function () {
    $('.navbar-nav .nav-item.active').removeClass('active');
    $(this).addClass('active');
})

//=================================================================================//
//                                menu-part end
//=================================================================================//

//=================================================================================//
//                                book-part start
//=================================================================================//
$('#book .book .item').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplayspeed: 1500,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    fade: false,
    responsive: [{
            breakpoint: 991.98,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }

        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
//=================================================================================//
//                                book-part end
//=================================================================================//