import determineSituation from './determineSituation.js';

const createWeather = (data) => {
    const container = document.createElement('div');
    container.classList.add('data-container');

    const city = document.createElement('div');
    city.classList.add('data-city');
    city.innerText = 'Brussels';
    container.appendChild(city);

    const title = document.createElement('div');
    title.classList.add('data-title');
    title.innerText = 'Day | Hours';
    container.appendChild(title);

    for (const day in data.days) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const labelDiv = document.createElement('div');
        labelDiv.classList.add('labels');

        const dayLabel = document.createElement('div');
        dayLabel.classList.add('day-label');
        dayLabel.innerText = `Day ${day}`;
        labelDiv.appendChild(dayLabel);

        const tempLabel = document.createElement('div');
        tempLabel.classList.add('temp-label');
        tempLabel.innerText = `°C`;
        labelDiv.appendChild(tempLabel);

        dayDiv.appendChild(labelDiv);

        const hourDataContainer = document.createElement('div');
        hourDataContainer.classList.add('hour-data-container');

        let oldTemp;
        for (const hourData of data.days[day]) {
            const hourDataDiv = document.createElement('div');
            hourDataDiv.classList.add('hour-data');
            const situation = determineSituation(hourData.temp);

            const arrowIcon = document.createElement('i');
            arrowIcon.classList.add('fas');
            if (oldTemp) {
                if (oldTemp < hourData.temp) {
                    arrowIcon.classList.add('fa-arrow-up', 'green');
                } else if (oldTemp > hourData.temp) {
                    arrowIcon.classList.add('fa-arrow-down', 'red');
                } else {
                    arrowIcon.classList.add('fa-equals');
                }
            } else {
                arrowIcon.classList.add('fa-arrow-down', 'hide');
            }

            hourDataDiv.innerHTML = `<div class='hour'>${hourData.hour}</div>${situation}`;
            if (arrowIcon.className) {
                hourDataDiv.appendChild(arrowIcon);
            }
            hourDataDiv.innerHTML += `<div class='temp'>${hourData.temp}</div>`;

            hourDataContainer.appendChild(hourDataDiv);
            oldTemp = hourData.temp;
        }

        dayDiv.appendChild(hourDataContainer);
        container.appendChild(dayDiv);
    }

    return container;
};

export default createWeather;
