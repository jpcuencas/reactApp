import { useState } from 'react';

/**
 * gestionar los cambios del formulario de busqueda
 * @param {*} initialState 
 * @returns 
 */
export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    };


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    };

    return [ values, handleInputChange, reset ];

};