import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();


$(document).ready(function(){
    $('.slider__slider').slick({
        speed: 500,
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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toogleSlide(item){
      $(item).each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    }
    toogleSlide('.catalog-item_moree');
    toogleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_catalog-item').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__description').text($('.catalog-item_title').eq(i).text());
        $('#order .order-form').val($('.catalog-item_title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    $('#call-back-forma').validate({
      rules: {
        name:{
          required: true,
          minlength: 2
        },
        telephone: "required",
        email:{
          required: true,
          email: true
        }
      },
      messages:{
        name: "Введите ваше имя",
        telephone: "Введите телефон",
        email:{
          required: "Введите свой почтовый адрес",
          email: "Неправильно введён адрес"
        }
      }
    });
    $('#consultation-form').validate({
      rules: {
        name:{
          required: true,
          minlength: 2
        },
        telephone: "required",
        email:{
          required: true,
          email: true
        }
      },
      messages:{
        name: "Введите ваше имя",
        telephone: "Введите телефон",
        email:{
          required: "Введите свой почтовый адрес",
          email: "Неправильно введён адрес"
        }
      }
    });
    $('#order-form').validate({
      rules: {
        name:{
          required: true,
          minlength: 2
        },
        telephone: "required",
        email:{
          required: true,
          email: true
        }
      },
      messages:{
        name: "Введите ваше имя",
        telephone: "Введите телефон",
        email:{
          required: "Введите свой почтовый адрес",
          email: "Неправильно введён адрес"
        }
      }
    });

    $('input[name=telephone]').mask("+375 (99) 999-99-99");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "files/mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
      });
      return false;
    });






    $(window).scroll(function(){
      if($(this).scrollTop() > 1600){
        $('.arrow-up').fadeIn('slow');
      } else {
        $('.arrow-up').fadeOut();
      }
    });

    $("a[href=#up]").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  });
  