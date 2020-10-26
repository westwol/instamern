import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component, 
    ...rest 
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                (isAuthenticated)
                    ?   <>
                            <DefaultLayout>
                                <Component { ...props} />
                            </DefaultLayout>
                        </>
                    : <Redirect to="/auth/login" />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
