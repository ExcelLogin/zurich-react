import logo from '../assets/images.jpeg';
import AdminSideBar from './AdminDashHome/AdminSideBar';
import AdminBoardHome from './AdminDashHome/AdminBoardHome';
import User from './AdminDashHome/User';
import TopBalance from './AdminDashHome/TopBalance';
import DeductBalance from './AdminDashHome/DeductBalance';
import { FaRegUserCircle  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { useState,useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useStoreActions,useStoreState } from 'easy-peasy';
import { useNavigate, useLocation } from "react-router-dom";


const AdminDashBoard = () => { 
   const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    const setUsers = useStoreActions((actions) => actions.setUsers);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true; 
        const controller = new AbortController();

        const getUsers = async () => {
          setIsLoading(true);
            try {
                const response = await axiosPrivate.get('Admin/users', {
                    signal: controller.signal
                });
                // console.log(response.data);
                isMounted && setUsers(response.data.userD);
            } catch (err) {
                console.error(err);
                 if (isMounted) {
                    setFetchError(err.message);
                    setUsers([]);
                }
                navigate('/Admin', { state: { from: location }, replace: true });
            }finally {
                isMounted && setIsLoading(false);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

  return (
     <>
     <header className='fixed top-0 z-10 bg-gray-900 text-slate-50 w-full'>
      <section className='w-full flex flex-row justify-between'>
        <div >
          <Link to="/Home" className="flex items-center font-bold text-slate-100  ">

          {/* Zurich Online bank */}
          <img src={logo} className='w-24 h-8' alt="logo"/>
          <span className=' px-2 text-xs italic text-slate-50'> Zurich Online banking</span>
          
          </Link>
        </div>
        <div className='flex flex-row items-center text-xl gap-3 pr-2'>
        <IoIosNotifications />
        <FaRegUserCircle /> 
        </div>
     </section>
    </header>
     <main class="fixed mx-auto flex flex-row mt-5  h-screen w-screen  overflow-auto">
      <section className='hidden md:flex w-1/4 bg-white h-full overflow-auto z-10 lg:w-1/5'>
           <AdminSideBar/>
      </section>
      <section className='flex flex-col w-full bg-gray-200 h-full overflow-auto  md:w-9/12 lg:w-11/12' >
      <Routes>
        <Route path="/" element={<AdminBoardHome isLoading={isLoading} fetchError={fetchError}/>} />
        <Route path="/user/:id" element={<User/>} />
        <Route path="/add/:id" element={<TopBalance/>} />
        <Route path="/subtract/:id" element={<DeductBalance/>} />
      </Routes>
      </section>
     </main>
     <footer className='flex flex-row fixed -bottom-0 w-full h-auto  bg-red-950 '>
      <section className='w-full flex flex-row '>
         <div className="bg-slate-950 text-slate-100 text-xs hidden px-2 md:flex md:justify-between md:w-full">
                  <div>Secure banking v1.2.0</div>
                  <div><img src="" alt=""/> &copy;2025 Zurich Bank. All rights reserved</div>
                  {/* <div className='w-96 flex justify-between'><span>Privacy Policy</span> <span>terms of service</span> <span>contact support</span> </div>  */}
            </div>
      </section>
     </footer>
    </>
  )
}

export default AdminDashBoard 
