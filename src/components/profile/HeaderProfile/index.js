import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "semantic-ui-react";
import { setUser } from '../../../actions/auth';
import { usersFollow, usersUnfollow } from '../../../api/users';

export const HeaderProfile = ({ 
    userId, 
    username, 
    authenticatedUser 
}) => {

    const dispatch = useDispatch();

    const onFollow = async() => {
        const user = await usersFollow(userId);
        dispatch(setUser(user));
    }

    const onUnFollow = async() => {
        const user = await usersUnfollow(userId);
        dispatch(setUser(user));
    }

    const followButton = () => {
        const isFollowing = authenticatedUser?.friends.find(friend => friend === userId) ? true : false;
        if (!isFollowing) {
            return (
                <Button className="btn-action" onClick={onFollow}>
                    Follow
                </Button>
            )
        } else {
            return (
                <Button className="btn-danger" onClick={onUnFollow}>
                    Unfollow
                </Button>
              );
        }
    };

    return (
        <div className="profile__header">
            <h2>{ username }</h2>
            {
                authenticatedUser.username !== username &&
                    followButton()
            }
        </div>
    )
}
