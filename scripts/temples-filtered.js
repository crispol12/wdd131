// Mostrar el año actual y la fecha de última modificación
const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent += document.lastModified;

// Menú hamburguesa en vista móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');


hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = hamburger.textContent === '☰' ? 'X' : '☰';
});

// Datos de los templos
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska",
    dedicated: "1999, January, 9-10",
    area: 11937,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x250/anchorage-temple-lds-746769-wallpaper.jpg"
  },
  {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1-2",
    area: 45000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/400x250/guayaquil-ecuador-temple-lds-884500-wallpaper.jpg"
  },
  {
    templeName: "Adelaide Australia",
    location: "Adelaide, Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg"
  },
];

// Función para generar las tarjetas de templos
function generateTempleCards(temples) {
  const templeGrid = document.querySelector('.temple-grid');
  templeGrid.innerHTML = ''; // Limpiar contenido previo

  temples.forEach(temple => {
    // Crear elementos de la tarjeta
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; // Lazy loading para la imagen

    const name = document.createElement('h3');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq. ft.`;

    // Agregar elementos al contenedor de la tarjeta
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    // Agregar tarjeta al contenedor principal
    templeGrid.appendChild(card);
  });
}

// Mostrar todos los templos al cargar la página
generateTempleCards(temples);

// Filtros para templos
const filters = {
  all: () => temples,
  old: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900),
  new: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000),
  large: () => temples.filter(temple => temple.area > 90000),
  small: () => temples.filter(temple => temple.area < 10000)
};

// Evento para aplicar filtro en enlaces de navegación
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const filterType = event.target.dataset.filter;
    generateTempleCards(filters[filterType]());
  });
});