$(function() {

	$('button').on('click', function() {
		var rgb1 = Math.floor(Math.random() * 255); 
		var rgb2 = Math.floor(Math.random() * 255);
		var rgb3 = Math.floor(Math.random() * 255);
		$('body').css('background-color','rgb('+rgb1+','+rgb2+','+rgb3+')');
	});
});