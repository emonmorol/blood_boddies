// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU7n0Q5d7bohBPueuZG4sM_qoprDwBDCM",
  authDomain: "blood-buddies-donation.firebaseapp.com",
  projectId: "blood-buddies-donation",
  storageBucket: "blood-buddies-donation.appspot.com",
  messagingSenderId: "638063744087",
  appId: "1:638063744087:web:af11d03e7f4765f2de3f12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
