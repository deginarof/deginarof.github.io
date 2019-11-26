const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let photo = document.createElement('img');

            h2.textContent = towns[i].name + '' + towns[i].name;
            yearFounded.textContent = "Founded:" + towns[i].foundedyear + ''
            currentPopulation.textContent = "Current Population:" + towns[i].populationcurrent;
            image.setAttribute('src', towns[i].imageurl);
            image.setAttribute('alt', towns[i].name = ' ' + towns[i].name + " - " + towns[i].order);

            card.appendChild(h2);
            card.appendChild(foundedYear);
            card.appendChild(populationCurrent);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }

    });