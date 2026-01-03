import React from 'react'
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

import BalanceCard from "./BalanceCard";
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




    
  return (
<div className='flex flex-col h-min mb-2 px-0 mx-0  py-0 w-full mt-10 rounded-xl bg-gray-200'>
      <BalanceCard/>
         {/*Action buttons*/}
         <div className="w-full mt-10 rounded-md h-auto">
             <h5 className='text-center text-sm font-extrabold'>What would you like to do today?</h5>
              <p className='text-center font-medium text-xs'>Choose for our popular actions below</p>
              <div class="flex flex-col gap-6 justify-center items-center mt-8 sm:flex-row sm:gap-1 md:flex-col md:gap-6 lg:flex-row lg:gap-2">
                  <div className='flex flex-row gap-9 shadow-2xl px-1 py-1 rounded-xl sm:gap-3 md:gap-6' >
                    <Link>
                      <button onClick={handleOpenAcc} className="flex flex-col justify-center items-center rounded-2xl w-32 h-20  bg-gray-900 text-slate-50 border">
                        <FaCircleInfo className='text-sm' />
                        <span className='text-xs font-bold'>Account info</span>
                      </button>
                    </Link>
                    <Link>
                      <button onClick={handleOpenTf} className="flex flex-col justify-center items-center  text-slate-700 bg-gray-300 rounded-2xl w-32 h-20  text-sm font-bold">
                        <IoIosSend className='text-sm' />
                         <span className='text-xs font-bold'>Send money</span>  
                      </button>
                    </Link>
                  </div>
                  <div className='flex flex-row gap-9 shadow-2xl px-1 py-1 rounded-xl sm:gap-3 md:gap-6'>
                   <Link to="/Userdashboard/deposit">
                    <button className="flex flex-col justify-center items-center shadow-outline text-slate-700 bg-gray-300 rounded-2xl w-32 h-20   text-sm font-bold">
                        <IoAddCircleOutline className='text-sm' />
                        <span className='text-xs font-bold'> deposit</span>
                    </button>
                   </Link>
                   <Link to="/Userdashboard/accounthistory" className="card">
                     <button  className="flex flex-col justify-center items-center text-slate-700 bg-gray-300 rounded-2xl w-32 h-20  text-sm font-bold">
                        <LuHistory className='text-sm' />
                        <span className='text-xs font-bold'>history</span>
                     </button>
                   </Link>
                  </div>
                   
              </div> 
               <div className="z-10 relative"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="0.3" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
        </div>
         {/* cards section */}
        <div className='mt-20 mb-10  border-amber-950'>
            <div className='w-full flex flex-row justify-between px-1'>
                <Link to="/Userdashboard/virtualcards" className='flex flex-row items-center gap-2 text-xs'><CiCreditCard1 /> <span className='font-bold text-xs'>Your Cards</span></Link>
                <Link to="/Userdashboard/virtualcards"  className='flex flex-row items-center gap-2 text-xs'><span className='font-bold text-xs'>View All</span> <MdArrowForwardIos /></Link> 
            </div>

            <div className='flex flex-col items-center justify-around gap-8 px-8 w-full h-auto mt-8 md:flex-row'>
                {/* card 1 */}
      
                <div className='w-full'>
                    <div className='flex flex-col gap-2 w-full  bg-red-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
                    <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><FaCcMastercard /></span></div>
                    <div className='text-xs'>Virtual Banking</div>
                    <div className='flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200 w-20 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Pending</span></div>
                    <div className="flex flex-row items-center  gap-4 w-36">
                          <div className='flex gap-1'>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        
                          <div className='flex gap-1'>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        
                          <div className='flex gap-1'>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        
                            <div className='flex items-center mt-1 gap-1 text-xs'>
                              <div >*</div>
                              <div >*</div>
                              <div >*</div>
                              <div >*</div>
                            </div>
                    </div>
                    <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
                    <div className='flex justify-between items-center text-xs'><span>{usr?.firstname}</span><span>/</span></div>
                  </div>
                   <div className='text-xs'>Mastercard Platinum </div>
                   <button className='text-xs w-full text-center border border-slate-400 py-2 rounded-md'><Link to="/Userdashboard/virtualcards/applycard" >View Details</Link></button>
                </div>
                 
              
                {/* card 2 */}

                <div className='w-full'>
                  <div className='flex flex-col gap-2 w-full bg-black  text-slate-100 py-4 px-3 my-2 rounded-md'>
                    <div className='flex items-center justify-between'><span className='text-xs'>Western Zurich bank</span><span><SiAmericanexpress /></span></div>
                    <div className='text-xs'>Virtual Banking</div>
                    <div className='flex items-center gap-1 bg-green-100 text-green-800 border-green-200 w-16 rounded-2xl text-xs pl-1'><span><FaRegClock /></span><span>Active</span></div>
                    <div className="flex flex-row items-center  gap-4 w-36">
                          <div className='flex gap-1'>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        
                          <div className='flex gap-1'>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        
                          <div className='flex gap-1'>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        
                            <div className='flex items-center mt-1 gap-1 text-xs'>
                              <div >8</div>
                              <div >9</div>
                              <div >0</div>
                              <div >6</div>
                            </div>
                    </div>
                    <div className='flex justify-between items-center text-xs'><span>Card Holder</span><span>Valid Thru</span></div>
                    <div className='flex justify-between items-center text-xs'><span>{usr?.firstname}</span><span>/</span></div>
                  </div>
                   <div className='flex justify-between text-xs'><span>American express black </span><span className='flex text-xs'> <span>&#163;</span><span>0.00</span></span></div>
                   <button className='text-xs w-full text-center border border-slate-400 py-2 rounded-md'><Link to="/Userdashboard/virtualcards/applycard" >View Details</Link></button>
                   
                </div>
                
               
            </div>
      </div>
        {/* transaction history table*/}
      <div className='mt-5 mb-5 py-10 px-1'>
           <div className='w-full flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'> <LuList /><span className='font-bold text-sm'>Recent Transactions</span></div>
                <div className='flex flex-row items-center gap-2'> <span className='font-bold text-sm'>View All</span> <MdArrowForwardIos /></div>
            </div>

        <div class="overflow-x-auto mt-10">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead class="bg-slate-950 text-slate-100">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Role
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jane Smith</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">jane@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">User</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mike Johnson</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">mike@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Manager</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sarah Williams</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">sarah@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">User</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">David Brown</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">david@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">User</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
              </tr>
            </tbody>
           </table>
        </div>

      </div>
      


            {/* Acc Info modal*/}
         <Modal
            open={openacc}
            onClose={handlecloseAcc}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
             className='w-full mx-auto sm:w-9/12 md:w-1/2'
            >
            <Box className="flex flex-col w-11/12 mx-auto h-96  absolute rounded-lg  bg-zinc-200  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">    
               <div className="flex flex-col items-center w-full rounded-lg  bg-slate-100">
                       <div className="close-btn" >&times;</div>
                    <div className='text-current p-2 bg-slate-950 rounded-full shadow-3xl mb-4 text-zinc-100'>
                     <BsBank />
                    </div>
                    <div className="flex flex-col items-center mb-2">
                       <h4 className='text-sm font-medium'>Bank Account Details</h4>
                       <p className='text-xs'>Wester Zurich Bank</p>
                       <p className='text-xs'>214 North Tryon street, Chorllet, Zurich 280202</p>
                    </div>

                      <div className=' w-full px-6 py-4'>
                      <div className="flex flex-row items-left gap-2 px-5"><FaCircleInfo /><h5 className='text-sm font-bold'>Account Details</h5></div> 
                        <div className='flex justify-between py-2 px-5'>
                            <div className="flex items-center">
                            <GoDotFill /><div className='text-xs'>Account balance</div>
                            </div>
                            {/* <div>{user.balance}</div> */}
                        </div>
                        <div className='flex justify-between py-2 px-5'>
                            <div className="flex items-center">
                              <GoDotFill /><div className='text-xs'>Account Number</div>
                            </div>
                            <div>{}</div>
                        </div>
                        <div className='flex justify-between py-2 px-5'>
                            <div className="flex items-center">
                                <GoDotFill /><div className='text-xs'>Sort Code</div>
                             </div>
                            <div>{}</div>
                        </div>
                        <div className='flex justify-between py-2 px-5'>
                            <div className="flex items-center">
                                <GoDotFill /><div className='text-xs'>Payment Reference</div>
                            </div>
                           <div>Payment</div>
                        </div>
                      </div>
                    
                     <div className="flex flex-row py-4 px-1 gap-2 bg-slate-400 mx-2 my-4 rounded-lg">
                          <div><FaCircleInfo /></div>
                          <p className='text-xs'>Payment reference helps Remedy Western Zurich Bank track payments faster. Please include it in wire transfer description.</p>
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
              <Box className="flex flex-col w-11/12 mx-auto h-96 px-3  absolute rounded-lg  bg-zinc-200  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="close-btn">&times;</div>
               <div className='flex flex-col justify-center items-center'>
                    <div className='text-current p-2 bg-slate-950 rounded-full shadow-3xl mb-4 text-zinc-100'>
                        <IoIosSend />
                    </div>
                   <div className="flex flex-col text-center">
                       <h4 className='text-lx font-medium'>Send Money</h4>
                       <p className='text-xs'>Swift and secure money transfer</p>
                    </div>
                </div>
                
               <div class="flex flex-col gap-9 mt-9">
                    <Link to="/Userdashboard/localtransfer" className="flex  justify-between items-center">
                        <div class="flex items-center gap-3" >
                            <div className='text-current p-2 bg-slate-950 rounded-full shadow-3xl mb-4 text-zinc-100'>
                                <CiUser />
                            </div>
                            <div>
                                <h5 className='text-sm font-bold'> Local transfer</h5>
                                <p className='text-xs'>0% handling charges</p>
                            </div>
                        
                        </div>
                        <MdArrowForwardIos />
                    </Link>
                    <Link to="/Userdashboard/intertransfer" className="flex justify-between items-center"> 
                        <div class="flex items-center gap-3" >
                            <div className='text-current p-2 bg-slate-950 rounded-full shadow-3xl mb-4 text-zinc-100'>
                                <TbWorld />
                            </div>
                            <div>
                                <h5 className='text-sm font-bold'> International transfer</h5>
                                <p className='text-xs'>Global reach,0% fee</p>
                            </div>
                        
                        </div>
                        <MdArrowForwardIos />
                    </Link>
                </div>
                 <button className="close-dialogue" >close</button>
      </Box>
      </Modal>





</div>


  )
}

export default Column1

