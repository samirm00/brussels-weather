const determineSituation = (temperature) => {
    if (temperature >= 20) {
        return '<i class="fa fa-sun"></i>';
    } else if (temperature >= 15) {
        return '<i class="fa fa-cloud"></i>';
    } else if (temperature >= 10) {
        return '<i class="fa fa-cloud-moon-rain"></i>';
    } else {
        return '<i class="fa fa-cloud-showers-heavy"></i>';
    }
};

export default determineSituation;
