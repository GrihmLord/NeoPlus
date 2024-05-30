// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTkJOgBsjHrZz1OvmPaEb3_MFQLXSiufY",
  authDomain: "prjctlazrus.firebaseapp.com",
  projectId: "prjctlazrus",
  storageBucket: "prjctlazrus.appspot.com",
  messagingSenderId: "793985928839",
  appId: "1:793985928839:web:50ab3faad3037e2d9c3222",
  measurementId: "G-62WCEKB4P3"
};

// Initialize Firebase
let app;
let analytics;
try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
} catch (error) {
  console.error("Firebase initialization error", error);
}

export default app;

// Path: functions/modules/notifications.js
const { onRequest } = require("firebase-functions/v2/https");

exports.sendNotification = onRequest((request, response) => {

    // Logic to send notifications
}
);

// Path: functions/modules/dataProcessing.js
const { onRequest } = require("firebase-functions/v2/https");

exports.processData = onRequest((request, response) => {
    // Logic for data processing
}
);

// Path: functions/modules/notifications.js
const { onRequest } = require("firebase-functions/v2/https");

exports.sendNotification = onRequest((request, response) => {
    // Logic to send notifications
}
);

// Path: functions/modules/dataProcessing.js
const { onRequest } = require("firebase-functions/v2/https");

exports.processData = onRequest((request, response) => {
    // Logic for data processing
}
);

// Path: functions/modules/notifications.js
const { onRequest } = require("firebase-functions/v2/https");
