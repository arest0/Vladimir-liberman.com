
$(document).ready(function(){
    $('.carousel__inner').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow :'<button type="button" class="slick-prev"><img src="icons/iconmonstr-arrow-64.svg" alt=""></button>',
        nextArrow :'<button type="button" class="slick-next"><img src="icons/iconmonstr-arrow-25.svg" alt=""></button>'
      });
  });

  

  