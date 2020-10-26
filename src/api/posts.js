import { default as axios } from '../config/axios';

export const postsNew = async(imageUrl, caption) => {
    try {
        const newPost = await axios.post('/posts', {
            imageUrl,
            caption
        });
        return newPost.data;
    } catch (error) {
        throw error;
    }
}

export const postsNewComment = async(postId, content) => {
    try {
        const savedPost = await axios.post('/posts/comment/new', {
            postId,
            content
        });
        return savedPost.data;
    } catch (error) {
        throw error;
    }
}

export const postsNewLike = async(postId) => {
    try {
        const savedPost = await axios.post('/posts/like/new', {
            postId
        });
        return savedPost.data;
    } catch (error) {
        throw error;
    }
}

export const postsDeleteLike = async(postId) => {
    try {
        const savedPost = await axios.post('/posts/like/delete', {
            postId
        });
        return savedPost.data;
    } catch (error) {
        throw error;
    }
}

