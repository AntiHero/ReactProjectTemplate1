import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Config 
let firebaseConfig = {
  apiKey: "AIzaSyCbGxrYv6qiT1nzRUyKLA1F9kxYVhujei4",
  authDomain: "zerohelp-marioplan.firebaseapp.com",
  databaseURL: "https://zerohelp-marioplan.firebaseio.com",
  projectId: "zerohelp-marioplan",
  storageBucket: "",
  messagingSenderId: "608146844665",
  appId: "1:608146844665:web:73c2d6ae0c2240d3ba2b28",
  measurementId: "G-BPPG81ZGN2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;