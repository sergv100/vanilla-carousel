var cur = 0,
	container = document.getElementsByClassName('slider-inner'),
	slide = document.getElementsByClassName('slide'),
	controls = document.getElementsByClassName('controls'),
	prevBtn = document.getElementsByClassName('controls-btn_prev'),
	nextBtn = document.getElementsByClassName('controls-btn_next'),
	slideWidth = slide[cur].offsetWidth;
	numOfSlides = slide.length;

for (var i = cur; i < numOfSlides; i++) {
	slide[i].style.setProperty('left', slideWidth * i + 'px');
}

function changeSlide(direction) {
	switch(direction) {
		case 'left':
			cur--;
			if(cur < 0) cur = numOfSlides - 1;
			console.log('left', cur);
			break;

		case 'right':
			cur++;
			if(cur == numOfSlides) cur = 0;
			console.log('right', cur);
			break;
	}
	container[0].style.setProperty('transform', 'translate3d(' + (-slideWidth * cur) + 'px, 0, 0');
};

controls[0].addEventListener('click', function(e) {
	var target = e.target,
		direction = 'right';

	if( target == prevBtn[0] ) {
		
		direction = 'left';
		changeSlide(direction);
	}

	if( target == nextBtn[0] ) {
		
		direction = 'right';
		changeSlide(direction);
	}
});


