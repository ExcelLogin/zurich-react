// import { CiWallet } from "react-icons/ci";
// import { HiMiniArrowTrendingUp } from "react-icons/hi2";
// import { HiMiniArrowTrendingDown } from "react-icons/hi2";
// import { TbBrandSpeedtest } from "react-icons/tb";
// import Column1 from '../UserDash/Column1'
// import Column2 from '../UserDash/Column2'
// // import { useState,useEffect } from 'react'



// const DashBoardHome = () => {
//   // const usr = useStoreState((state) => state.user);

//   // console.log(usr)

//   return (
//     <>
    
//     <div className='hidden gap-4 pt-10 pb-56 px-2 w-full text-slate-700 bg-gray-200 md:flex md:pb-0'> 
//       <div className='flex justify-between items-center w-56 pt-1  px-5 bg-gray-200 border border-red-950  text-slate-600 rounded-lg'>
//         <div className="flex flex-col"><span className="text-xs">Current balance</span><span className="font-bold text-sm">$7000</span></div>
//         <div className='text-current p-1 bg-gray-300  rounded-full shadow-3xl mb-4 text-zinc-100'><CiWallet className="text-slate-900" /></div>
//       </div>

//       <div className='flex justify-between items-center w-56 pt-1   px-5 bg-gray-200 border border-red-950   text-slate-600 rounded-lg'>
//         <div className="flex flex-col"><span className="text-xs">Monthly Income</span><span className="font-bold text-green-600 text-sm">$0</span></div>
//         <div className='text-current p-1 bg-green-200 rounded-full shadow-3xl mb-4 text-green-400'><HiMiniArrowTrendingUp /></div>
//       </div>

//        <div className='flex justify-between items-center w-56 pt-1  px-5 bg-gray-200 border border-red-950   text-slate-600 rounded-lg'>
//         <div className="flex flex-col"><span className="text-xs">Monthly Outgoing</span><span className="font-bold text-red-600 text-sm">$0</span></div>
//         <div className='text-current p-1 bg-red-200 rounded-full shadow-3xl mb-4 text-red-400'><HiMiniArrowTrendingDown /></div>
//       </div>

//        <div className='flex justify-between items-center w-56 pt-1 px-5 bg-gray-200 border border-red-950   text-slate-600 rounded-lg'>
//         <div className="flex flex-col"><span className="text-xs">Transaction Limit</span><span className="font-bold text-gray-600 text-sm">$500,000</span></div>
//         <div className='text-current p-1  rounded-full shadow-3xl mb-4'><TbBrandSpeedtest /></div>
//       </div>

//     </div>
//     <div className='flex flex-col bg-gray-300 mt-2 rounded-lg xl:flex-row xl:gap-2 xl:mx-2 '>
//      <Column1/> 
//      <Column2/>
//     </div>
        
//     </>
//   )
// }

// export default DashBoardHome


import { CiWallet } from "react-icons/ci";
import { HiMiniArrowTrendingUp, HiMiniArrowTrendingDown } from "react-icons/hi2";
import { TbBrandSpeedtest } from "react-icons/tb";
import Column1 from '../UserDash/Column1';
import Column2 from '../UserDash/Column2';

const statCards = [
  {
    label: "Current Balance",
    value: "$7,000.00",
    icon: <CiWallet size={18} />,
    iconBg: "bg-[#5B0F12]/10",
    iconColor: "text-[#5B0F12]",
    valueColor: "text-gray-800",
  },
  {
    label: "Monthly Income",
    value: "$0.00",
    icon: <HiMiniArrowTrendingUp size={16} />,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    valueColor: "text-emerald-600",
  },
  {
    label: "Monthly Outgoing",
    value: "$0.00",
    icon: <HiMiniArrowTrendingDown size={16} />,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    valueColor: "text-red-500",
  },
  {
    label: "Transfer Limit",
    value: "$500,000.00",
    icon: <TbBrandSpeedtest size={16} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    valueColor: "text-gray-800",
  },
];

const DashBoardHome = () => {
  return (
    <>
      {/* Stat Cards Row */}
      <div className="hidden md:grid md:grid-cols-4 gap-3 pt-8 pb-0 px-3 w-full">
        {statCards.map((card, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-4 shadow-sm"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 font-medium">{card.label}</span>
              <span className={`text-base font-semibold ${card.valueColor}`}>{card.value}</span>
            </div>
            <span className={`flex items-center justify-center w-9 h-9 rounded-full ${card.iconBg} ${card.iconColor} shrink-0`}>
              {card.icon}
            </span>
          </div>
        ))}
      </div>

      {/* Main columns */}
      <div className="flex flex-col mt-0 rounded-xl xl:flex-row xl:gap-2 xl:mx-2">
        <Column1 />
        <Column2 />
      </div>
    </>
  );
};

export default DashBoardHome;