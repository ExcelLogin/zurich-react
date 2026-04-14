import { CiWallet } from "react-icons/ci";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { TbBrandSpeedtest } from "react-icons/tb";
import Column1 from '../UserDash/Column1'
import Column2 from '../UserDash/Column2'
// import { useState,useEffect } from 'react'



const DashBoardHome = () => {
  // const usr = useStoreState((state) => state.user);

  // console.log(usr)

  return (
    <>
    
    <div className='hidden gap-4 pt-10 pb-56 px-2 w-full text-slate-700 bg-gray-200 md:flex md:pb-0'> 
      <div className='flex justify-between items-center w-56 pt-1  px-5 bg-gray-200 border border-red-950  text-slate-600 rounded-lg'>
        <div className="flex flex-col"><span className="text-xs">Current balance</span><span className="font-bold text-sm">$7000</span></div>
        <div className='text-current p-1 bg-gray-300  rounded-full shadow-3xl mb-4 text-zinc-100'><CiWallet className="text-slate-900" /></div>
      </div>

      <div className='flex justify-between items-center w-56 pt-1   px-5 bg-gray-200 border border-red-950   text-slate-600 rounded-lg'>
        <div className="flex flex-col"><span className="text-xs">Monthly Income</span><span className="font-bold text-green-600 text-sm">$0</span></div>
        <div className='text-current p-1 bg-green-200 rounded-full shadow-3xl mb-4 text-green-400'><HiMiniArrowTrendingUp /></div>
      </div>

       <div className='flex justify-between items-center w-56 pt-1  px-5 bg-gray-200 border border-red-950   text-slate-600 rounded-lg'>
        <div className="flex flex-col"><span className="text-xs">Monthly Outgoing</span><span className="font-bold text-red-600 text-sm">$0</span></div>
        <div className='text-current p-1 bg-red-200 rounded-full shadow-3xl mb-4 text-red-400'><HiMiniArrowTrendingDown /></div>
      </div>

       <div className='flex justify-between items-center w-56 pt-1 px-5 bg-gray-200 border border-red-950   text-slate-600 rounded-lg'>
        <div className="flex flex-col"><span className="text-xs">Transaction Limit</span><span className="font-bold text-gray-600 text-sm">$500,000</span></div>
        <div className='text-current p-1  rounded-full shadow-3xl mb-4'><TbBrandSpeedtest /></div>
      </div>

    </div>
    <div className='flex flex-col bg-gray-300 mt-2 rounded-lg xl:flex-row xl:gap-2 xl:mx-2 '>
     <Column1/> 
     <Column2/>
    </div>
        
    </>
  )
}

export default DashBoardHome
