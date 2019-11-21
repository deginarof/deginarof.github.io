const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let dateBirth = document.createElement('p');
            let placeBirth = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + '' + prophets[i].lastname;
            dateBirth.textContent = "Date of Birth:" + prophets[1].birthdate + ''
            placeBirth.textContent = "Place of Birth:" + prophets[1].birthplace;
            image.setAttribute('src', prophets[1].imageurl);
            image.setAttribute('alt', prophets[1].name = ' ' + prophets[1].lastname + " - " + prophets[1].order);

            card.appendChild(h2);
            card.appendChild(dateBirth);
            card.appendChild(placeBirth);
            card.appendChild(image);
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);
        }

    });