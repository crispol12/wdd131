// Datos de la galería de fotos
const galleryItems = [
    {
      title: "Singing Lesson",
      description: "A memorable singing lesson at Sidharta School.",
      imageUrl: "https://cdn.pixabay.com/photo/2024/02/20/19/50/ai-generated-8586140_1280.png"
    },
    {
      title: "Student Performance",
      description: "A student performing confidently on stage.",
      imageUrl: "https://cdn.pixabay.com/photo/2012/02/28/15/40/singing-18382_1280.jpg"
    },
    {
      title: "Group Practice",
      description: "Group practice session at Sidharta Singing School.",
      imageUrl: "https://cdn.pixabay.com/photo/2024/06/06/20/06/singer-8813370_1280.png"
    },
    {
      title: "Christian Teaching",
      description: "Christian Castillo sharing his expertise in a class.",
      imageUrl: "https://cdn.pixabay.com/photo/2023/02/15/10/43/boy-7791499_1280.jpg"
    }
  ];
  
  // Función para generar las tarjetas de la galería
  function generateGalleryCards(items) {
    const photoSection = document.getElementById('photo-section');
    photoSection.innerHTML = ''; // Limpiar contenido previo
  
    items.forEach(item => {
      // Crear elementos de la tarjeta
      const figure = document.createElement('figure');
  
      const img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.title;
      img.loading = "lazy"; // Lazy loading para la imagen
  
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = item.description;
  
      // Agregar elementos al contenedor de la figura
      figure.appendChild(img);
      figure.appendChild(figcaption);
  
      // Agregar figura al contenedor principal de la galería
      photoSection.appendChild(figure);
    });
  }
  
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
  
    // Generar las tarjetas de la galería al cargar la página
    generateGalleryCards(galleryItems);
  });
  