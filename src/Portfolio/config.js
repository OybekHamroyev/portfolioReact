import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAj28gSILlsNb8i2ntNmln9Qfz-IkREtEc",
    authDomain: "portfolio-website-777.firebaseapp.com",
    projectId: "portfolio-website-777",
    storageBucket: "portfolio-website-777.appspot.com",
    messagingSenderId: "409611240330",
    appId: "1:409611240330:web:d73de6baed87bcf8513e73",
    measurementId: "G-XFF9F2EBRW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;