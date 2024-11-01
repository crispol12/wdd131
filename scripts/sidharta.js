// Función para alternar el menú de hamburguesa en móviles
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Mostrar el año actual en el footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Mostrar la última fecha de modificación en el footer
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent += ` ${lastModified}`;

    // Lazy loading para imágenes usando Intersection Observer
    const images = document.querySelectorAll('img[data-src]');

    // Verifica si el navegador soporta IntersectionObserver para lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Reemplaza 'data-src' con 'src'
                    img.removeAttribute('data-src'); // Quita el atributo 'data-src' después de cargar la imagen
                    observer.unobserve(img); // Deja de observar la imagen cargada
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Si no soporta IntersectionObserver, habilita lazy loading usando el atributo loading="lazy"
        images.forEach(img => {
            img.setAttribute('loading', 'lazy'); // Usa el atributo "loading" nativo en navegadores compatibles
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
});