import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider } from './context/AuthProvider';
import store from './store/store';
import { StoreProvider } from 'easy-peasy';
import StoreProviderWrapper from './store/StoreProviderWrapper';
import './index.css'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <AuthProvider>
  
           <StoreProviderWrapper>
            <Routes>
               <Route path="/*" element={<App />} />
            </Routes>
           </StoreProviderWrapper>
     
        </AuthProvider>
       </BrowserRouter>
  </StrictMode>
)
