const organizeWeather = (weatherData) => {
    const {
        elevation,
        latitude,
        longitude,
        timezone,
        hourly: { temperature_2m, time },
    } = weatherData;

    const days = {};

    time.forEach((hour, index) => {
        const now = new Date(hour);
        const day = now.getDate();

        const formattedHour = `${
            now.getHours() < 10 ? '0' : ''
        }${now.getHours()} :  ${
            now.getMinutes() < 10 ? '0' : ''
        }${now.getMinutes()} : ${
            now.getSeconds() < 10 ? '0' : ''
        }${now.getSeconds()}`;

        const formattedTemp = temperature_2m[index].toFixed(1);

        const hourAndTemp = {
            hour: formattedHour,
            temp: formattedTemp,
        };

        if (!days[day]) {
            days[day] = [];
        }
        days[day].push(hourAndTemp);
    });

    return {
        elevation,
        latitude,
        longitude,
        timezone,
        days,
    };
};

export default organizeWeather;
