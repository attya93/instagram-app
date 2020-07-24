import firebase from 'firebase';

const firebaseApp = firebase.initiallizeApp({
    apiKey: "AIzaSyD6GEshejmvazKqxOljwuTSsq6Zvlh7NCo",
    authDomain: "instegram-app.firebaseapp.com",
    databaseURL: "https://instegram-app.firebaseio.com",
    projectId: "instegram-app",
    storageBucket: "instegram-app.appspot.com",
    messagingSenderId: "392109079945",
    appId: "1:392109079945:web:79b83eaedb50ea611eb558",
    measurementId: "G-Q9HPX3YLT2"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };