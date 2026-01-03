// import RouterLoader from "./RouterLoader";
import Loader from "./Loaders";
import logo from '../assets/images.jpeg';
import Aside from './UserDash/Aside';


import DashBoardHome from './UserDashHome/DashBoardHome';
import AccountHistory from './UserDashHome/AccountHistory';
// const DashBoardHome = lazy(() => import('./UserDashHome/DashBoardHome'));
// const AccountHistory = lazy(() => import('./UserDashHome/AccountHistory'));

import AccountSettings from './UserDashHome/AccountSetting';
import ChangePass from './UserDashHome/ChangePass';
import Deposit from './UserDashHome/Deposit';
import InterTransfer from './UserDashHome/InterTransfer';
import LocalTransfer from './UserDashHome/LocalTransfer';
import Virtualcards from './UserDashHome/Virtualcards';
import ApplyCard from './UserDashHome/ApplyCard';
import BuyPlan from './UserDashHome/BuyPlan';
import IRS from './UserDashHome/IRS';
import Loan from './UserDashHome/Loan';
import LoanHistory from './UserDashHome/LoanHistory';
import Downloads from './UserDashHome/Downloads';
import Support from './UserDashHome/Support'
import { FaRegUserCircle  } from "react-icons/fa";
import { Link } from "react-router-dom";
import  { IoGridSharp  } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import {MdOutlineAppSettingsAlt } from "react-icons/md";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FaShieldAlt } from "react-icons/fa";
import { TbWorld,TbActivityHeartbeat } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { IoAddCircleOutline,IoHome,IoSettingsOutline  } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaPeopleRoof} from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { LuLogOut  } from "react-icons/lu";
import { CiCreditCard1  } from "react-icons/ci";
import { useState,useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { useStoreActions,useStoreState } from 'easy-peasy';
import useLogout  from "../hooks/useLogout"
// import useAxiosFetch from '../hooks/useAxiosFetch';


const UserDashboard = () => {
  const [routeLoading, setRouteLoading] = useState(false);

//     const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
     const setUser = useStoreActions((actions) => actions.setUser);

const [open, setOpen] =useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

 const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }


    useEffect(() => {
        let isMounted = true; 
        const controller = new AbortController();

        const getUser = async () => {
            setIsLoading(true);
            try {
                const response = await axiosPrivate.get("/userData", {
                    signal: controller.signal
                });
            //     console.log(response.data.data);
                 const data = response.data.data
            //     setData(data)
            //     setUser(data)
                isMounted && setUser(data); 
                
            } catch (err) {
                console.error(err);
                  if (isMounted) {
                    setFetchError(err.message);
                    setUser(null);
                }
                navigate('/Userdashboard', { state: { from: location }, replace: true });
            }finally {
                isMounted && setIsLoading(false);
            }
        }

        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])




useEffect(() => {
  setRouteLoading(true);
  const timer = setTimeout(() => setRouteLoading(false), 1000);
  return () => clearTimeout(timer);
}, [location.pathname]);

  return (
     <>
     <header className='fixed top-0 z-10 bg-gray-900 text-white w-full'>
      <section className='w-full flex flex-row justify-between'>
        <div >
          <Link to="/Home" className="flex items-center  text-slate-100  ">

          {/* Zurich Online bank */}
          <img src={logo} className='w-20 h-10' alt="logo"/>
          <span className='px-2 text-xs italic text-slate-50'> Western zurich Online banking</span>
          
          </Link>
        </div>
        <div className='flex flex-row items-center text-xl gap-3 pr-2'>
        <IoIosNotifications />
        <FaRegUserCircle /> 
        </div>
     </section>
    </header>
     <main className="fixed mx-auto flex flex-row mt-5  h-screen w-screen  overflow-auto">
      <section className='hidden md:flex w-1/4 bg-white h-full overflow-auto z-10 lg:w-1/5'>
           <Aside/>
      </section>
      <section className='flex flex-col w-full bg-gray-200 h-full overflow-auto  md:w-9/12 lg:w-11/12' >
    
             {/* <Routes>
               <Route path="/" element={<DashBoardHome />} />
               <Route path="accounthistory" element={<AccountHistory/>} />
               <Route path="accountsettings" element={<AccountSettings/>} />
                <Route path="changepassword" element={<ChangePass/>} />
               <Route path="deposit" element={<Deposit/>} />
               <Route path="intertransfer" element={<InterTransfer/>} />
               <Route path="localtransfer" element={<LocalTransfer/>} />
               <Route path="virtualcards" element={<Virtualcards/>} />
                <Route path="/virtualcards/applycard" element={<ApplyCard/>} />
               <Route path="buyplan" element={<BuyPlan/>} />
               <Route path="loan" element={<Loan/>} />
               <Route path="irs" element={<IRS/>} />
               <Route path="loanhistory" element={<LoanHistory/>} />
               <Route path="download" element={<Downloads/>} />
               <Route path="support" element={<Support/>} />
            </Routes> */}

  {isLoading && <Loader />}


  {/* Route navigation loading */}
  {routeLoading && !isLoading && <Loader />}

  {/* Show content only when not loading */}
 

  {!isLoading && !routeLoading && (
      <Routes>
        <Route path="/" element={<DashBoardHome />} />
        <Route path="accounthistory" element={<AccountHistory />} />
        <Route path="accountsettings" element={<AccountSettings />} />
        <Route path="changepassword" element={<ChangePass />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="intertransfer" element={<InterTransfer />} />
        <Route path="localtransfer" element={<LocalTransfer />} />
        <Route path="virtualcards" element={<Virtualcards />} />
        <Route path="/virtualcards/applycard" element={<ApplyCard />} />
        <Route path="buyplan" element={<BuyPlan />} />
        <Route path="loan" element={<Loan />} />
        <Route path="irs" element={<IRS />} />
        <Route path="loanhistory" element={<LoanHistory />} />
        <Route path="download" element={<Downloads />} />
        <Route path="support" element={<Support />} />
      </Routes>
  )}


        {/* Menu Modal */}
         <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               className='w-9/12 h-96 mt-32 mx-auto sm:w-11/12 md:hidden'
            >
               <Box className="flex flex-col min-h-full  px-1 absolute rounded-lg  bg-zinc-200  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div class="flex flex-col px-1 py-6">
                   <div className="close-btn" >&times;</div>

                     <div class="flex ml-4 mb-6 gap-4">
                        <div class="p-6 border-2 border-slate-900 rounded-full text-xs"></div>
                        <div class="flex flex-col text-xs"><span>User 1</span><span>Account:36738383773</span><span>Verified</span></div>
                     </div>
            
                     <div class="flex flex-col items-center">
                        <h4 className='text-lg font-medium'>Banking menu</h4>
                        <p className='text-sm'>Select an option to continue</p>
                     </div>

                     <div class="flex flex-col items-center text-slate-100 py-2 gap-4 mt-7">

                           <div class="flex items-center gap-2 px-4">
                              <div class="bg-gray-900  rounded-lg p-4 w-24">
                                 <Link to="/Userdashboard" class="flex flex-col items-center">
                                       <IoHome className='text-2xl'/>
                                       <span className='text-xs'>Home</span>
                                 </Link>
                              </div>
                              <div  class="bg-gray-900  rounded-lg p-4 w-24">
                                 <Link to="/Userdashboard/accounthistory" class="flex flex-col items-center">
                                       <TbActivityHeartbeat className='text-2xl' />
                                        <span className='text-xs'>Activity</span>
                                 </Link>
                              </div>
                              <div  class="bg-gray-900  rounded-lg p-4 w-24">
                               <Link to="/Userdashboard/virtualcards" class="flex flex-col items-center">
                                       <CiCreditCard1 className='text-2xl'/>
                                       <span className='text-xs'>Card</span>
                                 </Link>
                              </div>
                           </div>
                           
                           <div class="flex items-center gap-2 px-4">
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                       <Link to="/Userdashboard/localtransfer" class="flex flex-col items-center">
                                       <IoIosSend className='text-2xl'/>
                                        <span className='text-xs'>Transfer</span>
                                       </Link>
                                 </div>
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                       <Link to="/Userdashboard/intertransfer" class="flex flex-col items-center">
                                       <TbWorld className='text-2xl'/>
                                        <span className='text-xs'>Int'l wire</span>
                                      </Link>
                                 </div>
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                    <Link to="/Userdashboard/deposit" class="flex flex-col items-center">
                                       <IoAddCircleOutline className='text-2xl'/>
                                       <span className='text-xs'>Deposit</span>
                                 </Link>
                                 </div>
                           </div>

                           <div class="flex items-center gap-2 px-4 ">
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                    <Link to="/" class="flex flex-col items-center">
                                       <BiSolidCheckShield className='text-2xl'/>
                                        <span className='text-xs'>Download</span>
                                    </Link>
                                 </div>
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                    <Link to="/Userdashboard/loan" class="flex flex-col items-center">
                                    <FaPeopleRoof className='text-2xl'/>
                                    <span className='text-xs'>Loan</span>
                                    </Link>
                                 </div>
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                       <Link to="/Userdashboard/irs" class="flex flex-col items-center">
                                       <RiRefund2Fill className='text-2xl'/>
                                       <span className='text-xs'>IRS funds</span>
                                       </Link>
                                 </div>
                           </div>

                           <div class="flex items-center gap-2 px-4 ">
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                       <Link to="/Userdashboard/accountsettings" class="flex flex-col items-center">
                                       <IoSettingsOutline className='text-2xl'/>
                                       <span className='text-xs'>Setting</span>
                                       </Link>
                                 </div>
                                 <div class="bg-gray-900  rounded-lg p-4 w-24">
                                       <Link to="/Userdashboard/support" class="flex flex-col items-center">
                                       <MdOutlineContactSupport className='text-2xl'/>
                                       <span className='text-xs'>Support</span>
                                       </Link>
                                 </div>
                                 <div  class="bg-gray-900 rounded-lg p-4 w-24">
                                       <Link to="/" class="flex flex-col items-center">
                                       <LuLogOut className='text-xs'/>
                                       <button onClick={signOut}><span className='text-sm'>Logout</span></button>
                                       </Link>
                                 </div>
                           </div>
                     </div>
                </div>
               
               </Box>
            </Modal>
      </section>
     </main>
     <footer className='flex flex-row fixed -bottom-0 w-full h-auto  bg-gray-900 '>
      <section className='w-full flex flex-row '>
         <nav className="w-full flex flex-row md:hidden">
            <div  className="w-full flex flex-row justify-around gap-2 py-1 text-slate-100">
            <Link to="/Userdashboard"  className="" >
                <div  className="flex flex-col items-center">
                   <IoHome />
                   <span  className="text-xs">Home</span>
                </div>
            </Link>

            <Link to="/Userdashboard/accounthistory"  className="mr-9">
                <div   className="flex flex-col items-center">
                 <IoIosStats />
                 <span  className="text-xs">Stats</span>
                </div>
            </Link>

                 {/* <!-- center modal button --> */}

            <button type="button" onClick={handleOpen}  className='absolute -top-9 text-current p-4 border-4 border-gray-100 bg-slate-950 rounded-full shadow-3xl text-zinc-100'>
              <IoGridSharp className='text-xl' />
            </button>
           

            <Link to="/Userdashboard/virtualcards" className="ml-9" >
                <div  className="flex flex-col items-center">
                  <CiCreditCard1 />
                  <span className="text-xs">Card</span>
                </div>
            </Link>

            <Link to="/Userdashboard/download" className="nav-item" >
                <div  className="flex flex-col items-center">
                 <MdOutlineAppSettingsAlt />
                 <span className="text-xs">App</span>
                </div>
            </Link>
            </div>

              
          </nav>
           <div className="bg-slate-950 text-slate-100 text-xs hidden px-2 md:flex md:justify-between md:w-full">
                  <div className='flex items-center'><FaShieldAlt /> <span className='pl-2'>Secure banking v1.2.0</span></div>
                  <div><img src="" alt=""/> &copy;2025 Zurich Bank. All rights reserved</div>
                  <div className='w-96 flex justify-between'><span>Privacy Policy</span> <span>terms of service</span> <span>contact support</span> </div> 
            </div>


      </section>
     </footer>
    </>
  )
}

export default UserDashboard
