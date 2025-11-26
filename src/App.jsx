import UserDashboard from './components/UserDashboard';
import AdminDashBoard from './components/AdminDashBoards';
import Layout from './components/Layout';
import Login from './components/Login/Login/';
import Adminlogin from './components/Login/AdminLogin';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import PersistLogin from './components/PersistLogin';
import Home from './components/Home';
import Missing from './components/Missing';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';
import useAxiosFetch from './hooks/useAxiosFetch';
import './App.css'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {

//   const usr = useStoreState((state) => state.usr);
//   const setUser= useStoreActions((actions) => actions.setUser);

//   const { data, fetchError, isLoading } = useAxiosFetch('/userData');
  
//   useEffect(() => { 
//     console.log(data)
//     console.log(fetchError)
//     setUser(data);
//   }, [data,setUser])  

// console.log(usr) 


  return (
      <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
         <Route path="Adminlogin" element={<Adminlogin />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
         <Route path="/" element={<Home />} />

          {/* protected routes */}

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.User]} />}>
              <Route path="/Userdashboard/*" element={<UserDashboard/>} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="/Admin/*" element={<AdminDashBoard/>} />
            </Route>

          </Route>
         
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  
  )
}

export default App
