const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&units-imperial&1b3aced6f34746ae43e67de233607fcf";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });