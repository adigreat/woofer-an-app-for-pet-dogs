import firebase from 'firebase';
import  firebaseui from 'firebaseui'

const firebaseConfig = {
     apiKey: "AIzaSyBn-D6e-W4SJvWRh4Bpt2lR75Og6OnHkOk",
    authDomain: "booksanta-e0e4d.firebaseapp.com",
    databaseURL: "https://booksanta-e0e4d.firebaseio.com",
    projectId: "booksanta-e0e4d",
    storageBucket: "booksanta-e0e4d.appspot.com",
    messagingSenderId: "533735982098",
    appId: "1:533735982098:web:05759125f2bbd0b2e3c4cb",
    measurementId: "G-60L952YRY1"
};

firebase.initializeApp(firebaseConfig);
export default firebase;




// const CLIENT_ID = KEYS.CLIENT_ID;
// const API_KEY = KEYS.REACT_APP_API_KEY;
