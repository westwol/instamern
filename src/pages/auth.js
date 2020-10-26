import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLoging } from '../actions/auth';
import { AuthForm } from '../components';
import { useForm } from '../hooks/useForm';

export const Auth = () => {

    const dispatch = useDispatch();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isSignUp, setIsSignUp ] = useState(true);
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        name: '',
        username: '',
        password: ''
    });

    const { email, name, username, password } = formValues;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (isSignUp) {
            //dispatch(startEmailAndPasswordRegister(email, name, username, password));
        } else {
            setIsLoading(true);
            dispatch(startLoging(email, password));
            setIsLoading(false);
        }
    }
    
    return (
        <div className="auth">
            <div className="auth__container">
                <AuthForm
                    isSignUp={ isSignUp }
                    email={ email }
                    name={ name }
                    username={ username }
                    password={ password }
                    handleInputChange={ handleInputChange }
                    handleSubmitForm={ handleSubmitForm  }
                />
                <div className="auth__form-footer">
                    {
                        (isSignUp)
                            ? (
                                <p>Have an account? <span onClick={ () => setIsSignUp(false) }>Log in</span></p>
                            )
                            : (
                                <p>Don't have an account? <span onClick={ () => setIsSignUp(true) }>Sign up</span></p>
                            )
                    }
                </div>
                <p className="auth__get-app">Get the app</p>
                <div className="auth__apps">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="appstore"/>
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="playstore"/>
                </div>
            </div>
        </div>
    )
}
