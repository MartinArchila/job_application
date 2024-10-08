// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddApplication from './pages/AddApplication';
import Applications from './pages/Applications';
import Navbar from './components/Navbar';
import './styles.css'; 
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/add-application" element={<AddApplication />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
