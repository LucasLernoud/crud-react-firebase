import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCdrgMgToqsxgWxs9s1CV-GViwJ9fj6U5s",
  authDomain: "react-firebase-redux-a02ce.firebaseapp.com",
  projectId: "react-firebase-redux-a02ce",
  storageBucket: "react-firebase-redux-a02ce.appspot.com",
  messagingSenderId: "745360642645",
  appId: "1:745360642645:web:1cdb35a60f8fb45eb6fadc"
});


export const auth = app.auth();
export default app;