import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
} from './types';

import axios from 'axios';

import { returnErrors, clearErrors } from './errorAction';

export const register = (user) => dispatch => {

    axios.post('/api/user', user)
        .then(res => {
            dispatch(clearErrors());
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_FAIL
            });
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export const login = (user) => dispatch => {

    axios.post('/api/auth', user)
        .then(res => {
            dispatch(clearErrors());
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_FAIL
            });
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS,
    })
}

export const tokenConfig = (getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-type": "application/json",
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios.get('/api/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.msg))
            dispatch({
                type: AUTH_ERROR
            })
        })
}