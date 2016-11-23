var cur = 0,
	slide = document.getElementsByClassName('slide'),
	controls = document.getElementsByClassName('controls'),
	prevBtn = document.getElementsByClassName('controls-btn_prev'),
	nextBtn = document.getElementsByClassName('controls-btn_next'),
	len = slide.length;

	console.log(slideW);

function changeSlide(direction) {
	switch(direction) {
		case 'left':
		console.log('left');

		break;

		case 'right':
		console.log('right');

		break;
	}
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


