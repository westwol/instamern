import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { NewPostModal } from '../../';

export const RightHeader = () => {
    const { user } = useSelector(state => state.auth);
    const [ showNewPostModal, setShowNewPostModal ] = useState(false);
    return (
        <>
            <div className="header__right">
                <Link to="/">
                    <Icon name="home" />
                </Link>
                <Icon name="plus" onClick={ () => setShowNewPostModal(true) } />
                <Link to={`/profile/${user.username}`}>
                    <Image src={user?.imageUrl} avatar />
                </Link>
            </div>
            <NewPostModal
                showNewPostModal={ showNewPostModal }
                setShowNewPostModal={ setShowNewPostModal }
            />
        </>
    )
}
