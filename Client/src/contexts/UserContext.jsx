import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Lógica de autenticación (puedes reemplazar esto con una llamada a una API)
        if (username === 'admin' && password === 'password') {
            setUser({ username, isAuthenticated: true });
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};