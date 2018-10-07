/**
 * Created by karan on 2/09/2018.
 */
import {combineReducers} from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
    posts:PostsReducer
});

export default rootReducer;