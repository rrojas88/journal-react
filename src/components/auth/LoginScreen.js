
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { 
    startLogin, 
    googleLogin 
} from '../../actions/auth';
import { clearError, setError } from '../../actions/ui';



export const LoginScreen = () => {
    

    const dispatch = useDispatch(  );

    // Traer el STATE necesario
    const { loading, msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'pepe@html.com',
        password: ''
    });
    const { email, password } = formValues;


    const isFormValid = () => {
        if( email.trim().length === 0 ){
            dispatch( setError( 'El correo es requerido' ) );
            return false;
        }
        else if( ! validator.isEmail( email ) ){
            dispatch( setError( 'El correo es inválido' ) );
            return false;
        }
        else if( password.trim().length === 0 ){
            dispatch( setError( 'El pasword es requerido' ) );
            return false;
        }

        dispatch( clearError() );
        return true;
    }
    const handleLogin = ( e ) => {
        e.preventDefault();

        if( isFormValid() ){
            dispatch( startLogin( email, password ) );
        }
    }

    const handleGoogleLogin = () => {
        dispatch( googleLogin() );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin }>

                {
                    msgError && 
                    (
                        <div className="auth__alert-error">
                        { msgError }
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="email@html.com" 
                    name="email" 
                    className="auth__input"
                    value={ email }
                    onChange={ handleInputChange }
                    />

                <input 
                    type="password"
                    placeholder="contraseña" 
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                    />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Entrar
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                            onClick={ handleGoogleLogin }
                        >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    className="link"
                    to="/auth/register"
                    >
                    Create new account    
                </Link>
            </form>
        </>
    )
}
