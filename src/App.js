import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <Router>
      <div className="app-container">
        <div className={`navbar-hover-area ${isNavBarVisible ? 'visible' : ''}`}>
          <div className="arrow-icon" onClick={toggleNavBar}>
            <i className={`fa ${isNavBarVisible ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
          </div>
          <NavBar />
        </div>
        <div className="main-content">
          <Routes>
            {/* Use `element` instead of `component` */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            {/* Optionally add a default route */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
