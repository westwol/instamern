import axiosClient from './axios';

const tokenAuth = token => {
    if (!token) {
        delete axiosClient.defaults.headers.common['x-auth-token'];
    } else {
        axiosClient.defaults.headers.common['x-auth-token'] = token;
    }
}

export default tokenAuth;