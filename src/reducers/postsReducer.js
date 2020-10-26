import { 
    POSTS_INSERT, 
    POSTS_NEW_COMMENT, 
    POSTS_NEXT_PAGE, 
    POSTS_HAS_MORE,
    POSTS_NEW_LIKE
} from '../types/types';

const initialState = {
    posts: [],
    currentPage: 1,
    maxPages: 1,
    hasMore: true
}

export const postsReducer = (state = initialState, action) => {
    const { payload } = action;
    switch(action.type) {
        case POSTS_INSERT:
            return {
                ...state,
                posts: payload.newEntry ? [ ...payload.posts, ...state.posts ] : [ ...state.posts, ...payload.posts ]
            }
        case POSTS_NEW_COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    return (post._id === payload.postId ? { ...post, comments: payload.comments } : post)
                })
            }
        case POSTS_NEW_LIKE:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    return (post._id === payload.postId ? { ...post, likes: payload.likes } : post)
                })
            }
        case POSTS_NEXT_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        }
        case POSTS_HAS_MORE: {
            return {
                ...state,
                hasMore: payload.hasMore
            }
        }
        default:
            return state;
    }
}