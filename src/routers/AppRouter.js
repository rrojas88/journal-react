
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';

import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const [cheking, setCheking] = useState( true );
    const [isLoggedIn, setIsLoggedIn] = useState( false );

    const dispatch = useDispatch();

    useEffect( () => {
        firebase.auth().onAuthStateChanged( ( user ) => {
            if( user?.uid ){ // Esta logado ?

                dispatch( login( user.uid, user.displayName ) );
                
                setIsLoggedIn( true );
            }
            else {
                setIsLoggedIn( false );
            }

            setCheking( false )
        });
    }, [ dispatch, setCheking, setIsLoggedIn ])

    if( cheking ){
        return (
            <h2> Por favor espere... </h2>
        );
    }

    return (
        <Router>
            <div >
                <Switch>
                    <PublicRoute  
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        path="/"
                        component={ JournalScreen }
                        isAuthenticated={ isLoggedIn }
                    />
                    
                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
