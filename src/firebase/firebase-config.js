
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1I4I48LiPj8Bw_8oP4nHh4taSMg-uHAIa",
    authDomain: "journal-2dcfc.firebaseapp.com",
    databaseURL: "https://journal-2dcfc.firebaseio.com",
    projectId: "journal-2dcfca",
    storageBucket: "journal-2dcfc.appspot.com",
    messagingSenderId: "722015936056a",
    appId: "1:722015936056:web:6df199466b7a208cd150cda"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const gooleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    gooleAuthProvider,
    firebase
}