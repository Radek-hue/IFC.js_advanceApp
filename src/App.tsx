import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BuildingViewer } from './component/building/building-viewer';
import { LoginForm } from './component/user/login-form';
import { MapViewer } from './component/map/map-viewer';
import { ContextProvider } from './middleware/context-provider';

function App() {
  return (
<ContextProvider>
<Router>
  <Routes>
    <Route path='/building' element={<BuildingViewer/>} />
    <Route path='/login' element={<LoginForm />} />
    <Route path='/map' element={<MapViewer/>} />
    <Route path='/' element={<LoginForm/>} />
  </Routes>
</Router>
</ContextProvider>
  );
}

export default App;
