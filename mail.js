// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8wREpeE3ychUg7RHsA0gBJjjVWXh4igw",
  authDomain: "contact-form-2d1a4.firebaseapp.com",
  databaseURL: "https://contact-form-2d1a4-default-rtdb.firebaseio.com",
  projectId: "contact-form-2d1a4",
  storageBucket: "contact-form-2d1a4.firebasestorage.app",
  messagingSenderId: "671346325280",
  appId: "1:671346325280:web:8ce7202bea849ff40c4945",
  measurementId: "G-Y91L6PKNQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Reference Database
const db = getDatabase(app);
var contactFormDB = ref(db, "contactForm")

// Submit Form
document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");

    console.log(name, email, message);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}