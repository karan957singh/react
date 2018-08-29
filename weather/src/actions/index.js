/**
 * Created by karan on 5/08/2018.
 */
import axios from 'axios';
const WEATHER_KEY='6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_KEY}`;
export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER,
        payload:request
    };
}