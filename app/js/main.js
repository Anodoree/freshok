$(function() {

  function blockOpen(a, b) {
    $('.' + a).addClass(a + '--active');
    $('.' + b).addClass(b + '--active');
  };

  function blockClose(a, b) {
    $('.' + a).removeClass(a + '--active');
    $('.' + b).removeClass(b + '--active');
  };


  // mobile menu
  $('.header__burger').on('click', function() {
    $('body').addClass('overflow-mobile');
    blockOpen('mobile', 'mobile__container');
  });

  $('.mobile__close-btn').on('click', function() {
    $('body').removeClass('overflow-mobile');
    blockClose('mobile', 'mobile__container');
  });

  $(document).on('mouseup', function(e) {
    if (!$('.mobile__container').is(e.target) &&
      $('.mobile__container').has(e.target).length === 0 &&
      $('#burger')) {
      $('body').removeClass('overflow-mobile');
      blockClose('mobile', 'mobile__container');
    }
  });


  // cart
  $('#cart-btn').on('click', function() {
    $('body').toggleClass('overflow-hidden');
    $('.cart').toggleClass('cart--active');
    $('.cart__container').toggleClass('cart__container--active');
  });

  $('.cart__close-btn').on('click', function() {
    $('body').removeClass('overflow-hidden');
    blockClose('cart', 'cart__container');
  });

  $(document).on('mouseup', function(e) {
    if (!$('.cart__container').is(e.target) &&
      $('.cart__container').has(e.target).length === 0 &&
      $('#cart-btn')) {
      $('body').removeClass('overflow-hidden');
      blockClose('cart', 'cart__container');
    }
  });


  // search form
  $('#search-btn').on('click', function() {
    $('.header__search-form').addClass('header__search-form--active');
  });

  window.addEventListener('resize', function() {
    if (innerWidth <= 576) {
      $('.search-form__input').attr('placeholder', 'Я ищу...');
    } else {
      $('.search-form__input').attr('placeholder', 'Найти в магазине ...');
    }
  });

  $(document).on('mouseup', function(e) {
    if (!$('.header__search-form').is(e.target) &&
      $('.header__search-form').has(e.target).length === 0 &&
      $('#search-btn')) {
      $('.header__search-form').removeClass('header__search-form--active');
    }
  });


  // catalog-dropdown
  $('.catalog-dropdown__btn').on('click', function() {
    $('.catalog-dropdown__list').toggleClass('catalog-dropdown__list--active');
    $('.catalog-dropdown__btn').toggleClass('catalog-dropdown__btn--active');
  });

  $(document).on('mouseover', function(e) {
    if ($(e.target).closest('.catalog-dropdown__btn').length || $(e.target)
      .closest('.catalog-dropdown__list').length) return; {
      blockClose('catalog-dropdown__btn', 'catalog-dropdown__list');
    }
  });


  // closing all pop-ups by Escape
  $(document).on('keydown', function(event) {
    if (event.code == "Escape") {
      $('body').removeClass('overflow-hidden');
      $('body').removeClass('overflow-mobile');
      $('.header__search-form').removeClass('header__search-form--active');
      blockClose('catalog-dropdown__btn', 'catalog-dropdown__list');
      blockClose('mobile', 'mobile__container');
      blockClose('cart', 'cart__container');
    }
  });


  // sticky header
  var lst = 0;
  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    if (st >= 500) {
      $('.header').addClass('header--fixed');
      blockClose('catalog-dropdown__btn', 'catalog-dropdown__list');
      $('.header__search-form').removeClass('header__search-form--active');
    } else {
      $('.header').removeClass('header--fixed');
    };

    if (st >= 550) {
      $('.header').addClass('header--hidden');
    } else {
      $('.header').removeClass('header--hidden');
    };

    if (st < lst && st >= 800) {
      $('.header').addClass('header--visible');
    } else {
      $('.header').removeClass('header--visible');
    }
    lst = st;
  });


  // product-card input show
  $('.product-card__cart').on('click', function() {
    $(this).closest('.product-card__bottom')
      .find('.product-card__quantity-input')
      .toggleClass('product-card__quantity-input--active');
  });


  // quantity-input
  $('.quantity-input').styler();


  // slider

  // hero slider
  $('.hero__slider').slick({
    prevArrow: '<button class="hero__arrow hero__arrow--prev animation-btn" type="button"><svg width="19" height="32" viewBox="0 0 19 32" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M0.384645 17.0149L16.3979 31.6079C16.9234 32.1307 17.7756 32.1307 18.3011 31.6079C18.8266 31.0851 18.8266 30.2369 18.3011 29.7141L3.25334 16L18.2998 2.2859C18.8252 1.76309 18.8252 0.914839 18.2998 0.392073C17.7743 -0.130695 16.9221 -0.130695 16.3966 0.392072L0.38331 14.9851C0.103241 15.2638 -0.0168347 15.6332 0.00187251 15.9986C-0.0155416 16.3654 0.104495 16.7348 0.384645 17.0149Z" fill="#505050"/></svg></button>',
    nextArrow: '<button class="hero__arrow hero__arrow--next animation-btn" type="button"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.9851L2.29726 0.392105C1.77179 -0.130702 0.919579 -0.130702 0.394105 0.392105C-0.131368 0.914872 -0.131368 1.76312 0.394105 2.28593L15.4419 16L0.395438 29.7141C-0.130036 30.2369 -0.130036 31.0852 0.395438 31.6079C0.920912 32.1307 1.77312 32.1307 2.29855 31.6079L18.3119 17.0149C18.592 16.7362 18.712 16.3668 18.6933 16.0014C18.7107 15.6346 18.5907 15.2652 18.3105 14.9851Z" fill="#505050"/></svg></button>',
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });

  // brand slider
  $('.brand__slider').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    swipeToSlide: true,
    infinite: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 577,
      settings: {
        slidesToShow: 2
      }
    }]
  });


  // mixitup
  var containerEl1 = document.querySelector('[data-ref="top-product-mixitup"]');
  var containerEl2 = document.querySelector('[data-ref="promo-mixitup"]');

  var mixer1 = mixitup(containerEl1, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'mix-filter',
      elementFilter: 'btn',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
  });

  var mixer2 = mixitup(containerEl2, {
    controls: {
      scope: 'local'
    },
    classNames: {
      block: 'mix-filter',
      elementFilter: 'btn',
      delineatorElement: '__',
      delineatorModifier: '--'
    }
  });

});