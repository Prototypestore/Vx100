const slides = document.querySelectorAll('.carousel img');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Start slideshow: change every 1 second
  showSlide(current);
  setInterval(nextSlide, 1000);
