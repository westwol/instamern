import { default as axios } from '../config/axios';

export const authLogin = async(email, password) => {
    try {
        const user = await axios.post('/auth/login', {
            email,
            password
        });
        return user.data;
    } catch (error) {
        throw error;
    }
}

export const authIsMe = async() => {
    try {
        const user = await axios.get('/auth/me');
        return user.data;
    } catch (error) {
        throw error;
    }
}
