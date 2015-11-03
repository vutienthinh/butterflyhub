
var Site = (function($, window, undefined) {

  $('.btn-menu-m').click(function(){
    $('.btn-menu-m').hide();
    $('.btn-close-m').show();
    $('.menu-wrapper-m').fadeIn();
    return false;
  });

  $('.btn-close-m').click(function(){
    $('.btn-menu-m').show();
    $('.btn-close-m').hide();
    $('.menu-wrapper-m').fadeOut();
    return false;
  });


  $('[data-slider-1]').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    autoplay: true,
    infinite: true,
    arrows: false
  });

})(jQuery, window);
