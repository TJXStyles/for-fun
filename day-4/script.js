$(function(){
  // $('dd').addClass('hide');
  $('dd').hide();
  $('dl').on('mouseenter', 'dt', function() {
    $(this).next().slideDown(200).siblings('dd').slideUp(200);
  });
});