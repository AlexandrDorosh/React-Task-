import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8DF5q2kRonIYRgo-WvRlLAPqqy7y-NTo",
    authDomain: "task-for-react.firebaseapp.com",
    databaseURL: "https://task-for-react.firebaseio.com",
    projectId: "task-for-react",
    storageBucket: "task-for-react.appspot.com",
    messagingSenderId: "274433776065",
    appId: "1:274433776065:web:5234c198de0822118bf740"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export default firebase;