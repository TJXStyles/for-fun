$(function() {

	var arr = [],
			// cheat = 'upupdowndownleftrightleftrightbastart';
			cheat = 'upupupupupupupupupupup';

	function codeReset(array) {
		if (array.length > 11) {
			array.length = 0;
		}
	}

	function codeConfirmed(array) {
		var newArray = array.join('');
		if(newArray == cheat) {
			console.log('cheat confirmed');
		}
	}

	$('.d-pad-up').on('mousedown', function() {
		$(this).addClass('btn-activate-up');
		var btnText = $(this).data('button');
		arr.push(btnText);
		console.log(arr);
		if (arr.length === 11) {
			codeConfirmed(arr);
			arr.length = 0;
		}
	});
	$('.d-pad-up').on('mouseup', function() {
		$(this).removeClass('btn-activate-up');
	});

	$('.d-pad-right').on('mousedown', function() {
		$(this).addClass('btn-activate-right');
		arr.push('RIGHT');
		console.log(arr);
	});
	$('.d-pad-right').on('mouseup', function() {
		$(this).removeClass('btn-activate-right');
	});

	$('.d-pad-down').on('mousedown', function() {
		$(this).addClass('btn-activate-down');
		arr.push('DOWN');
		console.log(arr);
	});
	$('.d-pad-down').on('mouseup', function() {
		$(this).removeClass('btn-activate-down');
	});

	$('.d-pad-left').on('mousedown', function() {
		$(this).addClass('btn-activate');
		arr.push('LEFT');
		console.log(arr);
	});
	$('.d-pad-left').on('mouseup', function() {
		$(this).removeClass('btn-activate');
	});

	$('.select-btn').on('mousedown', function() {
		$(this).addClass('ss-activate');
		console.log(arr);
	});
	$('.select-btn, .start-btn').on('mouseup', function() {
		$(this).removeClass('ss-activate');
	});


});