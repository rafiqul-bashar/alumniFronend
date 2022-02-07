
import React, { createContext } from 'react';
import Auth from './Auth';

export const AuthenticationContext = createContext()

const AuthProvider = ({ children }) => {
    const allContext = Auth()
    return (
        <AuthenticationContext.Provider value={allContext}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthProvider;