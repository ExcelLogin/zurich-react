// import { Link } from "react-router-dom"
// import { CiCreditCard1,CiUser } from "react-icons/ci";
// import { FaRegClock } from "react-icons/fa";
// import { IoIosStats } from "react-icons/io";
// import { MdOutlineDateRange,MdArrowForwardIos,MdOutlineContactSupport  } from "react-icons/md";
// import { TbWorld} from "react-icons/tb";
// import { IoChatbubbleOutline } from "react-icons/io5";

// const Column2 = () => {
//   return (
//     <div className='flex flex-col h-min mb-24 px-2.5 py-4 w-full mt-10 rounded-xl xl:w-5/12 bg-gray-200'>
//       {/* Account stats */}
//         <div className="bg-gray-200">
//             <div class="px-5 py-2 text-sm font-bold">
//                  <h5>Account Statistics</h5>
//             </div>
//             {/* wrapper */}
//             <div class="py-2">
//                 <div class="flex flex-row gap-2 px-5 py-2">
//                     <span className='text-current p-1 bg-gray-300 rounded-full shadow-3xl mb-4 text-zinc-100'> <CiCreditCard1 /></span>
//                     <div class="transaction-limit-inner">
//                     <p className="text-xs">Transaction Limit</p>
//                     <p className="text-sm font-medium">$500,000.00</p>
//                     </div>
//                 </div>
//                 <div class="flex flex-row gap-2 px-5 py-2"> 
//                     <span className='text-current p-1 bg-yellow-950 rounded-full shadow-3xl mb-4 text-zinc-100'><FaRegClock/></span>
//                     <div class="transaction-limit-inner">
//                     <p className="text-xs"> Pending Transaction</p>
//                     <p className="text-sm font-medium">$500,000.00</p>
//                     </div>
//                 </div>
//                 <div class="flex flex-row gap-2 px-5 py-2"> 
//                     <span className='text-current p-1 bg-green-950 rounded-full shadow-3xl mb-4 text-zinc-100'><IoIosStats/></span>
//                     <div class="transaction-limit-inner">
//                     <p className="text-xs">Transaction Volumn</p>
//                     <p className="text-sm font-medium">$500,000.00</p>
//                     </div>
//                 </div>
//                 <div class="flex flex-row gap-2 px-5 py-2"> 
//                     <span className='text-current p-1 bg-purple-300 rounded-full shadow-3xl mb-4 text-zinc-100'><MdOutlineDateRange className="bg-purple-300" /></span>
//                     <div class="transaction-limit-inner">
//                     <p className="text-xs">Account Age</p>
//                     <p className="text-sm font-medium">5 years</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* Quik Transfer */}
//         <div className='flex flex-col h-min mb-5 px-2.5 py-0 w-full mt-5'>
//             <div class=" py-2 text-sm font-bold"> 
//               <h5>Quick Transfer</h5>
//             </div>
//             <div class="transfer-funds">
//                <Link to="/Userdashboard/localtransfer"  className="flex justify-between items-center py-5">
//                     <div class="flex flex-row gap-3" >
//                         <div className='text-current p-1 bg-gray-500 rounded-full shadow-3xl mb-4 text-zinc-100'>
//                             <CiUser />
//                         </div>
//                         <div>
//                             <h5 className="font-bold"> Local transfer</h5>
//                             <p className="text-xs">0% handling charges</p>
//                         </div>
//                     </div>
//                    <MdArrowForwardIos />                 
//                 </Link>
//                 <Link to="/Userdashboard/intertransfer" className="flex justify-between items-center py-5"> 
//                     <div class="flex flex-row gap-3" >
//                         <div className='text-current p-1 bg-gray-500 rounded-full shadow-3xl mb-4 text-zinc-100'>
//                             <TbWorld />
//                         </div>
//                         <div class="">
//                             <h5 className="font-bold"> International transfer</h5>
//                             <p className="text-xs">Global reach,0% fee</p>
//                         </div>
                    
//                     </div>
//                    <MdArrowForwardIos />
//                 </Link>
//             </div>
//         </div>
//         {/* Need Help */}
//         <div className='flex bg-[#5B0F12] flex-col justify-center items-center h-min  px-2.5 py-7 w-full mt-10 rounded-xl text-slate-100'>
//             <div class="flex flex-col items-center " >
//                     <div className='text-current p-2 bg-slate-50 border rounded-full shadow-3xl mb-4 text-slate-950'><MdOutlineContactSupport /></div>
//                     <h5 className="text-sm font-bold">Need help?</h5>
//                     <p className="text-xs">Our support team is here to help 24/7</p>
//                 <div class="py-3">
//                     <Link to="/" className="flex items-center gap-2 border rounded-md p-1">
//                         <IoChatbubbleOutline />
//                         <span className="text-xs">Contact support</span>
//                     </Link>
//                 </div>
                     
//             </div>    
//         </div>

//     </div>
//   )
// }

// export default Column2



import { Link } from "react-router-dom"
import { CiCreditCard1, CiUser } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdOutlineDateRange, MdArrowForwardIos, MdOutlineContactSupport } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoChatbubbleOutline } from "react-icons/io5";

const stats = [
  {
    icon: <CiCreditCard1 size={16} />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    label: "Daily Transfer Limit",
    value: "Unavailable",
  },
  {
    icon: <FaRegClock size={14} />,
    bg: "bg-amber-100",
    iconColor: "text-amber-600",
    label: "Pending Transactions",
    value: "Unavailable",
  },
  {
    icon: <IoIosStats size={16} />,
    bg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    label: "Monthly Transaction Volume",
    value: "$284,300.00",
  },
  {
    icon: <MdOutlineDateRange size={16} />,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
    label: "Account Standing",
    value: "5 Years — Verified",
  },
];

const Column2 = () => {
  return (
    <div className="flex flex-col gap-4 w-full xl:w-5/12 mb-24 mt-10">

      {/* Account Overview */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 pt-5 pb-3 border-b border-gray-100">
          <h5 className="text-sm font-semibold text-gray-800 tracking-wide">Account Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">Your financial summary at a glance</p>
        </div>
        <div className="divide-y divide-gray-50">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5">
              <span className={`flex items-center justify-center w-8 h-8 rounded-full ${stat.bg} ${stat.iconColor} shrink-0`}>
                {stat.icon}
              </span>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 truncate">{stat.label}</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Transfer */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 pt-5 pb-3 border-b border-gray-100">
          <h5 className="text-sm font-semibold text-gray-800 tracking-wide">Quick Transfer</h5>
          <p className="text-xs text-gray-400 mt-0.5">Send money locally or internationally</p>
        </div>
        <div className="divide-y divide-gray-50">
          <Link
            to="/Userdashboard/localtransfer"
            className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#5B0F12] group-hover:text-white transition-colors">
                <CiUser size={17} />
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-800">Local Transfer</p>
                <p className="text-xs text-gray-400">0% handling charges</p>
              </div>
            </div>
            <MdArrowForwardIos size={13} className="text-gray-300 group-hover:text-[#5B0F12] transition-colors" />
          </Link>

          <Link
            to="/Userdashboard/intertransfer"
            className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#5B0F12] group-hover:text-white transition-colors">
                <TbWorld size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-800">International Transfer</p>
                <p className="text-xs text-gray-400">Global reach — 0% fee</p>
              </div>
            </div>
            <MdArrowForwardIos size={13} className="text-gray-300 group-hover:text-[#5B0F12] transition-colors" />
          </Link>
        </div>
      </div>

      {/* Need Help */}
      <div className="relative bg-[#5B0F12] rounded-2xl overflow-hidden px-6 py-8 text-center">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        <div className="relative flex flex-col items-center gap-2">
          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white mb-1">
            <MdOutlineContactSupport size={20} />
          </span>
          <h5 className="text-sm font-semibold text-white">Need help?</h5>
          <p className="text-xs text-white/60 max-w-[180px] leading-relaxed">
            Our support team is available around the clock — 24/7
          </p>
          <Link
            to="/"
            className="mt-3 flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium rounded-lg px-4 py-2 transition-colors"
          >
            <IoChatbubbleOutline size={14} />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Column2;