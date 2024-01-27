// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6sDgvjLUrhXsK3G5HLSZESFmkXUaIgUQ",
  authDomain: "netflixgpt-27.firebaseapp.com",
  projectId: "netflixgpt-27",
  storageBucket: "netflixgpt-27.appspot.com",
  messagingSenderId: "776440718917",
  appId: "1:776440718917:web:9caebfa98a5af5152d652c",
  measurementId: "G-1SHGBRMGWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();