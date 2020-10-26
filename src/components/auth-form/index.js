import React from 'react';
import PropTypes from 'prop-types';

export default function AuthForm({ 
    isSignUp, 
    email, 
    name, 
    username, 
    password, 
    handleInputChange, 
    handleSubmitForm 
}) {
    return (
        <>
            <form className="auth__form">
                <img 
                    src="/assets/logo.png"
                    alt="logo"
                    className="auth__logo"
                />
                {
                    (isSignUp) &&
                        (
                            <h1 className="auth__title">Sign up to see photos and videos from your friends.</h1>
                        )
                }
                <div className="auth__input-field">
                    <input
                        type="email"
                        id="email"
                        name="email" 
                        value={ email }
                        onChange={ handleInputChange }
                    />
                    <label className={ email !== '' ? 'valid' : ''} htmlFor="email">Email</label>
                </div>
                {
                    (isSignUp) &&
                        (
                            <>
                                <div className="auth__input-field">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={ name }
                                        onChange={ handleInputChange }
                                    />
                                    <label className={ name !== '' ? 'valid' : ''} htmlFor="name">Name</label>
                                </div>
                                <div className="auth__input-field">
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={ username }
                                        onChange={ handleInputChange }
                                    />
                                    <label className={ username !== '' ? 'valid' : ''} htmlFor="username">Username</label>
                                </div>
                            </>
                        )
                }
                <div className="auth__input-field">
                    <input
                        type="password"
                        id="password"
                        name="password" 
                        value={ password }
                        onChange={ handleInputChange }
                    />
                    <label className={ password !== '' ? 'valid' : ''} htmlFor="password">Password</label>
                </div>
                <div className="auth__button" onClick={ handleSubmitForm }>
                    {
                        (isSignUp) ? 'Sign up' : 'Log In'
                    }
                </div>
                {
                    (isSignUp)
                        ? (
                            <p className="auth__terms">By signing up, you agree to our <strong>Terms</strong>, <strong>Data Policy</strong> and <strong>Cookies Policy</strong>.</p>
                        )
                        : (
                            <br/>
                        )
                }
            </form>
        </>
    )
}

AuthForm.propTypes = {
    isSignUp: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmitForm: PropTypes.func.isRequired
};