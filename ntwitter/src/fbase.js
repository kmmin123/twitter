

import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_Api_Key,
    authDomain: process.env.REACT_APP_authDomain,
    projectId:  process.env.projectId,
    storageBucket: process.env.storageBucket ,
    messagingSenderId:  process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const firebaseInstance = getAuth(app);
