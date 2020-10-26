import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Auth } from '../pages/auth';

export const AuthRouter = () => {
    return (
        <Switch>
            <Route
                path="/auth/login"
                component={ Auth }
            />
            <Redirect to="/auth/login" />
        </Switch>
    )
}
