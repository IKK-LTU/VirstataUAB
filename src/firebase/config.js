import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCkBLlQqNc6TPn-6s1a1MoidEdsnqdgMwQ",
    authDomain: "resolute-arcana-273910.firebaseapp.com",
    databaseURL: "https://resolute-arcana-273910.firebaseio.com",
    projectId: "resolute-arcana-273910",
    storageBucket: "resolute-arcana-273910.appspot.com",
    messagingSenderId: "922042415450",
    appId: "1:922042415450:web:61513cb2d047fc582e9b63",
    measurementId: "G-EZTDW9S2RR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export { projectStorage, projectFirestore, timestamp };