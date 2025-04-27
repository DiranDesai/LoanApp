import { useState, useEffect, useContext, lazy, Suspense } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const ApplyLoan = lazy(() => import('./pages/ApplyLoan'));

import "./index.css"
import useAuth from './hooks/useAuth';
import RouteLoader from './components/RouteLoader';
import { LoaderContext } from './context/LoaderContext';
import Loader from './components/Loader';
import { getCurrentUser } from './services/authService';
import {UPDATE_PROFILE} from "./types"

function App() {
  const {token, dispatch} = useAuth()
  const { isLoading } = useContext(LoaderContext);

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  useEffect(() => {
    const fetchData = async() => {
      const {_doc} = await getCurrentUser(token)
      dispatch({type: UPDATE_PROFILE, payload: _doc})
    }
    if (token) {
      fetchData()
    }

  }, [token])


  return (
    <>
        <RouteLoader />
        {isLoading && <Loader />}
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={token ? <Home /> : <Login />} />
            <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/apply" element={token ? <ApplyLoan /> : <Navigate to="/login" />} />
            <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element={token ? <Navigate to="/" /> : <SignUp />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
          </Routes>
        </Suspense>
    </>
  )
}

export default App

