import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './loginpage';
import Register from './Registrationpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Default route renders Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
