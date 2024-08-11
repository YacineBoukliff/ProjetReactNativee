// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOC0JgxhAjGmXIOSNTd_arNEpRUT3RMZQ",
  authDomain: "appli-mobile-voyageia.firebaseapp.com",
  projectId: "appli-mobile-voyageia",
  storageBucket: "appli-mobile-voyageia.appspot.com",
  messagingSenderId: "913269733296",
  appId: "1:913269733296:web:2ff6cc2e21303a27670875",
  measurementId: "G-QZ6PMVZVLC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
persistence: getReactNativePersistence(AsyncStorage);
