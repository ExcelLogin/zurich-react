// import RouterLoader from "./RouterLoader";
import Loader from "./Loaders";
import logo from '../assets/swiss.jpeg';
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
    const [isLoading, setIsLoading] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
     const setUser = useStoreActions((actions) => actions.setUser);
     const  setRecentTransactions = useStoreActions((actions) => actions.setRecentTransactions);

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

                 if (err.name === 'CanceledError' || err.code === 'ERR_CANCELED') return;
                console.error(err);
                  if (isMounted) {
                    // setFetchError(err.message);
                    setUser(null);
                }
                // navigate('/Userdashboard', { state: { from: location }, replace: true });
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

     //fetch the users transfer hsitory 
       useEffect(() => {
        let isMounted = true; 
       const controller = new AbortController();


        const getTransferHistory = async () => {
            
            try {
                const response = await axiosPrivate.get("/userData/transfers", {
                    signal: controller.signal
                });
            //     console.log(response.data.data);
                 const data = response.data
            //     setData(data)
            //     setUser(data)
                isMounted && setRecentTransactions(data); 
                
            } catch (err) {
                console.error(err);
                  if (isMounted) {
                    // setFetchError(err.message);
                    setRecentTransactions([]);
                }
                // navigate('/Userdashboard', { state: { from: location }, replace: true });
            }
        }

        getTransferHistory()
 
    }, [])




useEffect(() => {
  setRouteLoading(true);
  const timer = setTimeout(() => setRouteLoading(false), 1000);
  return () => clearTimeout(timer);
}, [location.pathname]);

  return (
     <>
     <header className='fixed top-0 z-10 bg-[#5B0F12] text-white w-full'>
      <section className='w-full flex flex-row justify-between'>
        <div >
          <Link to="/Home" className="flex items-center  text-slate-100  ">

          {/* Zurich Online bank */}
          <img src={logo} className='w-20 h-12' alt="logo"/>
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


<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='md:hidden'
>
<Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-sm min-h-[85vh] max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-2xl outline-none">
    
    {/* Header */}
    <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-[#5B0F12] flex items-center justify-center text-white text-sm font-semibold">
          U1
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">User 1</span>
          <span className="text-xs text-gray-500">•••• •••• 3773</span>
          <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Verified
          </span>
        </div>
      </div>
      <button
        onClick={handleClose}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors text-lg font-light"
        aria-label="Close menu"
      >
        &times;
      </button>
    </div>

    {/* Title */}
    <div className="px-5 pt-4 pb-2">
      <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400">Banking Menu</h4>
    </div>

    {/* Menu Grid */}
    <div className="px-4 pb-6 grid grid-cols-3 gap-3">

      {[
        { to: "/Userdashboard",                   icon: <IoHome />,                   label: "Home" },
        { to: "/Userdashboard/accounthistory",     icon: <TbActivityHeartbeat />,      label: "Activity" },
        { to: "/Userdashboard/virtualcards",       icon: <CiCreditCard1 />,            label: "Card" },
        { to: "/Userdashboard/localtransfer",      icon: <IoIosSend />,                label: "Transfer" },
        { to: "/Userdashboard/intertransfer",      icon: <TbWorld />,                  label: "Int'l Wire" },
        { to: "/Userdashboard/deposit",            icon: <IoAddCircleOutline />,       label: "Deposit" },
        { to: "/",                                 icon: <BiSolidCheckShield />,       label: "Download" },
        { to: "/Userdashboard/loan",               icon: <FaPeopleRoof />,             label: "Loan" },
        { to: "/Userdashboard/irs",                icon: <RiRefund2Fill />,            label: "IRS Funds" },
        { to: "/Userdashboard/accountsettings",    icon: <IoSettingsOutline />,        label: "Settings" },
        { to: "/Userdashboard/support",            icon: <MdOutlineContactSupport />,  label: "Support" },
      ].map(({ to, icon, label }) => (
        <Link
          key={label}
          to={to}
          onClick={handleClose}
          className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 hover:bg-[#5B0F12]/8 active:scale-95 transition-all duration-150 group"
        >
          <span className="text-xl text-[#5B0F12] group-hover:scale-110 transition-transform duration-150">
            {icon}
          </span>
          <span className="text-xs font-medium text-gray-700 text-center leading-tight">{label}</span>
        </Link>
      ))}

      {/* Logout — separate treatment */}
      <button
        onClick={() => { signOut(); handleClose(); }}
        className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-red-50 hover:bg-red-100 active:scale-95 transition-all duration-150 group"
      >
        <span className="text-xl text-red-600 group-hover:scale-110 transition-transform duration-150">
          <LuLogOut />
        </span>
        <span className="text-xs font-medium text-red-600 text-center leading-tight">Logout</span>
      </button>

    </div>
  </Box>
</Modal>
      </section>
     </main>
     <footer className='flex flex-row fixed -bottom-0 w-full h-auto  bg-[#5B0F12] '>
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

            <button type="button" onClick={handleOpen}  className='absolute -top-9 text-current p-4 border-4 border-gray-100 bg-[#5B0F12] rounded-full shadow-3xl text-zinc-100'>
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
           <div className="bg-[#5B0F12] text-slate-100 text-xs hidden px-2 md:flex md:justify-between md:w-full">
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
