import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { useStoreActions,useStoreState } from 'easy-peasy';


const AccountSetting = () => {

const usr = useStoreState((state) => state.usr);

  return (
   <>
     <div className='grid text-2xl pt-10 pb-32 px-3 bg-gray-200 lg:grid-cols-2'>
      

      <div>
          <div className="text-xl font-bold">Account Settings</div>
          <div className=" bg-slate-950 rounded-2xl">
            <div className='flex flex-col pt-6 items-center mt-7 text-zinc-100' > 
                <div className="p-5 rounded-full border"></div>
                <div className="flex flex-col items-center mt-2 text-sm">
                  <span>User</span>
                  <span>Account Number</span>
                </div>
              </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>

          <div className="flex flex-col my-7 gap-4 p-5 border-b border-gray-300">
            <Link className="flex items-center gap-2 text-sm bg-gray-400 rounded-md p-2"><span><CiUser /></span><span>Profile Information</span></Link>
            <Link className="flex items-center gap-2 text-sm p-2"><span><FaShieldAlt /></span><span>Security Settings</span></Link>
            <Link className="flex items-center gap-2 text-sm p-2"><span><IoKeyOutline /></span><span>Transaction Pin</span></Link>
          </div>

          <div className="flex flex-col gap-3 p-5 border-b border-gray-300">
          <div className="flex  items-center gap-2"><span className='flex items-center  p-1 bg-slate-950 border rounded-full shadow-3xl text-zinc-100'><IoIosHelpCircleOutline /></span><span className="font-bold text-sm">Need Help</span></div>
          <div><p className="text-xs">Contact our support team if you need assistance with your account settings or have any question</p></div>
          <div className="text-sm"><Link className="flex items-center gap-2"><span>Contact Support</span><span><FaArrowRightLong /></span></Link></div>
          </div>

      </div>

   
       
       
      <div className="flex flex-col gap-5 mt-10 px-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-sm gap-2"><span><CiUser /></span><span className="font-bold text-lg">Profile Information</span></div>
             <div className="text-xs">Your personal information and account details</div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-sm font-bold">firstname</div>
            <div className="flex items-center gap-1 text-xs"><span><CiUser /></span><span>{usr?.firstname}</span></div>
          </div>

           <div className="flex flex-col gap-1">
            <div className="text-sm font-bold">lastname</div>
            <div className="flex items-center gap-1 text-xs"><span><CiUser /></span><span>{usr?.lastname}</span></div>
          </div>

          <div className="flex flex-col gap-1">
           <div className="text-sm font-bold">Account Number</div>
           <div className="flex items-center gap-1 text-xs"><span><FaHashtag /></span><span>{usr?.accountNumber}</span></div>
          </div>

          <div className="flex flex-col gap-1">
           <div className="text-sm font-bold">Email address</div>
           <div className="flex items-center gap-1 text-xs"><span><MdEmail /></span><span>{usr?.email}</span></div>
          </div>

          <div className="flex flex-col gap-1">
           <div className="text-sm font-bold">Date of birth Birth</div>
           <div className="flex items-center gap-1 text-xs"><span><MdDateRange /></span><span>{usr?.dateofbirth}</span></div>
          </div>

          <div className="flex flex-col gap-1">
           <div className="text-sm font-bold">Phone Number</div>
           <div className="flex items-center gap-1 text-xs"><span><FaPhoneAlt /></span><span>{usr?.phonenumber}</span></div>
          </div>

           <div className="flex flex-col gap-1 border-b border-gray-300 pb-4">
            <div className="text-sm font-bold">Address</div>
            <div className="flex items-center gap-1 text-xs"><span><CiLocationOn /></span><span>{usr?.houseaddress}</span></div>
          </div>

           
         <div className="flex flex-row gap-2 mt-7">
             <div><CiCircleInfo /></div>
             <div className="flex flex-col gap-3">
              <span className="text-xs">Account Information</span>
              <span className="text-xs">To update your information, please contact our customer support team with your request</span>
             </div>
         </div>

      </div>




     </div>
   </>
  )
}

export default AccountSetting

