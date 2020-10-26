import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Post } from './Post';

export default function Feed({ posts, lastPostRef }) {

    const { user } = useSelector(state => state.auth);

    return (
        <>
            <div className="feed">
                {
                    posts.map((item, index) => {
                        if (posts.length === index + 1) {
                            return <Post 
                                        forwardRef={ lastPostRef } 
                                        key={ item._id }
                                        authenticatedUserId={ user._id }
                                        {... item}
                                    />
                          } else {
                            return <Post 
                                        key={ item._id }
                                        authenticatedUserId={ user._id }
                                        {... item}
                                    />
                          }
                    })
                }
            </div>
        </>
    )
}


Feed.propTypes = {
    posts: PropTypes.array.isRequired,
};
