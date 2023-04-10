import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BuildingViewer } from './component/building-viewer';
import { LoginForm } from './component/login-form';
import { MapViewer } from './component/map-viewer';

function App() {
  return (
<Router>
  <Routes>
    <Route path='/building' element={<BuildingViewer/>} />
    <Route path='/louding' element={<LoginForm />} />
    <Route path='/map' element={<MapViewer/>} />
    <Route path='/' element={<LoginForm/>} />
  </Routes>
</Router>
  );
}

export default App;
