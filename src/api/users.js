import { default as axios } from '../config/axios';

export const usersGetFull = async(username) => {
    try {
        const user = await axios.get(`/users/${username}`);
        return user.data;
    } catch (error) {
        throw error;
    }
}

export const usersFind = async(keyword) => {
    try {
        const users = await axios.get(`/users/find/${keyword}`);
        return users.data;
    } catch (error) {
        throw error;
    }
}

export const usersFollow = async(userId) => {
    try {
        const user = await axios.post(`/users/follow`, {
            userId
        });
        return user.data;
    } catch (error) {
        throw error;
    }
}

export const usersUnfollow = async(userId) => {
    try {
        const user = await axios.post(`/users/unfollow`, {
            userId
        });
        return user.data;
    } catch (error) {
        throw error;
    }
}

