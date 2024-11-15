// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYK8bHuHh3o4uGRiPo8WVn66IazQ0Ig4w",
    authDomain: "humber-demo-ef382.firebaseapp.com",
    databaseURL: "https://humber-demo-ef382-default-rtdb.firebaseio.com",
    projectId: "humber-demo-ef382",
    storageBucket: "humber-demo-ef382.firebasestorage.app",
    messagingSenderId: "155338868121",
    appId: "1:155338868121:web:04e2f37b3d81ec728fbf08"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const newMessage = push(messages);

  set(newMessage, {
    name: name.value,
    message: message.value,
    created_at: serverTimestamp(),
  });

  name.value = "";
  message.value = "";
});