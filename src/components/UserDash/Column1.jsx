
import { Link } from "react-router-dom"
import { FaCircleInfo,FaRegClock } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { LuHistory,LuList  } from "react-icons/lu";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import { TbWorld} from "react-icons/tb";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import TransactionTables from "./Transactiontables"
import BalanceCard from "./BalanceCard"
import QuickActions from "./QuickActions";
import CardsSection from "./CardsSection"
import { useState,useEffect } from 'react'
import { useStoreActions,useStoreState } from 'easy-peasy';

const Column1 = () => {
const [openacc, setAcc] =useState(false);
const [tfopen, settfOpen] =useState(false);


const handleOpenAcc = () => setAcc(true)
const handlecloseAcc = () => setAcc(false)



const handleOpenTf = () => settfOpen(true)
const handlecloseTf = () => settfOpen(false)

const usr = useStoreState((state) => state.usr);

console.log(usr)


    
  return (
<div className='flex flex-col h-min mb-10 px-2 py-0 w-full mt-10 rounded-xl bg-gray-200'>
      <BalanceCard/>
         {/*Action buttons*/}
        <QuickActions handleOpenAcc={handleOpenAcc}  handleOpenTf={handleOpenTf}/>


         {/* cards section */}
         
       <CardsSection/>
        {/* transaction history table*/}
   
      
      <TransactionTables/>


          
{/* Acc Info modal*/}
<Modal
  open={openacc}
  onClose={handlecloseAcc}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full mx-auto sm:w-9/12 md:w-1/2'
>
  <Box className="flex flex-col w-11/12 mx-auto absolute rounded-lg bg-zinc-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="flex flex-col items-center w-full rounded-lg bg-slate-100">

      {/* Close button */}
      <div
        className="close-btn self-end px-3 pt-2 text-xl cursor-pointer"
        onClick={handlecloseAcc}
      >
        &times;
      </div>

      {/* Bank icon */}
      <div className='text-current p-2 bg-[#5B0F12] rounded-full shadow-3xl mb-2 text-zinc-100'>
        <BsBank />
      </div>

      {/* Bank header info */}
      <div className="flex flex-col items-center mb-2 px-2 text-center">
        <h4 className='text-sm font-medium'>Bank Account Details</h4>
        <p className='text-xs'>{usr?.bankName ?? "—"}</p>
        <p className='text-xs text-gray-500'>{usr?.bankAddress ?? "—"}</p>
      </div>

      {/* Account details rows */}
      <div className='w-full px-6 py-4'>
        <div className="flex flex-row items-center gap-2 px-5 mb-2">
          <FaCircleInfo />
          <h5 className='text-sm font-bold'>Account Details</h5>
        </div>

        {/* Account Holder */}
        <div className='flex justify-between py-2 px-5 border-b border-gray-200'>
          <div className="flex items-center gap-1">
            <GoDotFill /><span className='text-xs text-gray-500'>Account Holder</span>
          </div>
          <span className='text-xs font-medium'>
            {usr?.firstName && usr?.lastName
              ? `${usr.firstName} ${usr.lastName}`
              : usr?.fullName ?? "—"}
          </span>
        </div>

        {/* Account Balance */}
        <div className='flex justify-between py-2 px-5 border-b border-gray-200'>
          <div className="flex items-center gap-1">
            <GoDotFill /><span className='text-xs text-gray-500'>Account Balance</span>
          </div>
          <span className='text-xs font-medium text-green-700'>
            {usr?.balance != null
              ? new Intl.NumberFormat("en-US", { style: "currency", currency: usr?.currency ?? "USD" }).format(usr.balance)
              : "—"}
          </span>
        </div>

        {/* Account Number */}
        <div className='flex justify-between py-2 px-5 border-b border-gray-200'>
          <div className="flex items-center gap-1">
            <GoDotFill /><span className='text-xs text-gray-500'>Account Number</span>
          </div>
          <span className='text-xs font-mono font-medium'>
            {usr?.accountNumber ?? "—"}
          </span>
        </div>

        {/* Sort Code */}
        <div className='flex justify-between py-2 px-5 border-b border-gray-200'>
          <div className="flex items-center gap-1">
            <GoDotFill /><span className='text-xs text-gray-500'>Sort Code</span>
          </div>
          <span className='text-xs font-mono font-medium'>
            {usr?.sortCode ?? "—"}
          </span>
        </div>

        {/* Account Type */}
        <div className='flex justify-between py-2 px-5 border-b border-gray-200'>
          <div className="flex items-center gap-1">
            <GoDotFill /><span className='text-xs text-gray-500'>Account Type</span>
          </div>
          <span className='text-xs font-medium capitalize'>
            {usr?.accountType ?? "—"}
          </span>
        </div>

        {/* Payment Reference */}
        <div className='flex justify-between py-2 px-5'>
          <div className="flex items-center gap-1">
            <GoDotFill /><span className='text-xs text-gray-500'>Payment Reference</span>
          </div>
          <span className='text-xs font-mono font-medium'>
            {usr?.paymentReference ?? usr?.accountNumber ?? "Payment"}
          </span>
        </div>
      </div>

      {/* Info banner */}
      <div className="flex flex-row py-3 px-3 gap-2 bg-[#5B0F12] mx-2 mb-4 rounded-lg">
        <div className="mt-0.5"><FaCircleInfo size={13} /></div>
        <p className='text-xs'>
          Payment reference helps {usr?.bankName ?? "your bank"} track payments faster.
          Please include it in your wire transfer description.
        </p>
      </div>

    </div>
  </Box>
</Modal>


       {/* Send money modal */}
<Modal
  open={tfopen}
  onClose={handlecloseTf}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full mx-auto sm:w-9/12 md:w-1/2'
>
  <Box className="flex flex-col w-11/12 mx-auto absolute rounded-lg bg-zinc-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">

    {/* Header */}
    <div className="flex flex-col items-center bg-[#40080a] pt-8 pb-6 px-4 relative">

      {/* Close button */}
      <button
        onClick={handlecloseTf}
        className="absolute top-3 right-4 text-zinc-400 hover:text-zinc-100 text-xl leading-none"
      >
        &times;
      </button>

      <div className='p-3 bg-[#9c373b] rounded-full mb-3 text-zinc-100'>
        <IoIosSend size={22} />
      </div>

      <h4 className='text-base font-semibold text-zinc-100'>Send Money</h4>
      <p className='text-xs text-zinc-400 mt-1'>Swift and secure money transfer</p>
    </div>

    {/* Transfer options */}
    <div className="flex flex-col px-4 py-5 gap-3">

      {/* Local Transfer */}
      <Link
        to="/Userdashboard/localtransfer"
        onClick={handlecloseTf}
        className="flex items-center justify-between bg-slate-100 hover:bg-white transition-colors rounded-xl px-4 py-4"
      >
        <div className="flex items-center gap-4">
          <div className='p-2.5 bg-[#5B0F12] rounded-full text-zinc-100 shrink-0'>
            <CiUser size={18} />
          </div>
          <div>
            <h5 className='text-sm font-bold text-gray-900'>Local Transfer</h5>
            <p className='text-xs text-gray-500 mt-0.5'>0% handling charges</p>
          </div>
        </div>
        <MdArrowForwardIos size={14} className="text-gray-400" />
      </Link>

      {/* International Transfer */}
      <Link
        to="/Userdashboard/intertransfer"
        onClick={handlecloseTf}
        className="flex items-center justify-between bg-slate-100 hover:bg-white transition-colors rounded-xl px-4 py-4"
      >
        <div className="flex items-center gap-4">
          <div className='p-2.5 bg-[#5B0F12] rounded-full text-zinc-100 shrink-0'>
            <TbWorld size={18} />
          </div>
          <div>
            <h5 className='text-sm font-bold text-gray-900'>International Transfer</h5>
            <p className='text-xs text-gray-500 mt-0.5'>Global reach, 0% fee</p>
          </div>
        </div>
        <MdArrowForwardIos size={14} className="text-gray-400" />
      </Link>

    </div>

    {/* Footer close */}
    <div className="px-4 pb-5">
      <button
        onClick={handlecloseTf}
        className="w-full py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-gray-600 hover:bg-slate-100 transition-colors"
      >
        Cancel
      </button>
    </div>

  </Box>
</Modal>





</div>


  )
}

export default Column1






