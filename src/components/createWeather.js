const createWeather = (data) => {
    const container = document.createElement('div');
    container.classList.add('data-container');

    const city = document.createElement('div');
    city.classList.add('data-city');
    city.innerText = 'Brussels';

    const title = document.createElement('div');
    title.classList.add('data-title');
    title.innerText = 'Day | Hours';

    container.append(city, title);

    for (const day in data.days) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const labelDiv = document.createElement('div');
        labelDiv.classList.add('labels');

        const dayLabel = document.createElement('div');
        dayLabel.classList.add('day-label');
        dayLabel.innerText = `Day ${day}`;
        labelDiv.append(dayLabel);

        const tempLabel = document.createElement('div');
        tempLabel.classList.add('temp-label');
        tempLabel.innerText = `°C`;
        labelDiv.append(dayLabel, tempLabel);
        dayDiv.append(labelDiv);

        const hourDataContainer = document.createElement('div');
        hourDataContainer.classList.add('hour-data-container');

        let oldTemp;
        for (const hourData of data.days[day]) {
            const hourDataDiv = document.createElement('div');
            hourDataDiv.classList.add('hour-data');

            if (oldTemp) {
                if (oldTemp < hourData.temp) {
                    hourDataDiv.innerHTML = `<div class='hour'>${hourData.hour}</div><i class="fas fa-arrow-up green"></i><div class='temp'>${hourData.temp}</div>`;
                } else {
                    hourDataDiv.innerHTML = `<div class='hour'>${hourData.hour}</div><i class="fas fa-arrow-down red"></i><div class='temp'>${hourData.temp}</div>`;
                }
            } else {
                hourDataDiv.innerHTML = `<div class='hour'>${hourData.hour}</div><div class='temp'>${hourData.temp}</div>`;
            }
            hourDataContainer.append(hourDataDiv);
            oldTemp = hourData.temp;
        }

        dayDiv.append(hourDataContainer);
        container.append(dayDiv);
    }

    return container;
};

export default createWeather;
