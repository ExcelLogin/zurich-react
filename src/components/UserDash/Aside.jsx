// import { useNavigate,Link } from "react-router-dom"
// import { CiUser, CiCreditCard1  } from "react-icons/ci";
// import { LuHistory,LuLogOut  } from "react-icons/lu";
// import { IoHome } from "react-icons/io5";
// import { TbWorld,TbActivityHeartbeat } from "react-icons/tb";
// import { IoIosSend } from "react-icons/io";
// import { IoAddCircleOutline,IoSettingsOutline  } from "react-icons/io5";
// import { BiSolidCheckShield } from "react-icons/bi";
// import { FaPeopleRoof} from "react-icons/fa6";
// import { RiRefund2Fill } from "react-icons/ri";
// import { MdOutlineContactSupport } from "react-icons/md";
// import { GrStatusGood } from "react-icons/gr";
// import { CiMobile2 } from "react-icons/ci";
// import { VscAccount } from "react-icons/vsc";
// // import logo from '../../assets/swiss.jpeg';
// import useLogout  from "../../hooks/useLogout"
// import { useStoreActions,useStoreState } from 'easy-peasy';


// const Aside = () => {

//     const usr = useStoreState((state) => state.usr);

//   const navigate = useNavigate();
//     const logout = useLogout();

//     const signOut = async () => {
//         await logout();
//         navigate('/login');
//     }


//   return (
//     <aside className='flex flex-col h-min w-full py-12 border-r border-x-slate-300 bg-gray-200'>
//         <div className="w-full flex flex-col">
//             {/* <div className="w-full">
//                 <Link to="/">
//                     <img  src={logo} className='w-full h-12' alt="logo"/>
//                 </Link>
//                </div> */}
//              {/* <!-- user info card --> */}
//             <div className="w-full flex flex-col px-2">
//                 {/* <!-- user info --> */}
//                 <div className="flex flex-row items-center xl:mx-5">
//                     <div className="rounded-full text-2xl">
//                        <VscAccount />
//                     </div>
//                     <div className="flex items-start text-xs justify-center flex-col ml-3">
//                         <div>{usr?.firstname} {usr?.lastname}</div>
//                         <div>{usr?._id}</div>
//                     </div>
                   
//                 </div>
//                 {/* <!-- KYC div --> */}
//                  <div className="flex flex-row items-center justify-center bg-green-100  gap-2 my-3 px-14 md:px-8 md:py-1 mx-auto rounded-md ">
//                         <GrStatusGood className="text-green-950" />
//                         <span className="text-xs text-green-950 text-center">
//                             KYC Verified
//                         </span>
//                     </div>
               
                
//                 {/* <!-- profile and login buttons --> */}
//                 <div className="flex flex-row justify-between mt-3 w-full text-slate-100 xl:justify-evenly">
//                      <button className="flex bg-[#5B0F12] px-4 py-1 rounded-md text-xs lg:px-3 xl:px-5"><Link to="/Userdashboard/accountsettings" className="flex items-center gap-1"> <CiUser/><span className="text-xs">Profile</span></Link></button>
//                      <button onClick={signOut}  className="flex items-center bg-[#5B0F12] px-4 py-1 rounded-md gap-1 text-xs lg:px-3 xl:px-5" > <LuLogOut /><span className="text-xs">Logout</span></button>
//                 </div>
//             </div>
//                {/* <!-- Navigation --> */}
//             <nav className="w-full flex flex-col  py-10 px-5">
//                <p className="font-bold">Main Menu</p>
//                <Link  to="/Userdashboard" className="flex flex-row items-center gap-2 text-xs my-2"><IoHome/><span>Dashboard</span></Link>
//                <Link to="/Userdashboard/accounthistory" className="flex flex-row text-xs gap-2  items-center my-2"><TbActivityHeartbeat /><span>Transactions</span></Link>
//                 <Link to="/Userdashboard/virtualcards"  className="flex flex-row text-xs gap-2 items-center my-2"><CiCreditCard1/><span>Cards</span></Link>
//                 <p className="font-bold">Transfers</p>
//                 <Link to="/Userdashboard/localtransfer"  className="flex flex-row text-xs gap-2 items-center my-2"><IoIosSend /><span>Local transfer</span></Link>
//                 <Link to="/Userdashboard/intertransfer"  className="flex flex-row text-xs gap-2 items-center my-2"> <TbWorld/><span>Internationl wire</span></Link>
//                 <Link to="/Userdashboard/deposit"  className="flex flex-row text-xs gap-2 items-center my-2"> <IoAddCircleOutline /><span>Deposit</span></Link>
//                 <Link to="/Userdashboard/buyplan"  className="flex flex-row text-xs gap-2 items-center my-2"><BiSolidCheckShield /><span>Save and invest</span></Link>
//                 <p className="font-bold">Services</p>
//                 <Link to="/Userdashboard/loan"  className="flex flex-row text-xs gap-2 items-center my-2"> <FaPeopleRoof /><span>Loan Request</span></Link>
//                 <Link to="/Userdashboard/irs"  className="flex flex-row text-xs gap-2 items-center my-2"><RiRefund2Fill /><span>IRS Tax Refund</span></Link>
//                 <Link to="/Userdashboard/loanhistory"  className="flex flex-row text-xs gap-2 items-center my-2"><LuHistory/><span>Loan History</span></Link>
//                 <p className="font-bold">Accounts</p>
//                 <Link to="/Userdashboard/download"  className="flex flex-row text-xs gap-2 items-center my-2"><CiMobile2 /><span>Download app</span></Link>
//                 <Link to="/Userdashboard/accountsettings"  className="flex flex-row text-xs gap-2 items-center my-2"><IoSettingsOutline /><span>Settings</span></Link>
//                 <Link to="/Userdashboard/support"  className="flex flex-row text-xs gap-2 items-center my-2"><MdOutlineContactSupport/><span>Support Ticket</span></Link>
//             </nav>
//         </div>
//     </aside>
//   )
// }

// export default Aside



import { NavLink, Link, useNavigate } from "react-router-dom";
import { CiCreditCard1, CiMobile2, CiUser } from "react-icons/ci";
import { LuHistory, LuLogOut } from "react-icons/lu";
import { IoHome, IoAddCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { TbWorld, TbActivityHeartbeat } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import useLogout from "../../hooks/useLogout";
import { useStoreState } from "easy-peasy";

const NAV_SECTIONS = [
  {
    label: "Main Menu",
    items: [
      { to: "/Userdashboard",                end: true, icon: <IoHome size={15} />,                  label: "Dashboard" },
      { to: "/Userdashboard/accounthistory",            icon: <TbActivityHeartbeat size={15} />,     label: "Transactions" },
      { to: "/Userdashboard/virtualcards",              icon: <CiCreditCard1 size={15} />,           label: "Cards" },
    ],
  },
  {
    label: "Transfers",
    items: [
      { to: "/Userdashboard/localtransfer",  icon: <IoIosSend size={15} />,          label: "Local transfer" },
      { to: "/Userdashboard/intertransfer",  icon: <TbWorld size={15} />,            label: "International wire" },
      { to: "/Userdashboard/deposit",        icon: <IoAddCircleOutline size={15} />, label: "Deposit" },
      { to: "/Userdashboard/buyplan",        icon: <BiSolidCheckShield size={15} />, label: "Save & invest" },
    ],
  },
  {
    label: "Services",
    items: [
      { to: "/Userdashboard/loan",        icon: <FaPeopleRoof size={15} />,          label: "Loan request" },
      { to: "/Userdashboard/irs",         icon: <RiRefund2Fill size={15} />,         label: "IRS tax refund" },
      { to: "/Userdashboard/loanhistory", icon: <LuHistory size={15} />,             label: "Loan history" },
    ],
  },
  {
    label: "Accounts",
    items: [
      { to: "/Userdashboard/download",        icon: <CiMobile2 size={15} />,               label: "Download app" },
      { to: "/Userdashboard/accountsettings", icon: <IoSettingsOutline size={15} />,       label: "Settings" },
      { to: "/Userdashboard/support",         icon: <MdOutlineContactSupport size={15} />, label: "Support ticket" },
    ],
  },
];

const Aside = () => {
  const usr = useStoreState((state) => state.usr);
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  const initials =
    usr?.firstname && usr?.lastname
      ? `${usr.firstname[0]}${usr.lastname[0]}`.toUpperCase()
      : "??";

  return (
    <aside className="flex flex-col w-full h-full bg-white border-r border-gray-100 overflow-y-auto py-16">

      {/* User profile block */}
      <div className="px-4 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white bg-[#5B0F12] shrink-0 select-none">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-gray-800 truncate leading-tight">
              {usr?.firstname ?? ""} {usr?.lastname ?? ""}
            </p>
            <p className="text-[10px] text-gray-400 font-mono truncate">
              {usr?._id ?? "—"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-lg px-2.5 py-1.5 mb-3 w-fit">
          <GrStatusGood size={11} className="text-green-600" />
          <span className="text-[11px] text-green-700 font-medium">KYC Verified</span>
        </div>

        <div className="flex gap-2">
          <Link
            to="/Userdashboard/accountsettings"
            className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-gray-600 border border-[#5B0F12] hover:bg-gray-200 rounded-lg py-1.5 transition-colors"
          >
            <CiUser size={13} /> Profile
          </Link>
          <button
            onClick={signOut}
            className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#5B0F12] bg-[#5B0F12]/8 hover:bg-[#5B0F12]/15 rounded-lg py-1.5 transition-colors border border-[#5B0F12]"
          >
            <LuLogOut size={13} /> Logout
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col flex-1 px-3 pt-1 pb-5">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            <p className="px-2 pt-3 pb-1 text-[9.5px] font-bold uppercase tracking-widest text-gray-300 select-none">
              {section.label}
            </p>

            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end ?? false}
                className={({ isActive }) =>
                  `group flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[12px] font-medium transition-all
                  ${isActive
                    ? "bg-[#5B0F12] text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`flex items-center justify-center w-[22px] h-[22px] rounded-md shrink-0 transition-colors
                      ${isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

    </aside>
  );
};

export default Aside;