import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5qwWZfuWSidur-xX2Isd1u1kaZXMdAcI",
  authDomain: "clone-40911.firebaseapp.com",
  databaseURL: "https://clone-40911.firebaseio.com",
  projectId: "clone-40911",
  storageBucket: "clone-40911.appspot.com",
  messagingSenderId: "1017334563579",
  appId: "1:1017334563579:web:09ed066ca9f10a1025e65e"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

  