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
		var newArray = array.join(''),
				codeArea = $('.cheat-code-area');
		if (newArray == cheat) {
			codeArea.hide();
			$('.cheat-message-right').show();
		} else {
			codeArea.hide();
			$('.cheat-message-wrong').show();
		}
	}

	$('.reload').on('click', function() {
		location.reload();
	});

//D-Pad UP
	$('.d-pad-up').on('mousedown', function() {
		$(this).addClass('btn-activate-up');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		$(this).removeClass('btn-activate-up');
	}).on('mouseleave', function() {
		$(this).removeClass('btn-activate-up');
	});

// D-Pad RIGHT
	$('.d-pad-right').on('mousedown', function() {
		$(this).addClass('btn-activate-right');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		$(this).removeClass('btn-activate-right');
	}).on('mouseleave', function() {
		$(this).removeClass('btn-activate-right');
	});

// D-Pad DOWN
	$('.d-pad-down').on('mousedown', function() {
		$(this).addClass('btn-activate-down');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		$(this).removeClass('btn-activate-down');
	}).on('mouseleave', function() {
		$(this).removeClass('btn-activate-down');
	});

//D-Pad LEFT
	$('.d-pad-left').on('mousedown', function() {
		$(this).addClass('btn-activate-left');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		$(this).removeClass('btn-activate-left');
	}).on('mousleave', function() {
		$(this).removeClass('btn-activate-left');
	});

//SELECT/START
	$('.select-btn, .start-btn').on('mousedown', function() {
		$(this).addClass('ss-activate');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		$(this).removeClass('ss-activate');
	}).on('mouseleave', function() {
		$(this).removeClass('ss-activate');
	});

//B-A Buttons
	$('.a-button, .b-button').on('mousedown', function() {
		$(this).addClass('button-pressed');
		var btnText = $(this).data('button');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		$(this).removeClass('button-pressed');
	}).on('mouseleave', function() {
		$(this).removeClass('button-pressed');
	});

});