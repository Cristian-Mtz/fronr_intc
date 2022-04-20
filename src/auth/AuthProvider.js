import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(null);

    const contexValue = {
        user, role, token,
        login(data) {
            setRole(data.role)
            setUser(data.email);
            setToken(data.token);
        },
        logout(data) {
            setUser(data);
            setUser(data);
            setToken(data);
        },
        isLogged() {
            return !!token;
        }
    }

    return <AuthContext.Provider value={contexValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;