// Get the current year
const currentYearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;