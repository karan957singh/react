/**
 * Created by karan on 6/08/2018.
 */
import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});
export default rootReducer;