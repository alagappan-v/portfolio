// assets/script.js

const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;
const totalSlides = carouselItems.length;

// Function to update the active slide
const updateCarousel = (newIndex) => {
    carouselItems[currentIndex].classList.remove('active'); // Remove active class from current slide
    currentIndex = newIndex; // Update index
    carouselItems[currentIndex].classList.add('active'); // Add active class to the new slide
};

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Go to the previous slide
    updateCarousel(newIndex);
});

nextButton.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % totalSlides; // Go to the next slide
    updateCarousel(newIndex);
});

// Optional Autoplay
setInterval(() => {
    const newIndex = (currentIndex + 1) % totalSlides; // Automatically go to the next slide
    updateCarousel(newIndex);
}, 5000); // 5 seconds
