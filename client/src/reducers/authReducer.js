import { 
    USER_LOADING, 
    USER_LOADED,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS, 
    AUTH_ERROR,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    user:null,
    isAuthenticated: false,
    isLoading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case USER_LOADING: {
            return {
                ...state,
                isLoading:true
            }
        }

        case USER_LOADED: {
            return {
                ...state,
                isLoading:false
            }
        }

        case LOGIN_SUCCESS: 
        case REGISTER_SUCCESS: {
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }
        }
        
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS: {
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                user:null,
                isAuthenticated: false,
                isLoading: false
            }
        }

        default: return state;
    }  
}