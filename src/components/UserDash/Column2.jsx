import { Link } from "react-router-dom"
import { CiCreditCard1,CiUser } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdOutlineDateRange,MdArrowForwardIos,MdOutlineContactSupport  } from "react-icons/md";
import { TbWorld} from "react-icons/tb";
import { IoChatbubbleOutline } from "react-icons/io5";

const Column2 = () => {
  return (
    <div className='flex flex-col h-min mb-24 px-2.5 py-4 w-full mt-10 rounded-xl xl:w-5/12 bg-gray-200'>
      {/* Account stats */}
        <div className="bg-gray-200">
            <div class="px-5 py-2 text-sm font-bold">
                 <h5>Account Statistics</h5>
            </div>
            {/* wrapper */}
            <div class="py-2">
                <div class="flex flex-row gap-2 px-5 py-2">
                    <span className='text-current p-1 bg-gray-300 rounded-full shadow-3xl mb-4 text-zinc-100'> <CiCreditCard1 /></span>
                    <div class="transaction-limit-inner">
                    <p className="text-xs">Transaction Limit</p>
                    <p className="text-sm font-medium">$500,000.00</p>
                    </div>
                </div>
                <div class="flex flex-row gap-2 px-5 py-2"> 
                    <span className='text-current p-1 bg-yellow-950 rounded-full shadow-3xl mb-4 text-zinc-100'><FaRegClock/></span>
                    <div class="transaction-limit-inner">
                    <p className="text-xs"> Pending Transaction</p>
                    <p className="text-sm font-medium">$500,000.00</p>
                    </div>
                </div>
                <div class="flex flex-row gap-2 px-5 py-2"> 
                    <span className='text-current p-1 bg-green-950 rounded-full shadow-3xl mb-4 text-zinc-100'><IoIosStats/></span>
                    <div class="transaction-limit-inner">
                    <p className="text-xs">Transaction Volumn</p>
                    <p className="text-sm font-medium">$500,000.00</p>
                    </div>
                </div>
                <div class="flex flex-row gap-2 px-5 py-2"> 
                    <span className='text-current p-1 bg-purple-300 rounded-full shadow-3xl mb-4 text-zinc-100'><MdOutlineDateRange className="bg-purple-300" /></span>
                    <div class="transaction-limit-inner">
                    <p className="text-xs">Account Age</p>
                    <p className="text-sm font-medium">5 years</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Quik Transfer */}
        <div className='flex flex-col h-min mb-5 px-2.5 py-0 w-full mt-5'>
            <div class=" py-2 text-sm font-bold"> 
              <h5>Quick Transfer</h5>
            </div>
            <div class="transfer-funds">
               <Link to="/Userdashboard/localtransfer"  className="flex justify-between items-center py-5">
                    <div class="flex flex-row gap-3" >
                        <div className='text-current p-1 bg-gray-500 rounded-full shadow-3xl mb-4 text-zinc-100'>
                            <CiUser />
                        </div>
                        <div>
                            <h5 className="font-bold"> Local transfer</h5>
                            <p className="text-xs">0% handling charges</p>
                        </div>
                    </div>
                   <MdArrowForwardIos />                 
                </Link>
                <Link to="/Userdashboard/intertransfer" className="flex justify-between items-center py-5"> 
                    <div class="flex flex-row gap-3" >
                        <div className='text-current p-1 bg-gray-500 rounded-full shadow-3xl mb-4 text-zinc-100'>
                            <TbWorld />
                        </div>
                        <div class="">
                            <h5 className="font-bold"> International transfer</h5>
                            <p className="text-xs">Global reach,0% fee</p>
                        </div>
                    
                    </div>
                   <MdArrowForwardIos />
                </Link>
            </div>
        </div>
        {/* Need Help */}
        <div className='flex bg-[#5B0F12] flex-col justify-center items-center h-min  px-2.5 py-7 w-full mt-10 rounded-xl text-slate-100'>
            <div class="flex flex-col items-center " >
                    <div className='text-current p-2 bg-slate-50 border rounded-full shadow-3xl mb-4 text-slate-950'><MdOutlineContactSupport /></div>
                    <h5 className="text-sm font-bold">Need help?</h5>
                    <p className="text-xs">Our support team is here to help 24/7</p>
                <div class="py-3">
                    <Link to="/" className="flex items-center gap-2 border rounded-md p-1">
                        <IoChatbubbleOutline />
                        <span className="text-xs">Contact support</span>
                    </Link>
                </div>
                     
            </div>    
        </div>

    </div>
  )
}

export default Column2



// w-2/4