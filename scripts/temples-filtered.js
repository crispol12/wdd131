// Mostrar el año actual y la fecha de última modificación
const lastModified = document.getElementById('lastModified');
lastModified.textContent = document.lastModified;

// Menú hamburguesa en vista móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Agrega evento para abrir/cerrar el menú cuando se hace clic en el botón
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = hamburger.textContent === '☰' ? 'X' : '☰'; // Cambia el ícono entre ☰ y X
});