/* Input: The user will write the temperature and the wind speed.
                         * Processing:call the function windChilli to do the calculation and return the result to 
                         a variable in te first function.
                         * Output: Show the result to the user.
                         */
// Get the values from the user.
function doImputOutput() {
    var t = parseFloat(document.getElementById("Temperature").value);
    var windS = parseFloat(document.getElementById("WindSpeed").value);
    var processing = windChill(t, windS);

    // Show the results.
    document.getElementById("output").innerHTML = processing;
}
/* where f is the wind chill factor in Fahrenheit, t is the air temperature
 in Fahrenheit, and s is the wind speed in miles per hour at five feet above
  the ground*/
function windChill(t, windS) {
    var Fahrenheit = (35.74 + (0.6215 * t)) -
        (35.75 * (Math.pow(windS, 0.16))) +
        (0.4275 * t * (Math.pow(windS, 0.16)));
    return Fahrenheit.toFixed(2);
}