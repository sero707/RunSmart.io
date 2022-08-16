import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();


$(document).ready(function(){
    $('.slider__slider').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/array.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icon/array.png"></button>',
        responsive: [
            {
              breakpoint: 950,
              settings: {
                arrows: false,
                dots: true
              }
            },
        ]
    });
  });