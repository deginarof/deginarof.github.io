const apiURLForecast = "http://api.openweathermap.org/data/2.5/forecast?id=5585010&units-imperial&APPID=efef4e51c7aa99beb077464dad90cb14";
fetch(apiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        //const weatherList = jsonObject.list;

        let day = 1;
        for (let i = 0; i < jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes("18:00:00")) {
                //Set the day
                let dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
                let date = new Date(jsObject.list[i].dt_txt);
                document.getElementById('day' + day + '-day').textContent = dayNames[date.getDay()];

                //set the icon
                let iconSrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                let iconAlt = jsObject.list[i].weather[0].description;
                document.getElementById('day' + day + '-icon').setAttribute('src', iconSrc);
                document.getElementById('day' + day + '-icon').setAttribute('alt', iconAlt);


                //set the temp
                document.getElementById('day' + day + '-temp').textContent = jsObject.list[i].main.temp.toFixed(0);


                day++;
            }
        }
    });


/********
 * This code uses Town Data file to display upcoming events
 ********/
var townName = ""
if (document.getElementById('town-name').textContent.includes("Preston")) {
    townName = "Preston"
} else if (document.getElementById('town-name').textContent.includes("Soda Springs")) {
    townName = "Soda Springs"
} else if (document.getElementById('town-name').textContent.includes("Fish Haven")) {
    townName = "Fish Haven"
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        //console.log(jsObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == townName) {
                for (let j = 0; j < towns[i].events.length; j++) {
                    let div = document.createElement('div');
                    div.textContent = towns[i].events[j]
                    document.querySelector('div.events').appendChild(div);
                }
            }
        }
    });