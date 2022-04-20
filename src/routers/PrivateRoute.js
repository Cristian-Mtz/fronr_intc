import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PrivateRoute({ component: Component, ...rest }) {
    const auth = useAuth();
    const location = useLocation();

    return <div className="col"><Route {...rest}> {auth.isLogged() ? (<Component />) : (<Redirect to={{pathname: "/Login", state: {from: location}}} />)}</Route></div>;
}
