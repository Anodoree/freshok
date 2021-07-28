$(function(){

  $('.catalog__btn').on('click', function() {
    $('.catalog__list').toggleClass('catalog__list--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

});