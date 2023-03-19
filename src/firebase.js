
import firebase from "firebase"




const firebaseConfig = {
  apiKey: "AIzaSyDJHLInWQ_STd0rjxb8439ZJGBPbZTHSa8",
    authDomain: "disneyplus-clone-39d89.firebaseapp.com",
    projectId: "disneyplus-clone-39d89",
    storageBucket: "disneyplus-clone-39d89.appspot.com",
    messagingSenderId: "377428517807",
    appId: "1:377428517807:web:c519f730bf5d688f1c455a",
    measurementId: "G-V55SSMFP5S"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth,provider,storage};
export default db;