//This will only run if Javascript is enabled

$(function () {
 
  $('.js-disabled-warning').text('');

  $('.fly').css('opacity', '0');
  $('.fly').css('transform', 'scale(0)');
  $('.fly').css('transform', 'translate3d(+500px,0,0)');

  $('.fly').bind('inview', function (event, visible) {
    if (visible) {
    	$(this).addClass('in');
    } 
  });

  $('img').magnificPopup({type:'image'});

});
