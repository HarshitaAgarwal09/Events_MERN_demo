import { 
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS } from './types';

import axios from 'axios';

export const register = (user) => dispatch =>{

    // user.password = JSON.stringify(user.password);

    axios.post('/api/user',user)
    .then(res => {
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    })
    .catch(err=>console.log(err));
}

export const login = (user) => dispatch => {

    axios.post('/api/auth',user)
    .then(res => {
        console.log(res);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    })
    .catch(err=>console.log(err));
}

export const logout = () => dispatch => {
        dispatch({
            type:LOGOUT_SUCCESS,
        })
}

export const getUser = () => dispatch => {
    axios.get('/api/user')
        .then(res => 
            console.log(res)
            );
}