//=================================================================================//
//                                banner-part start
//=================================================================================//
$('#banner').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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

