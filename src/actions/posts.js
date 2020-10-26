import { 
    POSTS_INSERT, 
    POSTS_NEXT_PAGE,
    POSTS_HAS_MORE,
    POSTS_NEW_COMMENT,
    POSTS_NEW_LIKE
} from "../types/types";

export const insertPosts = (posts, newEntry = false) => ({
    type: POSTS_INSERT,
    payload: { posts, newEntry }
});

export const setNextPage = () => ({
    type: POSTS_NEXT_PAGE
});

export const setHasMore = (hasMore) => ({
    type: POSTS_HAS_MORE,
    payload: { hasMore }
})

export const setComments = (postId, comments) => ({
    type: POSTS_NEW_COMMENT,
    payload: { postId, comments }
})

export const setLike = (postId, likes) => ({
    type: POSTS_NEW_LIKE,
    payload: { postId, likes }
})