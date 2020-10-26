import React from 'react';
import useLoggedIn from '../hooks/useLoggedIn';
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from "react-router-dom";
import { Loader } from '../components';
import { AuthRouter } from './AuthRouter'
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { Home } from '../pages/home';
import { Profile } from '../pages/profile';

export const AppRouter = () => {

    const { loggedIn, isTokenChecked } = useLoggedIn();

    if (!isTokenChecked) {
        return <Loader />
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ loggedIn }
                    />
                    <PrivateRoute
                        isAuthenticated={ loggedIn }
                        exact
                        path='/'
                        component={ Home }  
                    />
                    <PrivateRoute
                        isAuthenticated={ loggedIn }
                        exact
                        path='/profile/:username'
                        component={ Profile }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
