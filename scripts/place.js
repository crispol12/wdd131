// Calcular el factor de enfriamiento por viento
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

// Obtener la última fecha de modificación del documento
document.addEventListener('DOMContentLoaded', () => {
    const temp = 20; // Temperatura estática
    const windSpeed = 10; // Velocidad del viento estática

    // Calcular y mostrar el windchill
    const windChillElement = document.getElementById('windchill');
    windChillElement.textContent = calculateWindChill(temp, windSpeed);

    // Mostrar la última fecha de modificación del documento
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;
});
