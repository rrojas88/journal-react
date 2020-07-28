
import { types } from '../types/types';


export const setError = ( msgError ) => ({
    type: types.uiSetError,
    payload: msgError
});
export const clearError = (  ) => ({
    type: types.uiClearError
});


export const setLoading = (  ) => ({
    type: types.uiInitLoading,
    payload: true
});
export const endLoading = (  ) => ({
    type: types.uiEndLoading,
    payload: false
});
