$(function () {
    $('.slider-inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: '<button id="prev" type="button" class="prev"></button>',
        nextArrow: '<button id="next" type="button" class="next"></button>'
      });
    $('.slider-reviews-inner').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      prevArrow: '<button id="prev" type="button" class="prev"></button>',
      nextArrow: '<button id="next" type="button" class="next"></button>'
    });
});