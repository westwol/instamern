import { 
    AUTH_ERROR, 
    AUTH_LOGIN, 
    AUTH_LOGOUT,
    AUTH_UPDATE_USER
} from '../types/types';

const initialState = {
    loggedIn: false,
    user: null,
}

export const authReducer = (state = initialState, action) => {
    const { payload } = action;
    switch(action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                loggedIn: true,
                user: payload.user
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: payload.error
            }
        case AUTH_UPDATE_USER:
            return {
                ...state,
                user: payload.user
            }
        default:
            return state;
    }
}