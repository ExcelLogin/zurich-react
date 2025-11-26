import { CiCircleInfo } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";
import { LuStickyNote } from "react-icons/lu";
import { CiHome } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineGroup } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";


const Loan = () => {
  return (
   <>
   <div className="pt-10 pb-32 px-3 bg-gray-200 lg:px-20 xl:px-24">
     <div className="font-bold py-5"><h2>Loan Services</h2></div>

      <div className="flex gap-2 rounded-lg border-2 border-l-yellow-500 p-2">
        <div className="mt-1"><CiCircleInfo className="text-yellow-500"/></div>
        <div className="flex flex-col text-sm"><span className="font-bold text-xs">Loan Application Restricted</span><span className="text-xs">You currently have an active or pending loan application. You cannot apply for a new loan until your current loan is completed or your application is processed.Please check your <Link to='' className="underline">existing loans</Link>  for more information.</span></div>
      </div>
    
      <div className='bg-slate-950 rounded-2xl'>
            <div className='flex flex-col justify-center items-center mt-5 text-zinc-100' >
                <div className='text-current p-2 border bg-slate-950 rounded-full shadow-3xl mt-8 mb-4 text-slate-50'><FaMoneyBill /></div>
                <h2 className='text-sm font-bold'>Loan Services</h2>
                <p className="text-xs">Financial solutions to help you achieve your goals</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <div className="flex flex-col gap-5 mt-5">

        <div className="flex items-center gap-2 text-xl"><span className="bg-gray-200 p-2 rounded-full"><IoMdCheckmarkCircleOutline /></span><span className="text-sm font-bold">Why Choose Our Loan Services</span></div>
        
          <div className="grid px-5 gap-6 lg:grid-cols-2">
            <div className="flex gap-2"><div><MdAccessTime /></div><div className="flex flex-col"><span className="font-bold text-sm">Quick Approval</span><span className="text-xs">Get a decision within hours and funds within days</span></div></div>

            <div className="flex gap-2"><div><FaPercent /></div><div className="flex flex-col"><span className="font-bold text-sm">Competitive Rates</span><span className="text-xs">Low interest rates tailored to your credit profile</span></div></div>

            <div className="flex gap-2"><div><LuStickyNote /></div><div className="flex flex-col"><span className="font-bold text-sm">Simple Process</span><span className="text-xs">Straightforward application with minimal paperwork</span></div></div>

            <div className="flex gap-2"><div><IoShieldOutline /></div><div className="flex flex-col"><span className="font-bold text-sm">Secure & Confidential</span><span className="text-xs">Your information is protected with bank-level security</span></div></div>
          </div>
        
      </div>


      <div className="flex flex-col gap-5 mt-12">

        <div className="flex items-center gap-1 text-xl"><span className="bg-gray-200 p-2 rounded-full"><RiStackLine /></span><span className="text-sm font-bold">Available Loan Types</span></div>
        
          <div className="grid px-5 gap-6 lg:grid-cols-2">
            <div className="flex gap-2"><div><CiHome /></div><div className="flex flex-col"><span className="font-bold text-sm">Personal Home Loans</span><span className="text-xs">Finance your dream home with competitive rates</span></div></div>

            <div className="flex gap-2"><div><FaCarAlt /></div><div className="flex flex-col"><span className="font-bold text-sm">Automobile Loans</span><span className="text-xs">Get on the road with flexible auto financing</span></div></div>

            <div className="flex gap-2"><div><IoBusinessOutline /></div><div className="flex flex-col"><span className="font-bold text-sm">Business Loans</span><span className="text-xs">Grow your business with tailored financing solutions</span></div></div>

            <div className="flex gap-2"><div><MdOutlineGroup /></div><div className="flex flex-col"><span className="font-bold text-sm">Joint Mortgage</span><span className="text-xs">Share responsibility with a co-browser</span></div></div>

            <div className="flex gap-2"><div><CiCreditCard1 /></div><div className="flex flex-col"><span className="font-bold text-sm">Secured Overdraft</span><span className="text-xs">Acces funds when needed with asset backing</span></div></div>

            <div className="flex gap-2"><div><GiHealthNormal /></div><div className="flex flex-col"><span className="font-bold text-sm">Health Finance</span><span className="text-xs">Cover medical expenses with flexing payment options</span></div></div>

          </div>
           <div className="flex items-center text-xs text-blue-900 lg:pl-56 lg:mt-14 "><span>View all loan option</span><PiGreaterThan className="text-xs" /></div>
          
      </div>

      

       


      <div className="flex flex-col gap-5 mt-12">

        <div className="flex items-center gap-1 text-xl"><span className="bg-gray-200 p-2 rounded-full"><CiCircleInfo /></span><span className="text-sm font-bold">How It Works</span></div>
        
          <div className="flex flex-col px-5 gap-6">
            <div className="flex gap-2"><div>1.</div><div className="flex flex-col"><span className="font-bold text-sm">Apply Online</span><span className="text-xs">Get a decision within hours and funds within days</span></div></div>

            <div className="flex gap-2"><div>2.</div><div className="flex flex-col"><span className="font-bold text-sm">Quick Review</span><span className="text-xs">Get a decision within hours and funds within days</span></div></div>

            <div className="flex gap-2"><div>3.</div><div className="flex flex-col"><span className="font-bold text-sm">Approval & Disbursement</span><span className="text-xs">Get a decision within hours and funds within days</span></div></div>
          </div>
        
      </div>



      {/* frequently asked question */}
       
      <div className="flex flex-col gap-3 mt-12">

        <div className="flex items-center gap-1 text-lg"><span><IoIosHelpCircleOutline /></span><span className="text-sm font-bold">Frequently Asked Questions</span></div>
        
          <div className="flex flex-col px-5 gap-2">
              <h4 className="font-medium">what documents do i need to apply?</h4>
              <p className="text-xs">You'll need identification, proof of income, and address verification. Additional documents may be requested based on loan type.</p>
          </div>

           <div className="flex flex-col px-5 gap-2">
              <h4 className="font-medium">How long does approval take?</h4>
              <p className="text-xs">Standard applications are typically processed within 1-3 business days, depending on verification requirements.</p>
          </div>

          <div className="px-6 items-center flex gap-1 mt-3 text-xs " ><Link>View all FAQs</Link><PiGreaterThan className="text-xs" /></div>
        
      </div>



      {/* ready to get started */}

      <div className="flex flex-col items-center text-center gap-3 p-5 bg-slate-400 rounded-lg mt-14">
       <span className="font-bold text-xl">Ready to get started?</span>
       <span className="text-xs">Apply now and get a decision on your loan application quickly</span>
       <span><input type="text" placeholder="Application Restricted" className="px-4 rounded-lg p-2" disabled/></span>
       <span className="text-xs">You already have an active or pending application</span>
      </div>

   </div>
   </>
  )
}

export default Loan
