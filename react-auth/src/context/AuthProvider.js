import * as React from 'react';
import { createContext } from 'react';
import useFirebase from './../hooks/UseFirebase';

export const AuthContext =createContext();

function AuthProvider({children}) {
    const allContext=useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;