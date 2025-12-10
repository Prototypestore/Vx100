const track = document.querySelector('.track');
  const slides = document.querySelectorAll('.track img');
  let current = 0;

  function showSlide(index) {
    track.scrollTo({
      left: track.clientWidth * index,
      behavior: 'smooth'
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Start slideshow: change every 1 second
  showSlide(current);
  setInterval(nextSlide, 1000);
