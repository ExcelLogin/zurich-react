// import { Suspense, lazy } from "react";

// import GlobalLoader from "./components/GlobalLoader";
// import { delayImport } from "./components/delayImport";

import UserDashboard from './components/UserDashboard';


import AdminDashBoard from './components/AdminDashBoards';

// const Layout = lazy(() => delayImport(() => import("./components/Layout")));
import Layout from './components/Layout';
import Login from './components/Login/Login/';
import Register from './components/Register'
import Adminlogin from './components/Login/AdminLogin';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import PersistLogin from './components/PersistLogin';
import Home from './components/Home';
import Missing from './components/Missing';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';


// import './App.css'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {
      

  return (
        //  <Suspense fallback={<GlobalLoader />}>
      <Routes>
       <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="register" element={<Register />} />
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
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} redirectTo="/Adminlogin" />}>
            <Route path="/Admin/*" element={<AdminDashBoard/>} />
          </Route>
        </Route>
         
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>

     //  </Suspense>

      


     
  
  )
}

export default App
