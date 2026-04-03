import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white', display: 'flex', gap: '15px' }}>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
