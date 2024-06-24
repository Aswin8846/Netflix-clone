import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCK2l08jp7jSj2Cdj6C8EpKeVb-cqXNpww",
  authDomain: "netflix-clone-63d30.firebaseapp.com",
  projectId: "netflix-clone-63d30",
  storageBucket: "netflix-clone-63d30.appspot.com",
  messagingSenderId: "806109931139",
  appId: "1:806109931139:web:0c99f43fc330cc58489db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
export default db;




// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyCK2l08jp7jSj2Cdj6C8EpKeVb-cqXNpww",
//     authDomain: "netflix-clone-63d30.firebaseapp.com",
//     projectId: "netflix-clone-63d30",
//     storageBucket: "netflix-clone-63d30.appspot.com",
//     messagingSenderId: "806109931139",
//     appId: "1:806109931139:web:0c99f43fc330cc58489db6"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export {auth}
//   export default db;