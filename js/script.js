var cur = 0,
    container = document.getElementsByClassName('slider-inner'),
    slide = document.getElementsByClassName('slide'),
    controls = document.getElementsByClassName('controls'),
    prevBtn = document.getElementsByClassName('controls-btn_prev'),
    nextBtn = document.getElementsByClassName('controls-btn_next'),
    slideWidth = slide[cur].offsetWidth;
var numOfSlides = slide.length;
var right = 1;
var left = -1;

for (var i = cur; i < numOfSlides; i++) {
    slide[i].style.setProperty('left', slideWidth * i + 'px');
}

function changeSlide(direction) {
    cur += direction;
    if (cur < 0) cur = numOfSlides - 1;
    if (cur === numOfSlides) cur = 0;

    container[0].style.setProperty('transform', 'translateX(' + (-slideWidth * cur) + 'px');
};

controls[0].addEventListener('click', function(e) {
    e.target == prevBtn[0] && changeSlide(left);
    e.target == nextBtn[0] && changeSlide(right);

});