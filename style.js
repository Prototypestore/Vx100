const track = document.querySelector('.slides');
const slides = Array.from(track.children);
let index = 0;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 250}px)`;
}

document.querySelector('.slide-button2').addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submission
  index = (index + 1) % slides.length;
  showSlide(index);
});

document.querySelector('.slide-button').addEventListener('click', (e) => {
  e.preventDefault();
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto-rotate every 4 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);

