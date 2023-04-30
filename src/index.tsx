import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { firebaseConfig } from './enviroments/enviroment';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


