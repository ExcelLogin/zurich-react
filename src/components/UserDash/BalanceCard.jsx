import { LuDot } from "react-icons/lu";
import { TbWallet,TbActivityHeartbeat } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

import { useStoreActions,useStoreState } from 'easy-peasy';
// import useAxiosFetch from '../../hooks/useAxiosFetch';



const BalanceCard = () => {

const usr = useStoreState((state) => state.usr);


  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className=' w-full mt-13 rounded-md h-auto '>
       <div className="pt-2 px-0 mx-2 bg-gray-900  text-slate-50 rounded-xl shadow-2xl xl:mx-0">
        <div className="text-xs font-extrabold px-2  py-2">Good Evening {usr?.firstname} !</div>
            <div className="flex flex-row justify-between items-center text-xs font-medium py-2 px-2">
                <div>Available balance</div>
                <div className="text-sm font-extrabold">
                 <span>&#163;</span>
                <span>
                {usr?.balance.toFixed(2)}
                     {/* {isLoading && <p>...</p>}
                    {!isLoading && fetchError && <p>{fetchError}</p>}
                    {!isLoading && !fetchError && (userDetails.balance ? userDetails.balance : <p className="statusMsg">Balance unavailable.</p>)} */}
                </span>
                {/* <span>.00</span> */}
                </div>
            </div>
            <div className="flex flex-row justify-between text-xs font-medium py-2 px-2">
                    <div>Status</div>
                    <div className={`flex items-center text-xs px-1 rounded-3xl ${getStatusStyle(usr?.status)}`}><div><GoDotFill /></div><div className={`font-medium`}>{usr?.status}</div></div>
            </div>

            <div className="flex flex-row justify-between text-xs font-normal py-2 px-2">
                <div>Account Number</div>
                <div>{usr?.accountNumber}</div>
            </div>

            <div className="flex flex-row justify-between text-xs  py-2 px-2" >
                <div>Account Type</div>
                <div>{usr?.accounttype}</div>
            </div>

            <div className="flex flex-row justify-between py-2 px-2  rounded-md shadow-sm">
                <Link className='flex items-center border bg-slate-800  p-1 rounded-md shadow-xl text-xs' to="/login" id="fund"><TbWallet /> <span className="pl-1">Fund Account</span></Link>
                <Link className='flex items-center bg-slate-800 shadow-xl border p-1 text-xs rounded-md' to="/" id="transact-history"><TbActivityHeartbeat /> <span className="pl-1">Transaction History</span></Link>
            </div>
            
        </div>
        
       
    </div>
  )
}

export default BalanceCard
