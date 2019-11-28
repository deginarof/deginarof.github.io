const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 1; i <= towns.length; i++) {
            if (towns[i].name === "Fish Haven") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('p');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let photo = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Found Year:" + " " + towns[i].yearFounded;
                currentPopulation.textContent = "Current Population:" + " " + towns[i].currentPopulation;
                averageRainfall.textContent = "Current Rainfall:" + " " + towns[i].averageRainfall;
                photo.setAttribute('src', towns[i].photo);
                photo.setAttribute('alt', towns[i].name);

                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                card.appendChild(photo);
                document.querySelector('div.towns').appendChild(card);
            }
            if (towns[i].name === "Preston") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('p');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let photo = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Found Year:" + " " + towns[i].yearFounded;
                currentPopulation.textContent = "Current Population:" + " " + towns[i].currentPopulation;
                averageRainfall.textContent = "Current Rainfall:" + " " + towns[i].averageRainfall;
                photo.setAttribute('src', towns[i].photo);
                photo.setAttribute('alt', towns[i].name);

                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                card.appendChild(photo);
                document.querySelector('div.towns').appendChild(card);
            }
            if (towns[i].name === "Soda Springs") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('p');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let photo = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Found Year:" + " " + towns[i].yearFounded;
                currentPopulation.textContent = "Current Population:" + " " + towns[i].currentPopulation;
                averageRainfall.textContent = "Current Rainfall:" + " " + towns[i].averageRainfall;
                photo.setAttribute('src', towns[i].photo);
                photo.setAttribute('alt', towns[i].name);

                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                card.appendChild(photo);
                document.querySelector('div.towns').appendChild(card);
            }
        }


    });