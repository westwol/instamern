import React, { useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { Grid, Modal } from 'semantic-ui-react';
import { Comments } from './Comments';
import { Actions } from './Actions';
import { NewComment } from './NewComment';

export default function PostModal({
    showModal,
    setShowModal,
    poster,
    caption,
    imageUrl,
    likes,
    authenticatedUserId,
    comments,
    postId
}) {

    const scrollDown = () => {
        animateScroll.scrollToBottom({
            containerId: 'comments-container',
            duration: 450,
            smooth: 'easeInOutQuint'
        });
    }

    useEffect(() => {
        if (!showModal) return;
        scrollDown()
    }, [ showModal ])

    return (
        <div>
            <Modal open={ showModal } onClose={ () => setShowModal(false) } className="post-modal">
                <Grid>
                    <Grid.Column
                        className="post-modal__left"
                        width={10}
                        style={{ backgroundImage: `url("${imageUrl}")` }}
                    />
                    <Grid.Column className="post-modal__right" width={6}>
                        <Comments
                            poster={ poster }
                            comments={ comments }
                            caption={ caption }
                        />
                        <Actions
                            postId={ postId }
                            likes={ likes }
                            authenticatedUserId={ authenticatedUserId }
                        />
                        <NewComment 
                            postId={ postId }
                            scrollDown={ scrollDown }
                        />
                    </Grid.Column>
                </Grid>
            </Modal>
        </div>
    )
}
