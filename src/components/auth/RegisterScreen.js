
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { registerUser } from '../../actions/auth';
import { setError, clearError } from '../../actions/ui';


export const RegisterScreen = () => {

    const dispatch = useDispatch(  );

    // Traer el STATE necesario
    const { msgError } = useSelector( state => {
        return state.ui;
    })

    const [ formValues, handleInputChange ] = useForm({
        name: 'Pepe Pruebas',
        email: 'pepe@html.com',
        password: '123456',
        password2: '12345',
    });
    const { name, email, password, password2 } = formValues;


    const handleRegister = ( e ) => {
        e.preventDefault();

        if( isFormValid () ){
            dispatch( registerUser ( email, password, name ) );
        }
    }


    const isFormValid = () => {

        if( name.trim().length === 0 ){
            dispatch( setError( 'El nombre es requerido' ) );
            return false;
        }
        else if( email.trim().length === 0 ){
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
        else if( password2.trim().length === 0 ){
            dispatch( setError( 'Confirmar el password es requerido' ) );
            return false;
        }
        else if( password !== password2 ){
            dispatch( setError( 'Los password No coinciden' ) );
            return false;
        }

        dispatch( clearError );
        return true;
    }

    

    return (
        <>
            <h3 className="auth__title"> Register </h3>

            <form onSubmit={ handleRegister }>

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
                    placeholder="Nombre" 
                    name="name" 
                    className="auth__input"
                    value={ name }
                    onChange={ handleInputChange }
                    />

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

                <input 
                    type="password"
                    placeholder="confirm contraseña" 
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                    />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    
                >
                    Registar
                </button>

                <br />
                <br />
                <Link 
                    className="link"
                    to="/auth/login"
                    >
                    Already registered ? 
                </Link>
            </form>
        </>
    )
}
