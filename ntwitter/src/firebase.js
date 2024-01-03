

import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apikey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId:  process.env.projectId,
    storageBucket: process.env.storageBucket ,
    messagingSenderId:  process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };

  export default firebase.initializeApp(firebaseConfig);
