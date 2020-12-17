import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3_Vq1P4gFUPDhyFfyApmATotZp5TBGZE",
    authDomain: "twitter-clone-98c05.firebaseapp.com",
    databaseURL: "https://twitter-clone-98c05.firebaseio.com",
    projectId: "twitter-clone-98c05",
    storageBucket: "twitter-clone-98c05.appspot.com",
    messagingSenderId: "877350894322",
    appId: "1:877350894322:web:ce3cc9a81b713f7c256e6b",
    measurementId: "G-80L0TBE9TP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
