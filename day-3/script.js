$(function() {
	function clock() {
		var date = new Date(),
		hh = date.getHours(),
		mm = date.getUTCMinutes(),
		ss = date.getUTCSeconds(),
		hh = formatTime(hh),
		mm = formatTime(mm),
		ss = formatTime(ss);
		color = timeColor(hh, mm, ss),
		hexClock = hh+':'+mm+':'+ss;

	// converts 24H to 12H
    if (hh > 12)
    	hh -= 12;
	// var hexClock = Math.floor(255*(hh/23)).toString(16)+Math.floor(255*(mm/59)).toString(16)+ Math.floor(255*(ss/59)).toString(16);
		$('#h').html(hexClock);
	}
	// This will add a zero in front of the hour, minute or second if it's a single digit
	function formatTime(i) {
		if (i<10) {
    	i='0'+i;
    }
    return i;
	}

	//This will properly format hex
	function formatHex(i) {
		if (i.length<2) {
			i='0'+i;
		}
		return i;
	}

	// Converts the time to hexidecimal color
	function timeColor(hour, min, sec) {
		var red = Math.floor(255*(hour/23)).toString(16),
				green = Math.floor(255*(min/59)).toString(16),
				blue = Math.floor(255*(sec/59)).toString(16);

		red = formatHex(red);
		green = formatHex(green);
		blue = formatHex(blue);

		return (red + green + blue).toUpperCase();
	}

	function bgHexColor(){
		var hexColor = $('#h').text();
		$('body').css('background-color','#'+color);
		$('#hex-color').html(color);
	}

	interval = setInterval(function() {
		clock(),
		bgHexColor()
	}, 1000);
});