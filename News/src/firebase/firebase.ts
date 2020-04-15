import * as firebase from 'firebase/app';
import "firebase/auth"
import 'firebase/database';
 
// ADD YOUR CREDENTIALS
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
};

export const auth = firebase.auth();
export const db = firebase.database();