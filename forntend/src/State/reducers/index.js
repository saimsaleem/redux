import {combineReducers} from 'redux';
import nameReducer from './nameReducer';

const reducers = combineReducers({
    name: nameReducer
})
export default reducers;