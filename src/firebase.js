import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJmbgiw9dGbmWL7SBuGuPoUvRpuReEmrQ",
  authDomain: "clone-e8dc7.firebaseapp.com",
  projectId: "clone-e8dc7",
  storageBucket: "clone-e8dc7.appspot.com",
  messagingSenderId: "504003536251",
  appId: "1:504003536251:web:ffcdb15449b0d613fd09de",
  measurementId: "G-SCHQTSH5HP",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
