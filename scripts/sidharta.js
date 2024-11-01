// Función para alternar el menú de hamburguesa en móviles
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

// Mostrar el año actual en el footer
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Mostrar la última fecha de modificación en el footer
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent += ` ${lastModified}`;
});

// Lazy loading para imágenes usando Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Reemplaza 'data-src' con 'src'
                img.removeAttribute('data-src'); // Quita el atributo 'data-src' después de cargar la imagen
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});