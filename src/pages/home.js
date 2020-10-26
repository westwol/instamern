import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { setNextPage } from '../actions/posts';
import { Feed, Loader } from '../components';
import useFetchFeed from '../hooks/useFetchFeed';

export const Home = () => {

    const { loading, posts, hasMore } = useFetchFeed();

    const dispatch = useDispatch();
    const observer = useRef()
    const lastPostRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                dispatch(setNextPage());
            }
        })
        if (node) observer.current.observe(node);
    }, [ loading, hasMore, dispatch ])
      
    return (
        <>
            <Grid>
                <Grid.Column style={{ margin: '10px' }} width={16}>
                    <Feed 
                        posts={ posts } 
                        lastPostRef={ lastPostRef } 
                    />
                    {
                        loading &&
                        <Loader />
                    }
                </Grid.Column>
            </Grid>
        </>
    )
}
