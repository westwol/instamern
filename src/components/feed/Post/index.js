import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { Actions } from '../Actions';
import { NewComment } from '../NewComment';
import { PostModal } from '../../../components';

export const Post = ({ 
    _id,
    poster, 
    caption,
    imageUrl,
    forwardRef,
    likes,
    comments,
    authenticatedUserId
}) => {

    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className="feed__post" ref={ forwardRef }>
            <Link to={`/profile/${poster?.username}`}>
                <div className="feed__post-user">
                    <Image
                        src={ poster?.imageUrl }
                        avatar
                    />
                    <span>{ poster?.username }</span>
                </div>
            </Link>
            <div
                className="feed__post-photo"
                style={{ backgroundImage: `url("${imageUrl}")` }}
                onClick={ () => setShowModal(true) }
            />
            <div className="feed__post-actions">
                <Actions 
                    postId={ _id }
                    likes={ likes }
                    authenticatedUserId={ authenticatedUserId }
                />
            </div>
            <div className="feed__post-form">
                <NewComment 
                    postId={ _id } 
                    setShowModal={ setShowModal } 
                />
            </div>
            <PostModal
                showModal={ showModal }
                setShowModal={ setShowModal }
                poster={ poster }
                imageUrl={ imageUrl }
                likes={ likes }
                comments= { comments }
                caption={ caption }
                postId={ _id }
                authenticatedUserId={ authenticatedUserId }
            />
        </div>
    )
}

Post.propTypes = {
    _id: PropTypes.string.isRequired,
    poster: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    caption: PropTypes.string.isRequired,
    authenticatedUserId: PropTypes.string.isRequired
};
