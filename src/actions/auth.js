
import Swal from 'sweetalert2'

import { types } from "../types/types";
import { firebase, gooleAuthProvider } from '../firebase/firebase-config';
import { //setError, 
    setLoading, 
    endLoading 
} from "./ui";

/* Funciones ASYNCRONAS retornan una funcion !!!!!!!!
export const startLogin = ( email, password ) => {
    return ( dispatch ) => {
        setTimeout( ()=>{
            dispatch( login( 111, 'Lucastañeda' ) )
        }, 3500)
    }
}*/
export const startLogin = ( email, password ) => {
    return ( dispatch ) => {

        dispatch( setLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch( login ( user.uid, user.displayName) );

                dispatch( endLoading() );
            })
            .catch( err => {
                console.log( err );
                //dispatch( setError( err.message ) )
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });

                dispatch( endLoading() );
            })
    }
}


export const googleLogin = () => {

    return ( dispatch ) => {

        firebase.auth().signInWithPopup( gooleAuthProvider )
            .then( ({ user }) => {
                
                dispatch( login ( user.uid, user.displayName) );
            });
    }
}


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}


export const registerUser = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {
                
                await user.updateProfile({ displayName: name });

                dispatch( login ( user.uid, user.displayName) );
            })
            .catch( err => {
                console.log( err )
                //dispatch( setError( err.message ) )
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
    }
}





export const startLogout = () => {
    return async ( dispatch ) => {

        await firebase.auth().signOut()
        
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})


