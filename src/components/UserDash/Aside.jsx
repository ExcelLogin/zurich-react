import { useNavigate,Link } from "react-router-dom"
import { CiUser, CiCreditCard1  } from "react-icons/ci";
import { LuHistory,LuLogOut  } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { TbWorld,TbActivityHeartbeat } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { IoAddCircleOutline,IoSettingsOutline  } from "react-icons/io5";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaPeopleRoof} from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { CiMobile2 } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
// import logo from '../../assets/swiss.jpeg';
import useLogout  from "../../hooks/useLogout"
import { useStoreActions,useStoreState } from 'easy-peasy';


const Aside = () => {

    const usr = useStoreState((state) => state.usr);

  const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }


  return (
    <aside className='flex flex-col h-min w-full py-12 border-r border-x-slate-300 bg-gray-200'>
        <div className="w-full flex flex-col">
            {/* <div className="w-full">
                <Link to="/">
                    <img  src={logo} className='w-full h-12' alt="logo"/>
                </Link>
               </div> */}
             {/* <!-- user info card --> */}
            <div className="w-full flex flex-col px-2">
                {/* <!-- user info --> */}
                <div className="flex flex-row items-center xl:mx-5">
                    <div className="rounded-full text-2xl">
                       <VscAccount />
                    </div>
                    <div className="flex items-start text-xs justify-center flex-col ml-3">
                        <div>{usr?.firstname} {usr?.lastname}</div>
                        <div>{usr?._id}</div>
                    </div>
                   
                </div>
                {/* <!-- KYC div --> */}
                 <div className="flex flex-row items-center justify-center bg-green-100  gap-2 my-3 px-14 md:px-8 md:py-1 mx-auto rounded-md ">
                        <GrStatusGood className="text-green-950" />
                        <span className="text-xs text-green-950 text-center">
                            KYC Verified
                        </span>
                    </div>
               
                
                {/* <!-- profile and login buttons --> */}
                <div className="flex flex-row justify-between mt-3 w-full text-slate-100 xl:justify-evenly">
                     <button className="flex bg-gray-900 px-4 py-1 rounded-md text-xs lg:px-3 xl:px-5"><Link to="/Userdashboard/accountsettings" className="flex items-center gap-1"> <CiUser/><span className="text-xs">Profile</span></Link></button>
                     <button onClick={signOut}  className="flex items-center bg-gray-900 px-4 py-1 rounded-md gap-1 text-xs lg:px-3 xl:px-5" > <LuLogOut /><span className="text-xs">Logout</span></button>
                </div>
            </div>
               {/* <!-- Navigation --> */}
            <nav className="w-full flex flex-col  py-10 px-5">
               <p className="font-bold">Main Menu</p>
               <Link  to="/Userdashboard" className="flex flex-row items-center gap-2 text-xs my-2"><IoHome/><span>Dashboard</span></Link>
               <Link to="/Userdashboard/accounthistory" className="flex flex-row text-xs gap-2  items-center my-2"><TbActivityHeartbeat /><span>Transactions</span></Link>
                <Link to="/Userdashboard/virtualcards"  className="flex flex-row text-xs gap-2 items-center my-2"><CiCreditCard1/><span>Cards</span></Link>
                <p className="font-bold">Transfers</p>
                <Link to="/Userdashboard/localtransfer"  className="flex flex-row text-xs gap-2 items-center my-2"><IoIosSend /><span>Local transfer</span></Link>
                <Link to="/Userdashboard/intertransfer"  className="flex flex-row text-xs gap-2 items-center my-2"> <TbWorld/><span>Internationl wire</span></Link>
                <Link to="/Userdashboard/deposit"  className="flex flex-row text-xs gap-2 items-center my-2"> <IoAddCircleOutline /><span>Deposit</span></Link>
                <Link to="/Userdashboard/buyplan"  className="flex flex-row text-xs gap-2 items-center my-2"><BiSolidCheckShield /><span>Save and invest</span></Link>
                <p className="font-bold">Services</p>
                <Link to="/Userdashboard/loan"  className="flex flex-row text-xs gap-2 items-center my-2"> <FaPeopleRoof /><span>Loan Request</span></Link>
                <Link to="/Userdashboard/irs"  className="flex flex-row text-xs gap-2 items-center my-2"><RiRefund2Fill /><span>IRS Tax Refund</span></Link>
                <Link to="/Userdashboard/loanhistory"  className="flex flex-row text-xs gap-2 items-center my-2"><LuHistory/><span>Loan History</span></Link>
                <p className="font-bold">Accounts</p>
                <Link to="/Userdashboard/download"  className="flex flex-row text-xs gap-2 items-center my-2"><CiMobile2 /><span>Download app</span></Link>
                <Link to="/Userdashboard/accountsettings"  className="flex flex-row text-xs gap-2 items-center my-2"><IoSettingsOutline /><span>Settings</span></Link>
                <Link to="/Userdashboard/support"  className="flex flex-row text-xs gap-2 items-center my-2"><MdOutlineContactSupport/><span>Support Ticket</span></Link>
            </nav>
        </div>
    </aside>
  )
}

export default Aside
