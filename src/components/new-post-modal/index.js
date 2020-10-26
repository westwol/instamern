import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Modal, Button, Grid, TextArea, Form, Icon } from "semantic-ui-react";
import { Header } from 'semantic-ui-react';
import { insertPosts } from "../../actions/posts";
import { postsNew } from "../../api/posts";
import { imageUpload } from "../../helpers/imageUpload";

export default function NewPostModal({ 
    showNewPostModal, 
    setShowNewPostModal 
}){
    
    const dispatch = useDispatch();
    const [ modalSuccessUpload, setModalSuccessUpload ] = useState(false);
    const [ imageUrl, setImageUrl ] = useState(null);
    const [ caption, setCaption ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    
    const handleSelectImage = () => document.querySelector('#imageSelector').click();
    
    const handleFileChange = async(e) => {
        const file = e.target.files[0];
        if (isLoading) return;
        if (file) {
            setIsLoading(true);
            setImageUrl(await imageUpload(file));
            setIsLoading(false);
        }
    }

    const handleNewPost = async(e) => {
        e.preventDefault();
        const newPost = await postsNew(imageUrl, caption);
        dispatch(insertPosts([ newPost ], true));
        setShowNewPostModal(false);
        setModalSuccessUpload(true);
    }

    return (
        <>
            <Modal open={ showNewPostModal } onClose={ () => setShowNewPostModal(false) } className="post-modal">
                <Grid>
                    <Grid.Column
                        className="post-modal__left"
                        width={10}
                        style={{ cursor: 'pointer', backgroundImage: `url("${imageUrl ? imageUrl : 'https://icon-library.com/images/click-here-hand-icon/click-here-hand-icon-17.jpg'}")` }}
                        onClick={ handleSelectImage }
                    />
                    <Grid.Column className="post-modal__right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} width={6}>
                        <Form style={{ marginRight: '10px' }} onSubmit={ handleNewPost }>
                            <input
                                id="imageSelector"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={ handleFileChange }
                            />
                            {
                                !imageUrl
                                    ? <Header as='h4'>No image has been yet selected, click on the left panel.</Header>
                                    : <Header as='h4'>Click on publish button to continue.</Header>
                            }
                            <TextArea value={ caption } onChange={ (e) => setCaption(e.target.value) } placeholder='Insert a caption' />
                            <Button type="submit" style={{ marginTop: '10px' }}>Publish</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Modal>

            <Modal
                basic
                onClose={ () => setModalSuccessUpload(false) }
                open={ modalSuccessUpload }
                size='small'
            >
                <Header icon>
                    <Icon name='checkmark' />
                    Post published!
                </Header>
                <Modal.Actions>
                    <Button color='green' inverted onClick={() => setModalSuccessUpload(false) }>
                    <Icon name='checkmark' /> Ok
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}
