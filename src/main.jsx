import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import AuthState from './context/authContext/authState';
import { LoaderProvider } from './context/LoaderContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LoaderProvider>
      <AuthState>
          <App />
      </AuthState>
    </LoaderProvider>
    </BrowserRouter>
  </StrictMode>
)
