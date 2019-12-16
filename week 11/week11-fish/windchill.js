var temp = jsObject.main.temp;
var windSpeed = jsObject.wind.speed;
var windChill = 0

if (temp <= 50 && windSpeed >= 3) {
    windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
    document.getElementById('chill').textContent = Math.round(windChill);
}