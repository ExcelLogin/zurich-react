import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

import { useStoreActions,useStoreState } from 'easy-peasy';
// import useAxiosFetch from '../../hooks/useAxiosFetch';



const BalanceCard = () => {

const usr = useStoreState((state) => state.usr);
//   const setUser= useStoreActions((actions) => actions.setUser);

//   const { data, fetchError, isLoading } = useAxiosFetch('/userData');
  
//   useEffect(() => { 
//     console.log(data)
//     console.log(fetchError)
//     setUser(data);
//   }, [data, usr])  

// console.log(usr)

  return (
    <div className=' w-full mt-13 rounded-md h-auto '>
       <div className="pt-2 px-0 mx-2 bg-gray-900  text-slate-50 rounded-xl shadow-2xl xl:mx-0">
        <div className="text-xs font-extrabold px-2  py-2">Good Evening {usr?.firstname} !</div>
            <div className="flex flex-row justify-between items-center text-xs font-medium py-2 px-2">
                <div>Available balance</div>
                <div className="text-sm font-extrabold">
                 <span>&#163;</span>
                <span>
                {usr?.balance}
                     {/* {isLoading && <p>...</p>}
                    {!isLoading && fetchError && <p>{fetchError}</p>}
                    {!isLoading && !fetchError && (userDetails.balance ? userDetails.balance : <p className="statusMsg">Balance unavailable.</p>)} */}
                </span>
                <span>.00</span>
                </div>
            </div>
            <div className="flex flex-row justify-between text-xs font-medium py-2 px-2">
                    <div>Status</div>
                    <div className="flex items-center text-xs text-green-800 bg-green-300 px-1 rounded-3xl"><div><GoDotFill /></div><div className="font-medium">{usr?.status}</div></div>
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
                <Link className='border bg-slate-800  p-1 rounded-md shadow-xl text-xs' to="/login" id="fund">Fund Account</Link>
                <Link className='bg-slate-800 shadow-xl border p-1 text-xs rounded-md' to="/" id="transact-history">Transaction History</Link>
            </div>
            
        </div>
        
       
    </div>
  )
}

export default BalanceCard
