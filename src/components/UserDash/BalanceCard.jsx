// import { LuDot } from "react-icons/lu";
// import { TbWallet,TbActivityHeartbeat } from "react-icons/tb";
// import { GoDotFill } from "react-icons/go";
// import { Link } from "react-router-dom"
// import { useState, useEffect } from "react";

// import { useStoreActions,useStoreState } from 'easy-peasy';
// // import useAxiosFetch from '../../hooks/useAxiosFetch';



// const BalanceCard = () => {

// const usr = useStoreState((state) => state.usr);


//   const getStatusStyle = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'active':
//         return 'bg-green-100 text-green-800 border-green-200';
//       case 'inactive':
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800 border-yellow-200';
//       default:
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//     }
//   };

//   return (
//     <div className=' w-full mt-13 rounded-md h-auto '>
//        <div className="pt-2 px-0 mx-2 bg-gray-900  text-slate-50 rounded-xl shadow-2xl xl:mx-0">
//         <div className="text-xs font-extrabold px-2  py-2">Good Evening {usr?.firstname} !</div>
//             <div className="flex flex-row justify-between items-center text-xs font-medium py-2 px-2">
//                 <div>Available balance</div>
//                 <div className="text-sm font-extrabold">
//                  <span>&#163;</span>
//                 <span>
//                 {usr?.balance.toFixed(2)}
//                      {/* {isLoading && <p>...</p>}
//                     {!isLoading && fetchError && <p>{fetchError}</p>}
//                     {!isLoading && !fetchError && (userDetails.balance ? userDetails.balance : <p className="statusMsg">Balance unavailable.</p>)} */}
//                 </span>
//                 {/* <span>.00</span> */}
//                 </div>
//             </div>
//             <div className="flex flex-row justify-between text-xs font-medium py-2 px-2">
//                     <div>Status</div>
//                     <div className={`flex items-center text-xs px-1 rounded-3xl ${getStatusStyle(usr?.status)}`}><div><GoDotFill /></div><div className={`font-medium`}>{usr?.status}</div></div>
//             </div>

//             <div className="flex flex-row justify-between text-xs font-normal py-2 px-2">
//                 <div>Account Number</div>
//                 <div>{usr?.accountNumber}</div>
//             </div>

//             <div className="flex flex-row justify-between text-xs  py-2 px-2" >
//                 <div>Account Type</div>
//                 <div>{usr?.accounttype}</div>
//             </div>

//             <div className="flex flex-row justify-between py-2 px-2  rounded-md shadow-sm">
//                 <Link className='flex items-center border bg-slate-800  p-1 rounded-md shadow-xl text-xs' to="/Userdashboard/deposit" id="fund"><TbWallet /> <span className="pl-1">Fund Account</span></Link>
//                 <Link className='flex items-center bg-slate-800 shadow-xl border p-1 text-xs rounded-md' to="/Userdashboard/accounthistory" id="transact-history"><TbActivityHeartbeat /> <span className="pl-1">Transaction History</span></Link>
//             </div>
            
//         </div>
        
       
//     </div>
//   )
// }

// export default BalanceCard









// import { TbWallet, TbActivityHeartbeat } from "react-icons/tb";
// import { GoDotFill } from "react-icons/go";
// import { Link } from "react-router-dom";
// import { useStoreState } from 'easy-peasy';

// const BalanceCard = () => {
//   const usr = useStoreState((state) => state.usr);

//   const getStatusStyle = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'active':   return { pill: 'bg-green-500/10 border-green-500/30', text: 'text-green-400', dot: 'text-green-400' };
//       case 'inactive': return { pill: 'bg-gray-500/10 border-gray-500/30',   text: 'text-gray-400',  dot: 'text-gray-400' };
//       case 'pending':  return { pill: 'bg-yellow-500/10 border-yellow-400/30', text: 'text-yellow-400', dot: 'text-yellow-400' };
//       default:         return { pill: 'bg-blue-500/10 border-blue-400/30',   text: 'text-blue-400',  dot: 'text-blue-400' };
//     }
//   };

//   const s = getStatusStyle(usr?.status);

//   return (
//     <div className="w-full mt-13 px-2 xl:px-0 space-y-2.5">

//       {/* Top bar — greeting + status */}
//       <div className="bg-gray-900 rounded-xl px-5 py-4 flex items-center justify-between">
//         <p className="text-sm font-medium text-white/90">
//           Good Evening, {usr?.firstname}!
//         </p>
//         <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${s.pill} ${s.text}`}>
//           <GoDotFill size={8} className={s.dot} />
//           {usr?.status}
//         </div>
//       </div>

//       {/* Balance panel */}
//       <div className="bg-slate-800 rounded-xl px-5 py-5 border border-white/[0.06] space-y-1">
//         <p className="text-[11px] uppercase tracking-widest text-white/35">
//           Available balance
//         </p>
//         <p className="text-[32px] font-medium text-white font-mono leading-tight">
//           <span className="text-xl text-white/55">£</span>
//           {usr?.balance?.toFixed(2)}
//         </p>

//         <div className="h-px bg-white/[0.08] my-3" />

//         <div className="flex justify-between items-center py-1">
//           <span className="text-xs text-white/35">Account number</span>
//           <span className="text-xs text-white/75 font-mono">{usr?.accountNumber}</span>
//         </div>

//         <div className="flex justify-between items-center py-1">
//           <span className="text-xs text-white/35">Account type</span>
//           <span className="text-[11px] text-white/45 uppercase tracking-wide">{usr?.accounttype}</span>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="grid grid-cols-2 gap-2.5">
//         <Link
//           to="/Userdashboard/deposit"
//           className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 border border-white/10 text-white/70 hover:text-white/95 hover:bg-slate-700 text-xs font-medium transition-colors"
//         >
//           <TbWallet size={14} />
//           Fund Account
//         </Link>
//         <Link
//           to="/Userdashboard/accounthistory"
//           className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 border border-white/10 text-white/70 hover:text-white/95 hover:bg-slate-700 text-xs font-medium transition-colors"
//         >
//           <TbActivityHeartbeat size={14} />
//           Transaction History
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default BalanceCard;



import { TbWallet, TbActivityHeartbeat } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useStoreState } from 'easy-peasy';

const BalanceCard = () => {
  const usr = useStoreState((state) => state.usr);

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':   return { pill: 'bg-green-500/10 border-green-500/30', text: 'text-green-400', dot: 'text-green-400' };
      case 'inactive': return { pill: 'bg-white/5 border-white/10',          text: 'text-white/40',  dot: 'text-white/40' };
      case 'pending':  return { pill: 'bg-yellow-500/10 border-yellow-400/30', text: 'text-yellow-400', dot: 'text-yellow-400' };
      default:         return { pill: 'bg-white/5 border-white/10',          text: 'text-white/40',  dot: 'text-white/40' };
    }
  };

  const s = getStatusStyle(usr?.status);

  return (
    <div className="w-full mt-13 px-2 xl:px-0 space-y-2.5">

      {/* Top bar */}
      <div className="bg-[#5B0F12]  rounded-xl px-5 py-4 flex items-center justify-between">
        <p className="text-sm font-medium text-white/90">
          Good Evening, {usr?.firstname}!
        </p>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${s.pill} ${s.text}`}>
          <GoDotFill size={8} className={s.dot} />
          {usr?.status}
        </div>
      </div>

      {/* Balance panel */}
      <div className="bg-[#5B0F12]   rounded-xl px-5 py-5 border border-white/[0.06] space-y-1">
        <p className="text-[11px] uppercase tracking-widest text-white/35">
          Available balance
        </p>
        <p className="text-[32px] font-medium text-white font-mono leading-tight">
          <span className="text-xl text-white/55">$</span>
          {usr?.balance?.toFixed(2)}
        </p>

        <div className="h-px bg-white/[0.08] my-3" />

        <div className="flex justify-between items-center py-1">
          <span className="text-xs text-white/35">Account number</span>
          <span className="text-xs text-white/75 font-mono">{usr?.accountNumber}</span>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-xs text-white/35">Account type</span>
          <span className="text-[11px] text-white/45 uppercase tracking-wide">{usr?.accounttype}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2.5">
        <Link
          to="/Userdashboard/deposit"
          className="flex items-center justify-center gap-2 py-3 rounded-lg
            bg-[#5B0F12]  border border-white/10
            text-white/70 hover:text-white/95 hover:bg-[#2a0808]
            text-xs font-medium transition-colors"
        >
          <TbWallet size={14} />
          Fund Account
        </Link>
        <Link
          to="/Userdashboard/accounthistory"
          className="flex items-center justify-center gap-2 py-3 rounded-lg
            bg-[#5B0F12]  border border-white/10
            text-white/70 hover:text-white/95 hover:bg-[#5B0F12] 
            text-xs font-medium transition-colors"
        >
          <TbActivityHeartbeat size={14} />
          Transaction History
        </Link>
      </div>

    </div>
  );
};

export default BalanceCard;











