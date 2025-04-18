import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import "./index.css"

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
