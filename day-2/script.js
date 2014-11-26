$(function() {
	$('button').on('click', function() {
		var randomColor = function() {
			return Math.floor(Math.random() * 255);
		};
		$('body').css('background-color','rgb('+randomColor()+','+randomColor()+','+randomColor()+')');
	});
});