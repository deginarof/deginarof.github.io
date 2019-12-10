const d = new Date();
console.log(d);
const todayDayNumber = d.getDay();
console.log(todayDayNumber);
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
console.log(weekday[todayDayNumber]);
const apiURL = "api.openweathermap.org/data/2.5/forecast?id=5604473&units-imperial&APPID=efef4e51c7aa99beb077464dad90cb14"
fetch(apiURL)
    .then((response => {
        console.log(weatherInfo);
        let list = weatherInfo.list;
        console.log(list.length);
        let forecastDayNumber = todayDayNumber;
        for (i = 0; i < list.length; i++) {
            var time = list[i].dt_txt;
            console.log(i + "--" + time);
            if (time.includes("18:00:00")) {
                console.log("Found an entry with 18:00:00 in the time. It was report " + i + " from the list of 40");
                console.log(weatherInfo.list[i].main.temp + "Â°");
                forecastDayNumber += 1;
                if (forecastDayNumber === 7) { forecastDayNumber = 0; }
                console.log("ForecastDayNumber" + forecastDayNumber + "which is" + weekday[forecastDayNumber]);
                var theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
                console.log("TEMPERATURE>" + weatherInfo.list[i].main.temp);
                var iconcode = weatherInfo.list[i].weather[0].icon;
                var iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                var theIcon = document.createElement("img");
                theIcon.src = iconPath;
                var theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('weatherforecast').appendChild(theDay);
            }
        }

    }));