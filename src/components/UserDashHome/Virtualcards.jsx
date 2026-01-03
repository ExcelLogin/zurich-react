import { CiCreditCard1 } from "react-icons/ci";
import { TbWallet,TbCancel } from "react-icons/tb";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { AiOutlineControl } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { FaCircleInfo,FaRegClock } from "react-icons/fa6";
import { IoIosArrowRoundBack,IoIosArrowRoundForward } from "react-icons/io";


const Virtualcards = () => {
  return (
    <>
    <div className="pt-12 pb-56 px-5 bg-gray-200">
          <div className="flex flex-row justify-between"><span className="text-xl font-bold">Virtual Cards</span> <span className="text-xs text-slate-50 rounded-md p-2 bg-slate-950"><span className="mr-2">+</span>Apply for card</span></div>

          <div className="flex flex-col gap-6 my-9 md:flex-row">
            <div className="flex gap-2"><span className='flex items-center w-8 p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><CiCreditCard1/></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Active Cards</span><span className="font-bold">2</span></div></div>
            <div  className="flex gap-2"><span className='flex items-center w-8 p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><MdOutlinePendingActions /></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Pending Application</span><span className="font-bold">4</span></div></div>
            <div  className="flex gap-2"><span className='flex items-center w-8 p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><TbWallet/></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Total Card Balance</span><span className="font-bold">&#163; 7000</span></div></div>
          </div>


          <div className="flex flex-col bg-slate-950 py-3 px-4 text-slate-50 rounded-lg">
            <h2 className="font-bold text-lg">Virtual Cards Made Easy</h2>
            <p className="py-3 text-xs">Create virtual cards for secure online payments, subscription management, and more. Our Virtual cards offer enhanced security and control over your spending.</p>

            <div className="flex flex-col justify-between">
                 <div className="my-3 flex flex-row items-center gap-1"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><FaShieldAlt /></span><span className="text-xs">Secure payments<br />Protect your main account with separate virtual cards</span></div>
                 <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><TbWorld /></span><span className="text-xs">Global Acceptance<br />Use anywhere major cards are accepted online</span></div>
                 <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><AiOutlineControl /></span><span className="text-xs">Spending Controls<br />Set limits and monitor transactions in real-time</span></div>
                  <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><FaBoltLightning /></span><span className="text-xs">Instant Issuance<br />Create and use cards within minutes</span></div>
            </div>
           
           <button className='flex items-center justify-center bg-slate-100 text-slate-900  p-2 rounded-md hover:bg-slate-200'><span className='text-sm'>Apply for card</span> <IoIosArrowRoundForward className='text-2xl ml-2' /></button>
          </div>
        

        <div className="flex flex-row justify-between mt-10 mb-5"><span>Your Cards</span> <span> New Card</span></div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* cards */}
         
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
                            <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
                          </div>
                           <div className='text-xs'>Mastercard Platinum </div>
                           <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
                        </div>


                        {/* 2 */}

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
                            <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
                          </div>
                           <div className='text-xs'>Mastercard Platinum </div>
                           <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
                        </div>

                        {/* 3 */}

                          <div className='w-full'>
                            <div className='flex flex-col gap-2 w-full  bg-slate-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
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
                            <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
                          </div>
                           <div className='text-xs'>Mastercard Platinum </div>
                           <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
                        </div>

                        {/* 4 */}
                          <div className='w-full'>
                            <div className='flex flex-col gap-2 w-full  bg-blue-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
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
                            <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
                          </div>
                           <div className='text-xs'>Mastercard Platinum </div>
                           <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
                        </div>

                        {/* 5 */}

                          <div className='w-full'>
                            <div className='flex flex-col gap-2 w-full  bg-slate-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
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
                            <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
                          </div>
                           <div className='text-xs'>Mastercard Platinum </div>
                           <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
                        </div>
                        {/* 5 */}

                          <div className='w-full'>
                            <div className='flex flex-col gap-2 w-full  bg-blue-900 text-slate-100 py-4 px-3 my-2 rounded-md'>
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
                            <div className='flex justify-between items-center text-xs'><span>john</span><span>/</span></div>
                          </div>
                           <div className='text-xs'>Mastercard Platinum </div>
                           <div className='text-xs text-center border border-slate-400 py-2 rounded-md'>View Details</div>
                        </div>

        </div>

        <div className="my-10 text-lg font-bold">How Virtual Cards Work</div>

        <div className="flex flex-col gap-5 mb-9">
              <div className="flex flex-col">
                  <div className='text-current p-2 w-8 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><IoDocumentTextOutline /></div>
                  <div>
                    <h5>1. Apply</h5>
                    <p>Complete the application form for your virtual card. Select your preferred card type and set your spending limits</p>
                  </div>
              </div>

              <div className="flex flex-col">
                  <div className='text-current p-2 w-8 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><IoMdCheckmarkCircleOutline /></div>
                  <div>
                    <h5>2. Activate</h5>
                    <p>Once approved, your virtual card will be ready to use. View the card details and activate it from your dashboard</p>
                  </div>
              </div>

              <div className="flex flex-col">
                  <div className='text-current p-2 w-8 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><MdShoppingCart /></div>
                  <div>
                    <h5>3. Use</h5>
                    <p>Use your virtual card for online transactions anywhere major credit cards are accepted. Monitor transactions in real-time</p>
                  </div>
              </div>
        </div>
          

        <div className="my-10 text-xl font-bold">Frequently Asked Question</div>
    
        <div className="flex flex-col gap-9">
           <div className="">
             <h5 className="font-bold mb-4">What is a virtual card</h5>
             <p className="text-sm">Virtual card is a digital payment card that can be used for online transactions. It works just like a physical card but exist only in digital form, providing enhanced security for online purchases </p>
           </div>

           <div>
             <h5 className="font-bold mb-4">How secure are virtual cards?</h5>
             <p className="text-sm">Virtual cards offer additional security as they are separate from your primary account. You can create cards with specific spending limits and even creat single-use cards for enhanced protection against fraud. </p>
           </div>

           <div>
             <h5 className="font-bold mb-4">Can i have multiple cards?</h5>
             <p className="text-sm">Yes, you can apply for multiple virtual cards for different purposes - such as one for subscriptions, another for shopping, etc. Each card can have its own limits and settings.</p>
           </div>

            <div>
             <h5 className="font-bold mb-4">How long does it take to have a virtual card?</h5>
             <p className="text-sm">Virtual cards are typically issued within minutes after approval. Once approved, you can immediately view and use the card details for online transactions.</p>
           </div>

        </div>
   
    </div>
    </>
  )
}

export default Virtualcards
