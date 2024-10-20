
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const temp = 20; 
    const windSpeed = 10; 


    const windChillElement = document.getElementById('windchill');
    windChillElement.textContent = calculateWindChill(temp, windSpeed);

    
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;
});
