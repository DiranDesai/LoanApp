import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import "./index.css"
import useAuth from './hooks/useAuth';
import ApplyLoan from './pages/ApplyLoan';

function App() {
  const {token} = useAuth()

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);


  return (
    <>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/apply" element={token ? <ApplyLoan /> : <Navigate to="/login" />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={token ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
    </>
  )
}

export default App
