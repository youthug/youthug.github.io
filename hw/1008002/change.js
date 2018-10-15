window.onload = function() {
	var images = ['url(./img/01-2.jpg)', 'url(./img/01-3.jpg)', 'url(./img/01-1.jpg)']
	var index = 0;
	setInterval(function() {
		side.style.backgroundImage = images[index++];
		if (index == images.length) index = 0;
	}, 5000);
};