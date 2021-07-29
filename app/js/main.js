$(function(){

  $('.dropdown__btn').on('click', function() {
    $('.dropdown__list').toggleClass('dropdown__list--active');
    $('.dropdown__btn').toggleClass('dropdown__btn--active');
  });

});