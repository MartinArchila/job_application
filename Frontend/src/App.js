// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddApplication from './pages/AddApplication';
import Applications from './pages/Applications';
import Navbar from './components/Navbar';
import './styles.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/add-application" element={<AddApplication />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </Router>
  );
}

export default App;
