import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react';

export const Friends = ({ postsCount, friends }) => {

    const [ showModal, setShowModal ] = useState(false);
    const [ modalTitle, setModalTitle ] = useState('');
    const [ modalContent, setModalContent ] = useState(null);


    const handleOpenFriends = async() => {
        setModalTitle('Friends');
        setModalContent('<p>Here goes your friends</p>');
    }

    return (
        <>
            <div className="profile__followers">
                <p>
                    <span>{ postsCount }</span> posts
                </p>
                <p className="link" onClick={ handleOpenFriends }>
                    <span>{ friends.length }</span> friends
                </p>
            </div>
            <Modal size="mini" open={ showModal } onClose={ setShowModal } className="profile__modal">
                { modalTitle && <Modal.Header>{ modalTitle }</Modal.Header>}
                { modalContent }
            </Modal>
        </>
    )
}
