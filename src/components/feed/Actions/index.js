import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { setLike } from '../../../actions/posts';
import { postsNewLike, postsDeleteLike } from '../../../api/posts';

export const Actions = ({
    postId,
    likes,
    authenticatedUserId
}) => {
    const isLike = likes.find(like => like.userId === authenticatedUserId) ? true : false;

    const dispatch = useDispatch();
    const handleNewLike = async() => {
        if (isLike) return;
        const savedPost = !isLike 
            ? await postsNewLike(postId) 
            : await postsDeleteLike(postId);
        dispatch(setLike(postId, savedPost.likes));
    } 

    return (
        <div className="feed__post-actions">
            <Icon
                className={ isLike ? "like active" : "like" }
                name={ isLike ? "heart" : "heart outline" }
                onClick={ handleNewLike }
            />
            { likes.length } { likes.length === 1 ? "Like" : "Likes" }
        </div>
    )
}

Actions.propTypes = {
    postId: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    authenticatedUserId: PropTypes.string.isRequired
};
