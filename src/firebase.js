import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyAbFflqW-_jGarFPvdxuUA0fCkjoeFpCTw",
  authDomain: "firechat-208e5.firebaseapp.com",
  projectId: "firechat-208e5",
  storageBucket: "firechat-208e5.appspot.com",
  messagingSenderId: "916735991882",
  appId: "1:916735991882:web:cab9eeabe7106e2f5206b3",
  measurementId: "G-BTNYXR7ZNB"
})

const db= firebaseApp.firestore()

const auth= firebase.auth();

export {db,auth}