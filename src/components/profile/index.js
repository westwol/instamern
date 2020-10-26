import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
import { Friends } from './Friends';
import { HeaderProfile } from './HeaderProfile';
import { Posts } from './Posts';

export default function Profile({ profileUser, posts }) {

    const { user:authenticatedUser } = useSelector(state => state.auth);

    return (
        <>
            <Grid className="profile">
                <Grid.Column width={5} className="profile__left">
                    <Image
                        src={ profileUser.imageUrl }
                        avatar
                    />
                    </Grid.Column>
                    <Grid.Column width={11} className="profile__right">
                    <HeaderProfile
                        userId={ profileUser?._id }
                        username={ profileUser?.username }
                        authenticatedUser={ authenticatedUser }
                    />
                    <Friends
                        friends={ profileUser?.friends }
                        postsCount={ posts?.length }
                    />
                    <div className="other">
                        <p className="description">{ profileUser?.description }</p>
                    </div>
                </Grid.Column>
                <Posts posts={ posts } />
            </Grid>
        </>
    )
}
