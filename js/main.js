$(document).ready(function () {

  // Cart btn

  $('.openCart').on('click', function () {
    $('.header-mini-cart').addClass('active');
    $('.body').addClass('bg');
  })


  $('#closeCart').on('click', function () {
    $('.header-mini-cart').removeClass('active');
    $('.body').removeClass('bg');
  })


  $('.categorie-btn').on('click',function(){
    $('.categorie-nav').slideToggle('active');
  })

  $('.dropmenu').on('click',function(){
    $('.mobile-submenu').slideToggle('show-nav');
  })


  // Nice Select
  $('select').niceSelect();

  // Mobile nav
  $('.close-btn').on('click',function(){
    $('.menu-side').removeClass('active');
    $('.body').removeClass('bg');
  })

  $('.hambuger-menu').on('click', function () {
    $('.menu-side').addClass('active');
    $('.body').addClass('bg');
  })

  // Mobile cart
  $('.openCartMobile').on('click', function () {
    $('.header-mini-cart-mobile').addClass('active');
    $('.body').addClass('bg');
  })

  $('#closeCartMobile').on('click', function () {
    $('.header-mini-cart-mobile').removeClass('active');
    $('.body').removeClass('bg');
  })

  // Categorie
  $('.categorie-btn-mobile').on('click',function(){
    $('.categorie-nav-mobile').slideToggle('active');
  })
  
  // Hero slide
  $('.hero-slide').owlCarousel({
    items:1,
    loop:true,
    dots:false,
    autoplay:true,
    smartSpeed: 1000,
    autoplaySpeed:1500
  })

  // Categorie slide
  $('.categorie-slide').owlCarousel({
    items:7,
    loop:true,
    dots:false,
    autoplay:true,
    margin:10,
    center:false,
    smartSpeed: 1000,
    autoplaySpeed:1500,
    responsive:{
      0:{
        items:3
      },
      700:{
        items:5
      },
      1000:{
        items:6
      },
      1200:{
        items:7
      }
    }
  });



  $('.onsale-owlcarousel').owlCarousel({
    loop:true,
    dots:false,
    autoplay:false,
    margin:10,
    nav: true,
    center:false,
    navText: ['<i class="icon-chevron-left"></i>','<i class="icon-chevron-right"></i>'],
    responsive:{
      0:{
        items:2
      },
      750:{
        items:3
      },
      900:{
        items:2
      },
      1200:{
        items:3
      }
    }
  });


})