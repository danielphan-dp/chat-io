import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/AuthPages/LoginPage/LoginPage';
import RegisterPage from './pages/AuthPages/RegisterPage/RegisterPage';
import Dashboard from './pages/Dashboard/Dashboard';
import AlertNotification from './shared/components/AlertNotification';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
};

export default App;
