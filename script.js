const track = document.querySelector('.track');
  const slides = document.querySelectorAll('.track img');
  const prevBtn = document.querySelector('.form3 .prev');
  const nextBtn = document.querySelector('.form3 .next');

  let current = 0;
  let intervalId;

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

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function startAutoScroll() {
    intervalId = setInterval(nextSlide, 1000);
  }

  function stopAutoScroll() {
    clearInterval(intervalId);
  }

  // Button controls
  nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    nextSlide();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    prevSlide();
  });

  // Start slideshow
  showSlide(current);
  startAutoScroll();
