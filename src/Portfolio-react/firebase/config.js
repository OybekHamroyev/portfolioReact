import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional - Project settings dan olinadi

const firebaseConfig = {
    apiKey: "AIzaSyD52YrtA4LeoH-MLgNkEYndz_jhck9Foy0",
    authDomain: "react-portfolio-97e0b.firebaseapp.com",
    projectId: "react-portfolio-97e0b",
    storageBucket: "react-portfolio-97e0b.appspot.com",
    messagingSenderId: "114450590383",
    appId: "1:114450590383:web:b746ee353290ae00ddc25a",
    measurementId: "G-Z04X1JLP66"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
//firebase.com dagi proyektimizdagi firestore database ga kiramiz create Database->
//security rules ni yangilaymiz


//ma'luot joylash
//storage ga kirib upload file(fayl yuklash)
//firestore database da collectio ochamiz
//Collection ID ga nom beramiz (portfolio)
//Document ID - V49Jte2AuQlEw1MjmOaL(auto ID)
//Field - (title) , type -string, value - Salom, web-saytimizga xush kelibsiz --save

//agar yana field (boshqa ma'lumot qatori) qushmoqchi blsak Add field ni bosamiz
//field - description, type - string, value - "dsfsdfsdf"
//rasm quyish, field - image, type - string, value- IMG_20191030_204808.jpg