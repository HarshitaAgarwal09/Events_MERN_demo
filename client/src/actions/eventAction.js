import axios from 'axios';

import { GET_EVENT } from './types';
import { returnErrors, clearErrors } from './errorAction';


export const getEvents = () => dispatch => {

    axios.get('/api/events')
        .then(res => {
            dispatch(clearErrors());
            dispatch({
                type: GET_EVENT,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data.msg, err.response.status));
        });
}

export const addEvent = (event) => (dispatch, getState) => {

    event = {
        ...event,
        organiser_id: getState().auth.user._id,
        organiser_name: getState().auth.user.name,
    }

    axios.post('/api/events', event)
        .then(res => {
            dispatch(clearErrors());
        })
        .catch((err) => {
            if (err.response) { dispatch(returnErrors(err.response.data.msg, err.response.status)); }
            else alert("Some error occures");
        });
}