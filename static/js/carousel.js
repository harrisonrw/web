let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
let autoSlideInterval;

// Show specific slide
function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Wrap around if necessary
    if (n >= slides.length) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = slides.length - 1;
    
    // Show current slide
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Change slide by direction (1 or -1)
function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
    restartAutoSlide();
}

// Go to specific slide (1-based index for buttons)
function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
    restartAutoSlide();
}

// Auto-advance slides
function autoSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000); // 5 seconds
}

// Restart auto-slide (clear and start again)
function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
        
        // Pause auto-slide on hover
        const carousel = document.querySelector('.hero-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                startAutoSlide();
            });
        }
    }
});