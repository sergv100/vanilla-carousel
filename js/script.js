var cur = 0,
    container = document.querySelector('.slider-inner'),
    slide = document.getElementsByClassName('slide'),
    controls = document.getElementsByClassName('controls'),
    prevBtn = document.getElementsByClassName('controls-btn_prev'),
    nextBtn = document.getElementsByClassName('controls-btn_next'),
    slideWidth = slide[cur].offsetWidth;
var numOfSlides = slide.length;
var right = 1;
var left = -1;

[].slice.call(slide).map(function(e, i) { e.style.left = slideWidth * i + 'px' });

function changeSlide(direction) {
    cur += direction;
    container.style.transition = 'transform .5s ease';
    if (cur < 0) {
        resetTransition();
        cur = numOfSlides - 1;
    }
    if (cur === numOfSlides) {
        resetTransition();
        cur = 0;
    }

    function resetTransition() {
        container.style.transition = 'none';
    }

    container.style.setProperty('transform', 'translateX(' + (-slideWidth * cur) + 'px');
};

controls[0].addEventListener('click', function(e) {
    e.target === prevBtn[0] && changeSlide(left);
    e.target === nextBtn[0] && changeSlide(right);

});