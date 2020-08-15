import { GET_ERRORS, CLEAR_ERRORS } from "./types"

export const returnErrors = (msg, status) => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: { msg, status }
    })
}

export const clearErrors = (msg, status) => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    })
}