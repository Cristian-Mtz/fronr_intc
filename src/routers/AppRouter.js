import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../components/navigation/Navbar';
import Loggin from '../components/Login/Login';
import Home from '../components/Home/Home';
import Users from '../components/Users/Users';
import PrivateRoute from './PrivateRoute';
import useAuth from '../auth/useAuth';
import PublicRoute from './PublicRoute';
import Products from '../components/Products/Products';

function AppRouter() {
    const auth = useAuth();
    return (
        <>
            <Router>
                {auth.isLogged() && (<Navbar />)}
                <Switch>
                    <PublicRoute exact path='/Login' component={Loggin} />
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute exact path='/users' component={Users} />
                    <PrivateRoute exact path='/products' component={Products} />
                </Switch>
            </Router>
        </>
    );
}

export default AppRouter;
