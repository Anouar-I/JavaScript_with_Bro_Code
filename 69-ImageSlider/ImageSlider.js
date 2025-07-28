// IMAGE SLIDER


// setting up what we need 

const slides = document.querySelectorAll(".Slides img");
let slideIndex = 0;
let intervalId = null;

// calling the function

// we can call it directly intializeSlider()
// or add and eventlistener to wait for the DOM to load 

document.addEventListener("DOMContentLoaded", intializeSlider());

// the functions 
function intializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}