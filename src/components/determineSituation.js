const determineSituation = (temperature) => {
    if (temperature >= 20) {
        return '<i class="fa fa-sun yellow"></i>';
    } else if (temperature >= 15) {
        return '<i class="fa fa-cloud white"></i>';
    } else if (temperature >= 10) {
        return '<i class="fa fa-cloud-moon-rain grey"></i>';
    } else {
        return '<i class="fa fa-cloud-showers-heavy black"></i>';
    }
};

export default determineSituation;
