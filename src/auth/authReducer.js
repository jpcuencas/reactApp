import { types } from '../types/types';

// const initialState = {
//     name: '',
//     logged: false
// }

/**
 * Reducer para gestionar 
 * @param {session} state 
 * @param {*} action 
 * @returns 
 */
export const authReducer = (state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload, // datos de autenticacion se añaden al objeto
                logged: true
            };

        case types.logout:
            return {
                logged: false
            };
    
        default:
            return state;
    }

};