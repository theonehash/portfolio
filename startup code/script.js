const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('mouseover', () => {
  const lines = document.querySelectorAll('.line');
  lines.forEach(line => {
    line.style.backgroundColor = '#aaa';
  });
});

burger.addEventListener('mouseout', () => {
  const lines = document.querySelectorAll('.line');
  lines.forEach(line => {
    line.style.backgroundColor = '#fff';
  });
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});
