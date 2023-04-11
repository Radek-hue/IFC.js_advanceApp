import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyAvYj4PHa6CxZMm6Z-UMK8nfy4h7ms3jlw",
  authDomain: "ifcjs-frontend-app.firebaseapp.com",
  projectId: "ifcjs-frontend-app",
  storageBucket: "ifcjs-frontend-app.appspot.com",
  messagingSenderId: "778572662256",
  appId: "1:778572662256:web:57ad2815d0e8d9fa078935"
};
initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


