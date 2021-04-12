import React, { useReducer, useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
/**
 * Inicializacion
 * @returns estado inicial aplicacion
 */
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
};


export const MainApp = () => {
    
    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user]);

// <React.StrictMode>
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
}
