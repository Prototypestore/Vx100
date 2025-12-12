const track = document.querySelector('.slides');
const slides = Array.from(track.children);
let index = 0;
const slideWidth = 560; // match your CSS width

function showSlide(i) {
  track.style.transform = `translateX(-${i * slideWidth}px)`;
}

// Next button (always forward)
document.querySelector('.slide-button2').addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submission
  index = (index + 1) % slides.length; // wrap forward
  showSlide(index);
});

// Prev button (only if user clicks)
document.querySelector('.slide-button').addEventListener('click', (e) => {
  e.preventDefault();
  index = (index - 1 + slides.length) % slides.length; // backward navigation
  showSlide(index);
});

// Auto-rotate forward every 4 seconds
setInterval(() => {
  index = (index + 1) % slides.length; // continuous forward loop
  showSlide(index);
}, 4000);

