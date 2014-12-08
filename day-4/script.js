$(function() {
  // $('dd').addClass('hide');
  var $dl = $('dl');
  $('dd').hide();
  $dl.on('mouseenter', 'dt', function() {
    $(this)
      .next()
        .slideDown(200)
        .siblings('dd')
          .slideUp(200);
  });
  $dl.on('mouseout', 'dt', function() {
    $(this).siblings('dd').slideUp(200);
  });
});