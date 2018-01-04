// CHANING BACKGROUND COLOR GRADUALLY

var color = 0;

setInterval(function() {
	if(color > 999999){
		return '';
	}
	color+=11111
	document.body.style.backgroundColor = "#" + color;
}, 1000)