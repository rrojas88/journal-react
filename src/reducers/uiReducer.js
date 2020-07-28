import { types } from '../types/types';

const initState = {
    loading: false,
    msgError: null
}

export const uiReducer = ( state = initState, action ) => {

    switch( action.type )
    {
        case types.uiSetError: 
            return {
                ...state, /// Mantiene demas STATE anterior
                msgError: action.payload
            }
        case types.uiClearError: 
        return {
            ...state, /// Mantiene demas STATE anterior
            msgError: null
        }

        case types.uiInitLoading: 
        case types.uiEndLoading: 
            return {
                ...state, /// Mantiene demas STATE anterior
                loading: action.payload
            }
        
        default:
            return state;
    }

}

