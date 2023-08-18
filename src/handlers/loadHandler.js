import dom from '../dom.js';
import getWeather from '../../apis/getWeather.js';
import organizeWeather from '../utils/organizeWeather.js';
import createWeather from '../components/createWeather.js';

const loadHandler = async () => {
    const data = await getWeather();
    const newData = organizeWeather(data);
    const weatherDom = createWeather(newData);
    dom.root.append(weatherDom);
};

export default loadHandler;
