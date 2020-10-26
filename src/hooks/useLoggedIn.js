import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogingWithToken } from '../actions/auth';

export default function useLoggedIn() {
    
    const dispatch = useDispatch();
    const [ isTokenChecked, setIsTokenChecked ] = useState(false);
    const { loggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        if (!isTokenChecked) {
            dispatch(startLogingWithToken())
                .then(() => {
                    setIsTokenChecked(true);
                })
        }
    }, [ dispatch, isTokenChecked ])

    return { loggedIn, isTokenChecked };
}