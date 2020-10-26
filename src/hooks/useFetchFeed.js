import axios from 'axios';
import { default as fetcher } from '../config/axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insertPosts, setHasMore } from '../actions/posts';

export default function useFetchFeed() {
    
    const dispatch = useDispatch();
    const { posts, currentPage, hasMore } = useSelector(state => state.posts);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        let cancel;
        setLoading(true);
        fetcher({
            method: 'GET',
            url: `/posts/${currentPage}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            dispatch(insertPosts(res.data.posts));
            dispatch(setHasMore(res.data.maxPages > currentPage))
            setLoading(false);
        }).catch(e => {
            if (axios.isCancel(e)) return;
        })
        return () => cancel();
    }, [ currentPage, dispatch, hasMore ])

    return { loading, posts, hasMore };
}