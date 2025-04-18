import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import "./index.css"
import useAuth from './hooks/useAuth';

function App() {
  const {token} = useAuth()
  const navigate = useNavigate()

  return (
    <>
     <Routes>
        <Route path="/" element={token ? <Profile /> : <Login />} />
        <Route path="/profile" element={token ? <Profile /> : <Login />} />
        <Route path="/login" element={token ? navigate("/profile") : <Login />} />
        <Route path="/signup" element={token ? navigate("/profile") : <SignUp />} />
      </Routes>
    </>
  )
}

export default App
