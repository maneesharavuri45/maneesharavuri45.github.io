const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('open');
    }
  });
});
