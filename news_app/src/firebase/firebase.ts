import * as firebase from 'firebase/app';
import "firebase/auth"
import 'firebase/database';

import {API_KEY} from './apiKey'; 

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "tsnewsapp.firebaseapp.com",
  databaseURL: "https://tsnewsapp.firebaseio.com",
  projectId: "tsnewsapp",
  storageBucket: "tsnewsapp.appspot.com",
  messagingSenderId: "692644684789",
  appId: "1:692644684789:web:89d0c2373b03ca6b54f6bc"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
};

export const auth = firebase.auth();
export const db = firebase.database();