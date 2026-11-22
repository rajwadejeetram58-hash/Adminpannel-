// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnVY-3y55vWDiYDeiB4S2FWIF0jW_ZnxA",
  authDomain: "zyrex-hack.firebaseapp.com",
  databaseURL: "https://zyrex-hack-default-rtdb.firebaseio.com",
  projectId: "zyrex-hack",
  storageBucket: "zyrex-hack.firebasestorage.app",
  messagingSenderId: "472650083702",
  appId: "1:472650083702:web:557e2d837c6916d4bd5e57",
  measurementId: "G-ZH4CT7HESE"
};
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };