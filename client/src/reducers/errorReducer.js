import {GET_ERRORS,CLEAR_ERRORS } from '../actions/types';

const initialState = {
    msg:{},
    status:null,
    id:null
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ERRORS: {
            return {
                ...state,
                msg:action.payload.msg,
            }
        }

        case CLEAR_ERRORS: {
            return {
                ...state,
                msg:{},
                status:null,
                id:null,
            }
        }

        default: return state;
    }  
}