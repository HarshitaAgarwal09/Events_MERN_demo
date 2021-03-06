import {combineReducers} from 'redux';

import eventReducer from './eventReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    event:eventReducer,
    auth:authReducer,
    error:errorReducer
})