// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {getDatabase, onValue, ref} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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

// Load messages on data event
onValue(messages, (snapshot) => {
  // Create a reference
  const ul = document.getElementById("messages");
  ul.replaceChildren();

  // Loop through messeages and add them to the ul
  snapshot.forEach((childSnapshot) => {
    // Fetch the data from the snapshot
    const childData = childSnapshot.val();

    // Create a text node with message and name
    const text = document.createTextNode(
      childData.message + " ~ " + childData.name
    );

    // Create a li element
    const li = document.createElement("li");

    // Append li and text to the ul
    li.appendChild(text);
    ul.appendChild(li);
  });
});