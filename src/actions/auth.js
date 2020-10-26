import { authIsMe, authLogin } from "../api/auth";
import tokenAuth from "../config/token";
import { loadPersistantStorage, savePersistantStorage } from "../store/local";
import { 
    AUTH_ERROR, 
    AUTH_LOGIN, 
    AUTH_LOGOUT,
    AUTH_UPDATE_USER
} from "../types/types";

export const login = (user) => ({
    type: AUTH_LOGIN,
    payload: { user }
})

export const logout = () => ({
    type: AUTH_LOGOUT
})

export const setError = (error) => ({
    type: AUTH_ERROR,
    payload: { error }
})

export const setUser = (user) => ({
    type: AUTH_UPDATE_USER,
    payload: { user }
})

export const startLoging = (email, password) => {
    return async(dispatch) => {
        try {
            // Cleaning up errors
            dispatch(setError(null));
            // Executing sign up [ Pick up token from here ]
            const user = await authLogin(email, password);
            user.friends = user.friends ? user.friends : [];
            // Setting token in headers for future API requests
            tokenAuth(user?.token);
            // Storing userData in state
            dispatch(login(user));
            // Storing token in localStorage
            savePersistantStorage('token', user?.token);
        } catch (error) {
            dispatch(setError(error.response));
        }
    }
}

export const startLogingWithToken = () => {
    return async(dispatch) => {
        try {
            const token = loadPersistantStorage('token');
            if (token === '') {
                throw new Error('No token was found');
            }
            // Setting token in headers for the next requests
            tokenAuth(token);
            // Requesting backend for authentification based on token passed
            const user = await authIsMe();
            user.friends = user.friends ? user.friends : [];
            // Storing userData in state
            dispatch(login(user));
        } catch (error) {
            dispatch(setError(error.response));
        }
    }
}