// import { CiCreditCard1 } from "react-icons/ci";
// import { TbWallet,TbCancel } from "react-icons/tb";
// import { MdOutlinePendingActions } from "react-icons/md";
// import { FaShieldAlt } from "react-icons/fa";
// import { FaBoltLightning } from "react-icons/fa6";
// import { TbWorld } from "react-icons/tb";
// import { AiOutlineControl } from "react-icons/ai";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { MdShoppingCart } from "react-icons/md";
// import { FaCcMastercard } from "react-icons/fa";
// import { FaCircleInfo,FaRegClock } from "react-icons/fa6";
// import { IoIosArrowRoundBack,IoIosArrowRoundForward } from "react-icons/io";


// const Virtualcards = () => {
//   return (
//     <>
//     <div className="pt-12 pb-56 px-5 bg-gray-200">
//           <div className="flex flex-row justify-between"><span className="text-xl font-bold">Virtual Cards</span> <span className="text-xs text-slate-50 rounded-md p-2 bg-slate-950"><span className="mr-2">+</span>Apply for card</span></div>

//           <div className="flex flex-col gap-6 my-9 md:flex-row">
//             <div className="flex gap-2"><span className='flex items-center w-8 p-2 bg-pink-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><CiCreditCard1/></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Active Cards</span><span className="font-bold">2</span></div></div>
//             <div  className="flex gap-2"><span className='flex items-center w-8 p-2 bg-pink-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><MdOutlinePendingActions /></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Pending Application</span><span className="font-bold">4</span></div></div>
//             <div  className="flex gap-2"><span className='flex items-center w-8 p-2 bg-pink-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><TbWallet/></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Total Card Balance</span><span className="font-bold">&#163; 7000</span></div></div>
//           </div>


//           <div className="flex flex-col bg-pink-950 py-3 px-4 text-slate-50 rounded-lg">
//             <h2 className="font-bold text-lg">Virtual Cards Made Easy</h2>
//             <p className="py-3 text-xs">Create virtual cards for secure online payments, subscription management, and more. Our Virtual cards offer enhanced security and control over your spending.</p>

//             <div className="flex flex-col justify-between">
//                  <div className="my-3 flex flex-row items-center gap-1"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><FaShieldAlt /></span><span className="text-xs">Secure payments<br />Protect your main account with separate virtual cards</span></div>
//                  <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><TbWorld /></span><span className="text-xs">Global Acceptance<br />Use anywhere major cards are accepted online</span></div>
//                  <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><AiOutlineControl /></span><span className="text-xs">Spending Controls<br />Set limits and monitor transactions in real-time</span></div>
//                   <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><FaBoltLightning /></span><span className="text-xs">Instant Issuance<br />Create and use cards within minutes</span></div>
//             </div>
           
//            <button className='flex items-center justify-center bg-pink-100 text-slate-900  p-2 rounded-md hover:bg-slate-200'><span className='text-sm'>Apply for card</span> <IoIosArrowRoundForward className='text-2xl ml-2' /></button>
//           </div>
        

//         <div className="flex flex-row justify-between mt-10 mb-5"><span>Your Cards</span> <span> New Card</span></div>

//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {/* cards */}
         
//                        <div className='w-full'>
//                             <div className='flex flex-col gap-2 w-full  bg-red-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
//                             <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><FaCcMastercard /></span></div>
//                             <div className='text-xs'>Virtual Banking</div>
//                             <div className='flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200 w-20 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Pending</span></div>
//                             <div className="flex flex-row items-center  gap-4 w-36">
//                                   <div className='flex gap-1'>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                     <div className='flex items-center mt-1 gap-1 text-xs'>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                     </div>
//                             </div>
//                             <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
//                             <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
//                           </div>
//                            <div className='text-xs'>Mastercard Platinum </div>
//                            <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
//                         </div>


//                         {/* 2 */}

//                           <div className='w-full'>
//                             <div className='flex flex-col gap-2 w-full  bg-red-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
//                             <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><FaCcMastercard /></span></div>
//                             <div className='text-xs'>Virtual Banking</div>
//                             <div className='flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200 w-20 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Pending</span></div>
//                             <div className="flex flex-row items-center  gap-4 w-36">
//                                   <div className='flex gap-1'>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                     <div className='flex items-center mt-1 gap-1 text-xs'>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                     </div>
//                             </div>
//                             <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
//                             <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
//                           </div>
//                            <div className='text-xs'>Mastercard Platinum </div>
//                            <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
//                         </div>

//                         {/* 3 */}

//                           <div className='w-full'>
//                             <div className='flex flex-col gap-2 w-full  bg-slate-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
//                             <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><FaCcMastercard /></span></div>
//                             <div className='text-xs'>Virtual Banking</div>
//                             <div className='flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200 w-20 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Pending</span></div>
//                             <div className="flex flex-row items-center  gap-4 w-36">
//                                   <div className='flex gap-1'>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                     <div className='flex items-center mt-1 gap-1 text-xs'>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                     </div>
//                             </div>
//                             <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
//                             <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
//                           </div>
//                            <div className='text-xs'>Mastercard Platinum </div>
//                            <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
//                         </div>

//                         {/* 4 */}
//                           <div className='w-full'>
//                             <div className='flex flex-col gap-2 w-full  bg-blue-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
//                             <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><FaCcMastercard /></span></div>
//                             <div className='text-xs'>Virtual Banking</div>
//                             <div className='flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200 w-20 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Pending</span></div>
//                             <div className="flex flex-row items-center  gap-4 w-36">
//                                   <div className='flex gap-1'>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                     <div className='flex items-center mt-1 gap-1 text-xs'>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                     </div>
//                             </div>
//                             <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
//                             <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
//                           </div>
//                            <div className='text-xs'>Mastercard Platinum </div>
//                            <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
//                         </div>

//                         {/* 5 */}

//                           <div className='w-full'>
//                             <div className='flex flex-col gap-2 w-full  bg-slate-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
//                             <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><FaCcMastercard /></span></div>
//                             <div className='text-xs'>Virtual Banking</div>
//                             <div className='flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200 w-20 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Pending</span></div>
//                             <div className="flex flex-row items-center  gap-4 w-36">
//                                   <div className='flex gap-1'>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                     <div className='flex items-center mt-1 gap-1 text-xs'>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                     </div>
//                             </div>
//                             <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
//                             <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
//                           </div>
//                            <div className='text-xs'>Mastercard Platinum </div>
//                            <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
//                         </div>
//                         {/* 5 */}

//                           <div className='w-full'>
//                             <div className='flex flex-col gap-2 w-full  bg-blue-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
//                             <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><FaCcMastercard /></span></div>
//                             <div className='text-xs'>Virtual Banking</div>
//                             <div className='flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200 w-20 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Pending</span></div>
//                             <div className="flex flex-row items-center  gap-4 w-36">
//                                   <div className='flex gap-1'>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                   <div className='flex gap-1'>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                       <div className="w-1 h-1 bg-white rounded-full"></div>
//                                   </div>
                                
//                                     <div className='flex items-center mt-1 gap-1 text-xs'>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                       <div >*</div>
//                                     </div>
//                             </div>
//                             <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
//                             <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
//                           </div>
//                            <div className='text-xs'>Mastercard Platinum </div>
//                            <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
//                         </div>

//         </div>

//         <div className="my-10 text-lg font-bold">How Virtual Cards Work</div>

//         <div className="flex flex-col gap-5 mb-9">
//               <div className="flex flex-col">
//                   <div className='text-current p-2 w-8 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><IoDocumentTextOutline /></div>
//                   <div>
//                     <h5>1. Apply</h5>
//                     <p>Complete the application form for your virtual card. Select your preferred card type and set your spending limits</p>
//                   </div>
//               </div>

//               <div className="flex flex-col">
//                   <div className='text-current p-2 w-8 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><IoMdCheckmarkCircleOutline /></div>
//                   <div>
//                     <h5>2. Activate</h5>
//                     <p>Once approved, your virtual card will be ready to use. View the card details and activate it from your dashboard</p>
//                   </div>
//               </div>

//               <div className="flex flex-col">
//                   <div className='text-current p-2 w-8 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><MdShoppingCart /></div>
//                   <div>
//                     <h5>3. Use</h5>
//                     <p>Use your virtual card for online transactions anywhere major credit cards are accepted. Monitor transactions in real-time</p>
//                   </div>
//               </div>
//         </div>
          

//         <div className="my-10 text-xl font-bold">Frequently Asked Question</div>
    
//         <div className="flex flex-col gap-9">
//            <div className="">
//              <h5 className="font-bold mb-4">What is a virtual card</h5>
//              <p className="text-sm">Virtual card is a digital payment card that can be used for online transactions. It works just like a physical card but exist only in digital form, providing enhanced security for online purchases </p>
//            </div>

//            <div>
//              <h5 className="font-bold mb-4">How secure are virtual cards?</h5>
//              <p className="text-sm">Virtual cards offer additional security as they are separate from your primary account. You can create cards with specific spending limits and even creat single-use cards for enhanced protection against fraud. </p>
//            </div>

//            <div>
//              <h5 className="font-bold mb-4">Can i have multiple cards?</h5>
//              <p className="text-sm">Yes, you can apply for multiple virtual cards for different purposes - such as one for subscriptions, another for shopping, etc. Each card can have its own limits and settings.</p>
//            </div>

//             <div>
//              <h5 className="font-bold mb-4">How long does it take to have a virtual card?</h5>
//              <p className="text-sm">Virtual cards are typically issued within minutes after approval. Once approved, you can immediately view and use the card details for online transactions.</p>
//            </div>

//         </div>
   
//     </div>
//     </>
//   )
// }

// export default Virtualcards


import { useState } from "react";
import { Link } from "react-router-dom";
import { CiCreditCard1 } from "react-icons/ci";
import { TbWallet, TbCancel } from "react-icons/tb";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { AiOutlineControl } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { FaCircleInfo, FaRegClock, FaChevronDown } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const cards = [
  { bg: "bg-rose-900", label: "Mastercard Platinum", holder: "John Smith", expiry: "09/27", last: "4821", status: "active" },
  { bg: "bg-slate-900", label: "Mastercard Standard", holder: "John Smith", expiry: "11/26", last: "3390", status: "pending" },
  { bg: "bg-blue-900", label: "Mastercard Gold", holder: "John Smith", expiry: "03/28", last: "7712", status: "active" },
  { bg: "bg-purple-900", label: "Mastercard Platinum", holder: "John Smith", expiry: "07/26", last: "5503", status: "pending" },
  { bg: "bg-emerald-900", label: "Mastercard Business", holder: "John Smith", expiry: "12/27", last: "9140", status: "frozen" },
  { bg: "bg-red-900", label: "Mastercard Standard", holder: "John Smith", expiry: "05/27", last: "2267", status: "pending" },
];

const statusConfig = {
  active: { label: "Active", classes: "bg-green-100 text-green-800" },
  pending: { label: "Pending", classes: "bg-yellow-100 text-yellow-800" },
  frozen: { label: "Frozen", classes: "bg-blue-100 text-blue-800" },
};

const features = [
  { icon: <FaShieldAlt />, title: "Secure payments", desc: "Protect your main account with separate virtual cards" },
  { icon: <TbWorld />, title: "Global acceptance", desc: "Use anywhere major cards are accepted online" },
  { icon: <AiOutlineControl />, title: "Spending controls", desc: "Set limits and monitor transactions in real-time" },
  { icon: <FaBoltLightning />, title: "Instant issuance", desc: "Create and use cards within minutes" },
];

const steps = [
  { icon: <IoDocumentTextOutline />, step: "1", title: "Apply", desc: "Complete the application form. Select your preferred card type and set spending limits." },
  { icon: <IoMdCheckmarkCircleOutline />, step: "2", title: "Activate", desc: "Once approved, your card is ready. View details and activate it from your dashboard." },
  { icon: <MdShoppingCart />, step: "3", title: "Use", desc: "Use your card for online transactions anywhere major credit cards are accepted. Monitor in real-time." },
];

const faqs = [
  { q: "What is a virtual card?", a: "A virtual card is a digital payment card for online transactions. It works just like a physical card but exists only in digital form, providing enhanced security for online purchases." },
  { q: "How secure are virtual cards?", a: "Virtual cards offer additional security as they are separate from your primary account. You can set specific spending limits and even create single-use cards for extra fraud protection." },
  { q: "Can I have multiple cards?", a: "Yes, you can apply for multiple virtual cards for different purposes — one for subscriptions, another for shopping, etc. Each card can have its own limits and settings." },
  { q: "How long does it take to get a virtual card?", a: "Virtual cards are typically issued within minutes after approval. Once approved, you can immediately view and use the card details for online transactions." },
];

const DotGroup = () => (
  <div className="flex gap-1">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-white/70 rounded-full" />
    ))}
  </div>
);

const VirtualCard = ({ card }) => {
  const { bg, label, holder, expiry, last, status } = card;
  const { label: statusLabel, classes } = statusConfig[status];
  return (
    <div className="flex flex-col gap-2">
      <div className={`${bg} text-white rounded-xl p-4 flex flex-col gap-3 min-h-[148px] relative overflow-hidden`}>
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/5" />
        <div className="absolute -bottom-5 -left-3 w-20 h-20 rounded-full bg-white/4" />
        <div className="flex justify-between items-start z-10">
          <div>
            <p className="text-[11px] opacity-80">Western Zurich Bank</p>
            <p className="text-[11px] opacity-60">Virtual</p>
          </div>
          <FaCcMastercard className="text-2xl opacity-90" />
        </div>
        <div className="z-10">
          <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/15 text-white/85`}>
            <FaRegClock className="text-[10px]" /> {statusLabel}
          </span>
          <div className="flex items-center gap-3 mt-2">
            <DotGroup />
            <DotGroup />
            <DotGroup />
            <span className="text-sm font-medium tracking-widest">{last}</span>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-[10px] opacity-60">Card holder</p>
              <p className="text-xs font-medium">{holder}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] opacity-60">Valid thru</p>
              <p className="text-xs font-medium">{expiry}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-500">{label}</p>
      <button className="text-xs text-center border border-slate-300 dark:border-slate-600 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
        View details
      </button>
    </div>
  );
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3.5 text-left text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        {q}
        <FaChevronDown className={`text-slate-400 text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
          {a}
        </div>
      )}
    </div>
  );
};

const VirtualCards = () => {
  return (
    <div className="pt-8 pb-20 px-5 max-w-3xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-slate-400 mb-0.5">Western Zurich Bank</p>
          <h1 className="text-xl font-medium">Virtual Cards</h1>
        </div>
        <button className="flex items-center gap-1.5 text-sm bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-slate-700 transition-colors">
          <span className="text-base leading-none">+</span> Apply for card
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { icon: <CiCreditCard1 />, label: "Active cards", value: "2" },
          { icon: <MdOutlinePendingActions />, label: "Pending", value: "4" },
          { icon: <TbWallet />, label: "Total balance", value: "£7,000" },
        ].map(({ icon, label, value }) => (
          <div key={label} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5">
            <div className="w-7 h-7 flex items-center justify-center bg-pink-950 rounded-lg text-white text-sm mb-2">{icon}</div>
            <p className="text-[11px] text-slate-400 mb-0.5">{label}</p>
            <p className="font-medium text-base">{value}</p>
          </div>
        ))}
      </div>

      {/* Promo banner */}
      <div className="bg-[#1a0a1e] rounded-2xl p-6 text-white mb-8">
        <h2 className="text-lg font-medium mb-2">Virtual Cards Made Easy</h2>
        <p className="text-sm text-purple-200/70 mb-5 leading-relaxed">
          Create virtual cards for secure online payments, subscription management, and more. Enhanced security and full spending control, all in one place.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-lg text-sm mb-2">{icon}</div>
              <p className="text-xs font-medium mb-1">{title}</p>
              <p className="text-[11px] text-purple-200/60 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
        {/* <button className="w-full flex items-center justify-center gap-2 bg-purple-200 text-[#1a0a1e] rounded-xl py-3 text-sm font-medium hover:bg-purple-100 transition-colors">
          Apply for a card <IoIosArrowRoundForward className="text-lg" />
        </button> */}
        <Link  to="/Userdashboard/virtualcards/applycard">  <button className="w-full flex items-center justify-center gap-2 bg-purple-200 text-[#1a0a1e] rounded-xl py-3 text-sm font-medium hover:bg-purple-100 transition-colors">
          Apply for a card <IoIosArrowRoundForward className="text-lg" />
        </button></Link>
      </div>

      {/* Your cards */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-medium">Your Cards</h2>
        <button className="text-xs text-slate-500 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          + New card
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => <VirtualCard key={i} card={card} />)}
      </div>

      {/* How it works */}
      <h2 className="text-base font-medium mt-10 mb-4">How Virtual Cards Work</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map(({ icon, step, title, desc }) => (
          <div key={step} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <div className="w-7 h-7 flex items-center justify-center bg-slate-900 text-purple-300 rounded-full text-xs font-medium mb-3">{step}</div>
            <h3 className="text-sm font-medium mb-1">{title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-base font-medium mt-10 mb-4">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
      </div>
    </div>
  );
};

export default VirtualCards;