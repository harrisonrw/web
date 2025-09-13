let currentSlideIndex = 0;
let autoSlideInterval;

// Show specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (slides.length === 0) return;
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Wrap around if necessary
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    // Show current slide
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
    }
}

// Auto-advance slides
function nextSlide() {
    currentSlideIndex++;
    const slides = document.querySelectorAll('.carousel-slide');
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    console.log('Moving to slide:', currentSlideIndex);
    showSlide(currentSlideIndex);
}

// Start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000); // 4 seconds
}

// Stop auto-slide
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Carousel initializing...');
    const slides = document.querySelectorAll('.carousel-slide');
    console.log('Found slides:', slides.length);
    
    if (slides.length > 0) {
        // Initialize first slide
        currentSlideIndex = 0;
        showSlide(currentSlideIndex);
        console.log('Initialized with slide:', currentSlideIndex);
        
        // Start auto-advance
        startAutoSlide();
        console.log('Auto-slide started');
        
        // Pause auto-slide on hover
        const carousel = document.querySelector('.hero-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopAutoSlide);
            carousel.addEventListener('mouseleave', startAutoSlide);
            console.log('Hover events added');
        }
    } else {
        console.log('No slides found!');
    }
});