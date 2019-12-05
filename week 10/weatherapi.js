const apiURL = "api.openweathermap.org/data/2.5/weather?id-5604473&units-imperial&APPID-efef4e51c7aa99beb077464dad90cb14";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });