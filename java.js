window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  const enviarBtn = document.querySelector('#enviar-btn');

enviarBtn.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'var(--cor-destaque)';
  this.style.color = 'white';
  this.style.transition = 'background-color 0.3s, color 0.3s';
});

enviarBtn.addEventListener('mouseout', function() {
  this.style.backgroundColor = 'white';
  this.style.color = 'var(--cor-destaque)';
  this.style.transition = 'background-color 0.3s, color 0.3s';
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});

