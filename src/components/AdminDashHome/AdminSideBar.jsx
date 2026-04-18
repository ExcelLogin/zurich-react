
import { useNavigate,Link } from "react-router-dom"
import { CiUser, CiCreditCard1  } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
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


const AdminSideBar = () => {

    // const usr = useStoreState((state) => state.usr);

  const navigate = useNavigate();
    // const logout = useLogout();
        const logout = useLogout('/Adminlogin');

    const signOut = async () => {
        await logout(navigate);
navigate('/Adminlogin', { replace: true });
    }


  return (
    <aside className='flex flex-col h-min w-full py-12 border-r border-x-slate-300 bg-gray-100'>
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
                    <div className="rounded-full text-3xl">
                       <VscAccount />
                    </div>
                    <div className="flex items-start text-xs justify-center flex-col ml-3">
                        {/* <div>{usr.firstname} {usr.lastname}</div>
                        <div>{usr._id}</div> */}
                    </div>
                   
                </div>
                {/* <!-- KYC div --> */}
                 <div className="flex flex-row items-center justify-center bg-green-100  gap-2 my-3 px-14 md:px-8 md:py-1 mx-auto rounded-md ">
                        <GrStatusGood className="text-green-950" />
                        <span className="text-xs text-green-950 text-center">
                           ADMIN
                        </span>
                    </div>
               
                
                {/* <!-- profile and login buttons --> */}
                <div className="flex flex-row justify-between mt-3 w-full text-slate-100 xl:justify-evenly">
                     <button className="flex bg-[#5B0F12] px-4 py-1 rounded-md text-xs lg:px-3 xl:px-5"><Link to="/" className="flex items-center gap-1"> <CiUser/><span className="text-xs">Profile</span></Link></button>
                     <button onClick={signOut}  className="flex items-center bg-[#5B0F12] px-4 py-1 rounded-md gap-1 text-xs lg:px-3 xl:px-5" > <LuLogOut /><span className="text-xs">Logout</span></button>
                </div>
            </div>
               {/* <!-- Navigation --> */}
            <nav className="w-full flex flex-col  py-10 px-5">
               <p className="font-bold">Main Menu</p>
               <Link  to="" className="flex flex-row items-center gap-2 text-xs my-2"><IoHome/><span>Active users and balance</span></Link>
               <Link to="/Admin/usersmainframe" className="flex flex-row text-xs gap-2  items-center my-2"><FaUsers /><span>Users in registry </span></Link>
                <Link to=""  className="flex flex-row text-xs gap-2 items-center my-2"><CiCreditCard1/><span>All transaction history</span></Link>
                <p className="font-bold">Transfers</p>
               
            </nav>
        </div>
    </aside>
  )
}

export default AdminSideBar
