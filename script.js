document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const container = document.getElementById('sliderContainer');
    const pageIndicator = document.getElementById('pageNumber');
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index < currentIndex) {
                slide.classList.add('prev');
            }
        });
        pageIndicator.textContent = `${currentIndex + 1} / ${slides.length}`;
    }

    container.addEventListener('click', (e) => {
        // Prevent sliding if clicking links or interactive elements
        if (e.target.closest('a') || e.target.closest('button')) {
            return;
        }

        const rect = container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;

        // Right side click -> Next Slide
        if (clickX > rect.width / 2) {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlides();
            }
        } 
        // Left side click -> Previous Slide
        else {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlides();
            }
        }
    });

    updateSlides();
});
