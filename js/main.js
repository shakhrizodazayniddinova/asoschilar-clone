// modal
const openBtn = document.querySelector('.open-modal-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-modal-btn');
const form = document.getElementById('contact-form');

// open modal function
form.addEventListener("submit", (e) => {
    if(form.checkValidity()){
        e.preventDefault();
        modal.classList.add('show');
    }
})

// close modal function
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    form.reset();
});

// close modal function window
window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.remove('show');
        form.reset();
    } 
})


// carousel
let currentIndex = 0;
const carouselItems = document.querySelector('.carousel-items');
const cards = document.querySelectorAll('.carousel-card');
const totalItems = cards.length;
const cardWidth = cards[0].offsetWidth + 32; // 512 + gap

function updateCarousel() {
    carouselItems.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextSlide() {
    if (currentIndex < totalItems - 2) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
