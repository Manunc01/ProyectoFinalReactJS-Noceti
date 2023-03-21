import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzin1WPulEVzCE-M-QDfrbHZmXtb2BmBQ",
  authDomain: "tovama-e4cbb.firebaseapp.com",
  projectId: "tovama-e4cbb",
  storageBucket: "tovama-e4cbb.appspot.com",
  messagingSenderId: "434141046531",
  appId: "1:434141046531:web:51430ef2f20815df61eb36"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
