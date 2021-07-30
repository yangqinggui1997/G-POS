export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE'

export const signin = token => {
    return {type: SIGN_IN, token}
}

export const signout = () => {
    return {type: SIGN_OUT}
}

export const setError = errorMessage => {
    return {type: SET_ERROR, errorMessage}
}

export const clearError = () => {
    return {type: CLEAR_ERROR_MESSAGE}
}