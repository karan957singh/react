/**
 * Created by karan on 6/08/2018.
 */
import {FETCH_WEATHER} from '../actions/index';
export default function (state=[],action) {
switch(action.type){
    case FETCH_WEATHER:
        return [action.payload.data,...state];
}
    return state;

}
