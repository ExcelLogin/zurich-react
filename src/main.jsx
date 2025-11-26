import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider } from './context/AuthProvider';
import store from './store/store';
import { StoreProvider } from 'easy-peasy';
import './index.css'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <AuthProvider>
         <StoreProvider store={store}>
             <Routes>
               <Route path="/*" element={<App />} />
            </Routes>
         </StoreProvider>
        </AuthProvider>
       </BrowserRouter>
  </StrictMode>
)
