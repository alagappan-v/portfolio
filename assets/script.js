// assets/script.js

const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

// Function to update the carousel position
const updateCarousel = () => {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}vw)`;
};

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) % 3; // Replace 3 with the number of slides
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 3; // Replace 3 with the number of slides
    updateCarousel();
});

// Optional Autoplay
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3; // Replace 3 with the number of slides
    updateCarousel();
}, 5000); // 5 seconds
