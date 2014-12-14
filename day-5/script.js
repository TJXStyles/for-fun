$(function() {
	var arr = [],
			cheat = 'upupdowndownleftrightleftrightbastart',
			eventButtons = ["left", "up", "down", "right", "select", "start", "b", "a"];

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
			codeArea.hide();
			$('.cheat-message-right').show();
			setInterval(blink, 500);
		} else {
			codeArea.hide();
			$('.cheat-message-wrong').show();
		}
	}

	function blink() {
		var cheatMsg = $('.cheat-message-right');
		cheatMsg.fadeIn(200);
		cheatMsg.fadeOut(200);
	}

	$('.reload').on('click', function() {
		location.reload();
	});

	$('.up, .down, .left, .right').on('mousedown', function() {
		var btnText = $(this).data('button');
		$(this).addClass(btnText+'-activate');
		arr.push(btnText);
		if (arr.length === 11) {
			codeConfirmed(arr);
		}
	}).on('mouseup', function() {
		var btnText = $(this).data('button');
		$(this).removeClass( btnText+'-activate');
	}).on('mouseleave', function() {
		var btnText = $(this).data('button');
		$(this).removeClass($(this)+'-activate');
	});

/*
***** Button event handlers begin *****
*/
//D-Pad UP
	// $('.up').on('mousedown', function() {
	// 	$(this).addClass('up-activate');
	// 	var btnText = $(this).data('button');
	// 	arr.push(btnText);
	// 	$('.cheat-code-area').text(arr.join(' '));
	// 	if (arr.length === 11) {
	// 		codeConfirmed(arr);
	// 	}
	// }).on('mouseup', function() {
	// 	$(this).removeClass('up-activate');
	// }).on('mouseleave', function() {
	// 	$(this).removeClass('up-activate');
	// });

// D-Pad RIGHT
// 	$('.right').on('mousedown', function() {
// 		$(this).addClass('right-activate');
// 		var btnText = $(this).data('button');
// 		arr.push(btnText);
// 		$('.cheat-code-area').text(arr.join(' '));
// 		if (arr.length === 11) {
// 			codeConfirmed(arr);
// 		}
// 	}).on('mouseup', function() {
// 		$(this).removeClass('right-activate');
// 	}).on('mouseleave', function() {
// 		$(this).removeClass('right-activate');
// 	});

// // D-Pad DOWN
// 	$('.down').on('mousedown', function() {
// 		$(this).addClass('down-activate');
// 		var btnText = $(this).data('button');
// 		arr.push(btnText);
// 		$('.cheat-code-area').text(arr.join(' '));
// 		if (arr.length === 11) {
// 			codeConfirmed(arr);
// 		}
// 	}).on('mouseup', function() {
// 		$(this).removeClass('down-activate');
// 	}).on('mouseleave', function() {
// 		$(this).removeClass('down-activate');
// 	});

// //D-Pad LEFT
// 	$('.left').on('mousedown', function() {
// 		$(this).addClass('left-activate');
// 		var btnText = $(this).data('button');
// 		arr.push(btnText);
// 		$('.cheat-code-area').text(arr.join(' '));
// 		if (arr.length === 11) {
// 			codeConfirmed(arr);
// 		}
// 	}).on('mouseup', function() {
// 		$(this).removeClass('left-activate');
// 	}).on('mouseleave', function() {
// 		$(this).removeClass('left-activate');
// 	});

// //SELECT/START
// 	$('.select, .start').on('mousedown', function() {
// 		$(this).addClass('ss-activate');
// 		var btnText = $(this).data('button');
// 		arr.push(btnText);
// 		$('.cheat-code-area').text(arr.join(' '));
// 		if (arr.length === 11) {
// 			codeConfirmed(arr);
// 		}
// 	}).on('mouseup', function() {
// 		$(this).removeClass('ss-activate');
// 	}).on('mouseleave', function() {
// 		$(this).removeClass('ss-activate');
// 	});

// //B-A Buttons
// 	$('.a, .b').on('mousedown', function() {
// 		$(this).addClass('button-activate');
// 		var btnText = $(this).data('button');
// 		arr.push(btnText);
// 		$('.cheat-code-area').text(arr.join(' '));
// 		if (arr.length === 11) {
// 			codeConfirmed(arr);
// 		}
// 	}).on('mouseup', function() {
// 		$(this).removeClass('button-activate');
// 	}).on('mouseleave', function() {
// 		$(this).removeClass('button-activate');
// 	});

});

// var direction = {
// 	up: {
// 		action: "up",
// 		button: "$('.up')",
// 		activateClass: "d-pad-up-activate"
// 	},
// 	down: {
// 		action: "down",
// 		button: "$('.down')",
// 		activateClass: "d-pad-down-activate"
// 	},
// 	left: {
// 		action: "left",
// 		button: "$('.left')",
// 		activateClass: "d-pad-left-activate"
// 	},
// 	right: {
// 		action: "right",
// 		button: "$('.right')",
// 		activateClass: "d-pad-right-activate"
// 	},
// 	select: {
// 		action: "select",
// 		button: "$('.select')",
// 		activateClass: "ss-activate"
// },
// 	start: {
// 		action: "start",
// 		button: "$('.start')",
// 		activateClass: "ss-activate"
// },
// 	b: {
// 		action: "b",
// 		button: "$('.b')",
// 		activateClass: "button-pressed"
// 	},
// 		a: {
// 		action: "a",
// 		button: "$('.a')",
// 		activateClass: "button-pressed"
// 	}
// }