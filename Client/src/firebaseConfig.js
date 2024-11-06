// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpXr_nezGCPhF-LG1uNPHhQ-IgbRPkxfg",
    authDomain: "bodeg-huala.firebaseapp.com",
    projectId: "bodeg-huala",
    storageBucket: "bodeg-huala.firebasestorage.app",
    messagingSenderId: "1057792638388",
    appId: "1:1057792638388:web:4a48c451aa314024a5c6e1",
    measurementId: "G-TKJ2TDKVL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

