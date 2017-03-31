import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDDufl22PUvtVuLjr42Wf0XoQ69LE_lWKo",
    authDomain: "salonbox-prod.firebaseapp.com",
    databaseURL: "https://salonbox-prod.firebaseio.com",
    projectId: "salonbox-prod",
    storageBucket: "salonbox-prod.appspot.com",
    messagingSenderId: "1034877061427"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const storageRef = firebase.storage().ref();
export const firebaseAuth = firebase.auth;
