import { GET_EVENT } from './types';

import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const getEvents = () => dispatch => {

    axios.get('/api/events')
        .then(res => {
            console.log(res);
            dispatch({
                type:GET_EVENT,
                payload:res.data
            })
        });
    }

export const addEvent = (event) => (dispatch, getState) => {
    
        event = {
            ...event,
            organiser_id: getState().auth.user._id,
            organiser_name: getState().auth.user.name,
        }
        
        console.log(event);

        axios.post('/api/events',event)
            .then(res => {
                dispatch({
                    type:GET_EVENT
                })
            })
            .catch((err,res)=> console.log("ERRor:",res));
}