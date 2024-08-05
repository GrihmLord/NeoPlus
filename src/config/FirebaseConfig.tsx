// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0MlTUNr2r_hSL8ZPx_7uDsT9O4D47Gdw",
  authDomain: "neoplus-8554c.firebaseapp.com",
  projectId: "neoplus-8554c",
  storageBucket: "neoplus-8554c.appspot.com",
  messagingSenderId: "787047845402",
  appId: "1:787047845402:web:90256483f2ba3534c6cba3",
  measurementId: "G-L2XQM5LJ78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
