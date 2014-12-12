$(function() {
	var arr = [],
			cheat = 'upupdowndownleftrightleftrightbastart',
			cheatMessage = '';

 	// Resets the cheat code if it's too long
	function codeReset(array) {
		if (array.length > 11) {
			array.length = 0;
		}
	}

	function displayCode(array) {
	}

	// Function for comparing against cheat code
	function codeConfirmed(array) {
		var newArray = array.join('');
		if (newArray == cheat) {
			$('.cheat-code-area').hide();
			$('.cheat-message-right').show();
		} else {
			$('.cheat-code-area').hide();
			$('.cheat-message-wrong').show();
		}
	}

	$('.reload').on('click', function() {
		location.reload();
	});

	$('.d-pad-up').on('mousedown', function() {
		$(this).addClass('btn-activate-up');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	});
	$('.d-pad-up').on('mouseup', function() {
		$(this).removeClass('btn-activate-up');
	});


	$('.d-pad-right').on('mousedown', function() {
		$(this).addClass('btn-activate-right');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	});
	$('.d-pad-right').on('mouseup', function() {
		$(this).removeClass('btn-activate-right');
	});

	$('.d-pad-down').on('mousedown', function() {
		$(this).addClass('btn-activate-down');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	});
	$('.d-pad-down').on('mouseup', function() {
		$(this).removeClass('btn-activate-down');
	});

	$('.d-pad-left').on('mousedown', function() {
		$(this).addClass('btn-activate-left');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	});
	$('.d-pad-left').on('mouseup', function() {
		$(this).removeClass('btn-activate-left');
	});

	$('.select-btn, .start-btn').on('mousedown', function() {
		$(this).addClass('ss-activate');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	});
	$('.select-btn, .start-btn').on('mouseup', function() {
		$(this).removeClass('ss-activate');
	});

	$('.a-button, .b-button').on('mousedown', function() {
		$(this).addClass('button-pressed');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	});

	$('.a-button, .b-button').on('mouseup', function() {
		$(this).removeClass('button-pressed');
	});


});