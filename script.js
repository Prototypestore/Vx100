const images = document.querySelectorAll('.carousel img');
    let current = 0;

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 1000); // 1000 ms = 1 second
