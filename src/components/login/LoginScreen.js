import React, { useState, useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const [inputValue, setInputValue] = useState(''); // ''
    
    const handleLogin = (e) => {
        e.preventDefault();
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login, // accion
            payload: { // valores de autenticacion
                name: inputValue
            }
        });
        setInputValue('');
        history.replace( lastPath );
        
    };
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    };

    return (
        <div className="container mt-5">
            <form onSubmit={ handleLogin }>
                <h1>Login</h1>

                <input type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    placeholder="usuario" />
                <hr />
                <button
                    className="btn btn-primary"
                    onClick={ handleLogin }>
                    Login
                </button>
            </form>
        </div>
    )
}
