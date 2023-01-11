'use strict'
let i = 1; //start point
let carouselSlides; //carousel
let slides; //all slides
let transEnded = true;

carouselSlides = document.querySelector("div.slider__container");
slides = document.querySelectorAll("div.slider__slide");

let size = slides[i].clientWidth;

let arrow_left, arrow_right; //all arrows

arrow_left = document.querySelector("button.slider__arrow-left");
arrow_right = document.querySelector("button.slider__arrow-right");

let startPosition = -size * i;
carouselSlides.style.transform = 'translateX(' + startPosition + 'px)';

arrow_left.addEventListener('click', ChangeSlideToLeft);
arrow_right.addEventListener('click', ChangeSlideToRight);

//if used mobile version of site
let startX;
let deltaPos;
let carouselPos;
let oldCarouselPos = startPosition;

carouselSlides.addEventListener('touchstart', s => {
    if(transEnded == false) return;

    startX = s.changedTouches[0].screenX;
});
carouselSlides.addEventListener('touchmove', m => {
    if(transEnded == false) return;

    deltaPos = m.changedTouches[0].screenX - startX;
    carouselPos = oldCarouselPos + deltaPos;

    carouselSlides.style.transition = '';
    carouselSlides.style.transform = 'translateX(' + carouselPos + 'px)';
});
carouselSlides.addEventListener('touchend', () => {
    //carouselPos = 0;
    if(deltaPos > 0) {
        ChangeSlideToLeft();
    } else if(deltaPos < 0) {
        ChangeSlideToRight();
    }
})



//for everything version of slider
carouselSlides.addEventListener('transitionend', () => {
    if(slides[i].id == "slide_first-clone") {
        carouselSlides.style.transition = 'none';
        i = slides.length - 2;
        carouselSlides.style.transform = 'translateX(' + (-size * i) + 'px)';
    } else if (slides[i].id == "slide_last-clone") {
        carouselSlides.style.transition = 'none';
        i = 1;
        carouselSlides.style.transform = 'translateX(' + (-size * i) + 'px)';
    }

    oldCarouselPos = -size * i; //only for mobiles

    transEnded = true;
});

function ChangeSlideToLeft() {
    if(i <= 0 || transEnded == false) return;

    transEnded = false;

    i--;
    carouselSlides.style.transition = 'transform ease-in-out 0.8s';
    carouselSlides.style.transform = 'translateX(' + -size * i + 'px)';
}
function ChangeSlideToRight() {
    if(i >= slides.length - 1  || transEnded == false) return;
    
    transEnded = false;

    carouselSlides.style.transition = 'transform ease-in-out 0.8s';
    i++;
    carouselSlides.style.transform = 'translateX(' + -size * i + 'px)';
}
window.addEventListener('resize', () => {
    size = slides[i].clientWidth;
    carouselSlides.style.transition = 'none';
    carouselSlides.style.transform = 'translateX(' + -size * i + 'px)';
});