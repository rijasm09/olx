import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdoROHUcJU8ERUF2AR5PZeCBSRq6jXmng",
  authDomain: "olx-clone-a900e.firebaseapp.com",
  projectId: "olx-clone-a900e",
  storageBucket: "olx-clone-a900e.appspot.com",
  messagingSenderId: "1056921971534",
  appId: "1:1056921971534:web:a7bce85ded60555a0d8c1f",
  measurementId: "G-8Y5FS71XY7"
  };

  export default firebase.initializeApp(firebaseConfig)