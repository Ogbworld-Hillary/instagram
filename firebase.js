import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCirSsh63PpOxZORBHWO5Qzt12ohP2tQwA",
    authDomain: "instagram-d74fb.firebaseapp.com",
    projectId: "instagram-d74fb",
    storageBucket: "instagram-d74fb.appspot.com",
    messagingSenderId: "1041022255215",
    appId: "1:1041022255215:web:c4a55f13db651836e0cd9a"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }
