var cur = 0;
var container = document.querySelector('.slider-inner'),
    prevBtn = document.querySelector('.controls-btn_prev'),
    nextBtn = document.querySelector('.controls-btn_next'),
    controls = document.querySelector('.controls'),
    slide = document.querySelectorAll('.slide');
// Using query selector to get rid of ugly array indexes :3

var slideWidth = slide[cur].offsetWidth;
var numOfSlides = slide.length;

var right = 1;
var left = -1;
// Now we have directions as not string literals but numeric values.

[].slice.call(slide).map(function(element, index) {
    element.style.left = slideWidth * index + 'px'
});
// We create a virtual `array` object which we map through and change 
// the position of slider elements.

function changeSlide(direction) {
    cur += direction;
    // As our direction argument receives a numeric value we get rid
    // of the `switch` cases by just adding or subtracting from `cur` value.

    container.style.transition = 'transform .5s ease';
    // Defaulting transition behaviour.

    if (cur < 0) {
        resetTransition();
        cur = numOfSlides - 1;
    }

    if (cur === numOfSlides) {
        resetTransition();
        cur = 0;
    }

    function resetTransition() {
        // As our divs are chained we need to hide the left-to-right
        // and right-to-left pulls.
        container.style.transition = 'none';
    }

    container.style.transform = 'translateX(' + (-slideWidth * cur) + 'px';
};

controls.addEventListener('click', function(e) {
    // We do not need any other variables or logic here.

    e.target === prevBtn && changeSlide(left);
    e.target === nextBtn && changeSlide(right);

});