window.addEventListener('load', function() {

  var h1 = document.querySelector('.jumbro-thing');

  h1.style.opacity = 1;
  h1.style.transform = 'translateY(0)';
});



window.addEventListener('scroll', () => {
  const header1 = document.querySelector('#header');
  const header2 = document.querySelector('#header');
  const distanceFromTop = window.pageYOffset;
  const headerHeight = header1.offsetHeight;

  if (distanceFromTop > headerHeight) {
    header2.classList.add('fade-out');
  } else {
    header2.classList.remove('fade-out');
  }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

