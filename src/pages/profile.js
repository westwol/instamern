import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProfile, Loader } from '../components';
import { usersGetFull } from '../api/users';

export const Profile = () => {

    const { username } = useParams();

    const [ isLoading, setIsLoading ] = useState(true);
    const [ user, setUser ] = useState(null);
    const [ posts, setPosts ] = useState([]);
    
    useEffect(() => {
        const fetchProfile = async () => {
            const profile = await usersGetFull(username);
            setUser(profile.user);
            setPosts(profile.posts);
            setIsLoading(false);
        };
          fetchProfile();
    }, [ username ])

    if (isLoading) {
        return <Loader />
    }
    
    return <UserProfile 
        profileUser={ user }
        posts={ posts }
    />
}
