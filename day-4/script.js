(function(){

	$('dd').hide();

	$('dt').on('mouseenter', function(){
		$(this).sibling.slideDown();
	});
})();