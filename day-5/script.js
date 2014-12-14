$(function() {
	var arr = [],
			btnText,
			deactivate,
			cheatMsgRight = $('.cheat-message-right'),
			cheat = 'upupdowndownleftrightleftrightbastart';

// Resets the cheat code if it's too long
	function codeReset(array) {
		if (array.length > 11) {
			array.length = 0;
		}
	}

// Function for comparing against cheat code
	function codeConfirmed(array) {
		var newArray = array.join(''),
				codeArea = $('.cheat-code-area');
		if (newArray == cheat) {
			cheatMsgRight.show();
			setInterval(blink, 500);
		} else {
			$('.cheat-message-wrong').show();
		}
	}

	function blink() {
		cheatMsgRight.fadeIn(200).fadeOut(200);
	}

	$('.reload').on('click', function() {
		location.reload();
	});

	$('.up, .down, .left, .right, .select, .start, .b, .a').on('mousedown', function() {
		btnText = $(this).data('button');
		$(this).addClass(btnText+'-activate');
		arr.push(btnText);
		$('.cheat-code-area').text(arr.join(' '));
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		remove = $(this).removeClass(btnText+'-activate');
		deactivate;
	}).on('mouseleave', function() {
		deactivate;
	});

});
