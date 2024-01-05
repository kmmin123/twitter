import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_Api_Key,
    authDomain: process.env.REACT_APP_authDomain,
    projectId:  process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket ,
    messagingSenderId:  process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const firebaseInstance = getAuth(app);
export const dbService = getFirestore();