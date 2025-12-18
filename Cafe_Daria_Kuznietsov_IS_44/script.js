// Вибір режиму перегляду
const modeSelect = document.getElementById('mode-select');
const pcBtn = document.getElementById('pcMode');
const mobileBtn = document.getElementById('mobileMode');

pcBtn.addEventListener('click', () => {
  document.body.classList.remove('mobile-mode');
  modeSelect.style.display = 'none';
});

mobileBtn.addEventListener('click', () => {
  document.body.classList.add('mobile-mode');
  modeSelect.style.display = 'none';
});

// Карусель
const images = ['cafe.jpg', 'cafe2.jpg', 'cafe3.jpg'];
let currentIndex = 0;
const carouselImg = document.getElementById('carousel-image');
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImg.src = images[currentIndex];
});
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImg.src = images[currentIndex];
});
