import firebase from 'firebase';

// put these credentials into .env
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6GEshejmvazKqxOljwuTSsq6Zvlh7NCo",// process.env.REACT_APP_FIREBASE_API_KEY
    authDomain: "instegram-app.firebaseapp.com",
    databaseURL: "https://instegram-app.firebaseio.com",
    projectId: "instegram-app",
    storageBucket: "instegram-app.appspot.com",
    messagingSenderId: "392109079945",
    appId: "1:392109079945:web:79b83eaedb50ea611eb558",// process.env.REACT_APP_FIREBASE_APP_ID
    measurementId: "G-Q9HPX3YLT2"// process.env.REACT_APP_FIREBASE_MEASUREMENTId
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };