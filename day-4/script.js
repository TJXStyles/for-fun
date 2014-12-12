$(function() {
  var $dl = $('dl');
  $('dd').addClass('hide');
  $dl.on('mouseenter', 'dt', function() {
    $(this)
      .next()
        .removeClass('hide')
        .slideDown(200)
        .siblings('dd')
          .slideUp(200);
  });
  $dl.on('mouseout', 'dt', function() {
    $(this).siblings('dd').slideUp(200);
  });
});