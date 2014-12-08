$(function() {
	function clock() {
		var date = new Date(),
		hh = date.getHours(),
		mm = date.getUTCMinutes(),
		ss = date.getUTCSeconds(),
		hh = checkTime(hh),
		mm = checkTime(mm),
		ss = checkTime(ss);
		color = timeColor(hh, mm, ss);

		// converts 24H to 12H
    if (hh > 12)
    	hh -= 12;

		var hexClock = hh.toString() +':'+ mm.toString() +':'+ ss.toString();
		// var hexClock = Math.floor(255*(hh/23)).toString(16)+Math.floor(255*(mm/59)).toString(16)+ Math.floor(255*(ss/59)).toString(16);
		$('#h').html(hexClock);
		// $('body').css('background-color', '#'+hexClock);
	}
	// This will add a zero in front of the mm and ss
	function checkTime(i) {
    if (i<10)
    	{i = '0' + i};
    return i;
	}

	//This will properly format hex
	function formatColor(i) {
		if (i.length < 2) {
			i = '0' + i;
		}
		return i;
	}

	// Converts the time to hexidecimal color
	function timeColor(hour, min, sec) {
		red = Math.floor(255*(hour/23)).toString(16);
		green = Math.floor(255*(min/59)).toString(16);
		blue = Math.floor(255*(sec/59)).toString(16);

		red = formatColor(red);
		green = formatColor(green);
		blue = formatColor(blue);

		return (red + green + blue).toUpperCase();
	}

	function bgHexColor(){
		var hexColor = $('#h').text();
		$('body').css('background-color','#'+color);
		$('#hex-color').html(color);
	}

	setInterval(clock, 1000);
	setInterval(bgHexColor, 1000);
});