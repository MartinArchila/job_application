// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddApplication from './pages/AddApplication';
import Applications from './pages/Applications';
import NavBar from './components/NavBar';  // Correct import
import './styles.css'; 
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box'; 
import Signup from './pages/Signup';
import Login from './pages/Login';
import Confirmation from './pages/signUpConfirmation';

function App() {
  const location = useLocation(); // Get current route location
  
  // Pages where NavBar should be hidden
  const hideNavBar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup'
  || location.pathname === '/confirmation';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        {/* Conditionally render NavBar based on route */}
        {!hideNavBar && <NavBar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-application" element={<AddApplication />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
