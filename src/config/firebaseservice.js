import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseConfig from "./firebase";

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();


export { db, auth }









// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/database";

// import firebaseConfig from "./firebase"

// firebase.initializeApp(firebaseConfig);


// let db = firebase.database;
// let auth = firebase.auth;

// export { db, auth }