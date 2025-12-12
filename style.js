const track = document.querySelector('.slides');
const slides = Array.from(track.children);
const slideWidth = 560; // match your CSS width
let index = 0;

// Clone the first slide and append it to the end
const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);

function showSlide(i) {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${i * slideWidth}px)`;
}

// Next button (always forward)
document.querySelector('.slide-button2').addEventListener('click', (e) => {
  e.preventDefault();
  index++;
  showSlide(index);
});

// Prev button (optional backward navigation)
document.querySelector('.slide-button').addEventListener('click', (e) => {
  e.preventDefault();
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto-rotate forward every 4 seconds
setInterval(() => {
  index++;
  showSlide(index);
}, 4000);

// Reset when hitting the clone (seamless loop)
track.addEventListener('transitionend', () => {
  if (index === slides.length) {
    track.style.transition = "none"; // remove animation
    index = 0; // reset to real first slide
    track.style.transform = `translateX(0px)`;
    // re-enable animation after a tiny delay
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease";
    }, 50);
  }
});
