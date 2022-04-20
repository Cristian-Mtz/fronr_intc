import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../Login/Login.css';
import { getUser } from '../../services/Login';
import useAuth from '../../auth/useAuth';



export default function Login() {
    const [info, setInfo] = useState({
        username: '',
        password: ''
    });

    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const previousURL = location.state?.from;

    async function validateUser() {
        await getUser(info)
        .then(response =>{
            console.log(response)
            auth.login({ username: 'Cristian', role: 1, token: '2' });
            // auth.login({ username: response.username, role: response.role, token: response.token });
            history.push(previousURL || '/');
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setInfo((prevState) => ({
        ...prevState,
        [name]: value
        }));
    }

    function prueba(data) {
        console.log(data)
    }

    return (
        <div className="login">
            <div className="login-screen">
                <div className="app-title">
                    <h1>Login</h1>
                </div>
    
                <div className="login-form">
                    <div className="control-group">
                    <input type="text" className="login-field" name='username' value={info.username} placeholder="Username" id="login-name" onChange={handleChange}/>
                    <label className="login-field-icon fui-user" for="login-name"></label>
                    </div>
    
                    <div className="control-group">
                    <input type="password" className="login-field" name='password' value={info.password} placeholder="Password" id="login-pass" onChange={handleChange}/>
                    <label className="login-field-icon fui-lock" for="login-pass"></label>
                    </div>
                    
                    <a className="btn btn-primary btn-large btn-block" onClick={() => validateUser()}>login</a>
                </div>
            </div>
        </div>
    )
}
