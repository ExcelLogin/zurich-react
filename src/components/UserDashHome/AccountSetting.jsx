// import { Link } from "react-router-dom";
// import { CiUser } from "react-icons/ci";
// import { FaShieldAlt } from "react-icons/fa";
// import { IoKeyOutline } from "react-icons/io5";
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaHashtag } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { MdDateRange } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";
// import { CiCircleInfo } from "react-icons/ci";
// import { useStoreActions,useStoreState } from 'easy-peasy';


// const AccountSetting = () => {

// const usr = useStoreState((state) => state.usr);

//   return (
//    <>
//      <div className='grid text-2xl pt-10 pb-32 px-3 bg-gray-200 lg:grid-cols-2'>
      

//       <div>
//           <div className="text-xl font-bold">Account Settings</div>
//           <div className=" bg-[#5B0F12] rounded-2xl">
//             <div className='flex flex-col pt-6 items-center mt-7 text-zinc-100' > 
//                 <div className="p-5 rounded-full border"></div>
//                 <div className="flex flex-col items-center mt-2 text-sm">
//                   <span>User</span>
//                   <span>Account Number</span>
//                 </div>
//               </div>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
//           </div>

//           <div className="flex flex-col my-7 gap-4 p-5 border-b border-gray-300">
//             <Link className="flex items-center gap-2 text-sm bg-gray-400 rounded-md p-2"><span><CiUser /></span><span>Profile Information</span></Link>
//             <Link to="/Userdashboard/changepassword" className="flex items-center gap-2 text-sm p-2"><span><FaShieldAlt /></span><span>Security Settings</span></Link>
//             <Link className="flex items-center gap-2 text-sm p-2"><span><IoKeyOutline /></span><span>Transaction Pin</span></Link>
//           </div>

//           <div className="flex flex-col gap-3 p-5 border-b border-gray-300">
//           <div className="flex  items-center gap-2"><span className='flex items-center  p-1 bg-slate-950 border rounded-full shadow-3xl text-zinc-100'><IoIosHelpCircleOutline /></span><span className="font-bold text-sm">Need Help</span></div>
//           <div><p className="text-xs">Contact our support team if you need assistance with your account settings or have any question</p></div>
//           <div className="text-sm"><Link className="flex items-center gap-2"><span>Contact Support</span><span><FaArrowRightLong /></span></Link></div>
//           </div>

//       </div>

   
       
       
//       <div className="flex flex-col gap-5 mt-10 px-5">
//           <div className="flex flex-col gap-1">
//             <div className="flex items-center text-sm gap-2"><span><CiUser /></span><span className="font-bold text-lg">Profile Information</span></div>
//              <div className="text-xs">Your personal information and account details</div>
//           </div>

//           <div className="flex flex-col gap-1">
//             <div className="text-sm font-bold">firstname</div>
//             <div className="flex items-center gap-1 text-xs"><span><CiUser /></span><span>{usr?.firstname}</span></div>
//           </div>

//            <div className="flex flex-col gap-1">
//             <div className="text-sm font-bold">lastname</div>
//             <div className="flex items-center gap-1 text-xs"><span><CiUser /></span><span>{usr?.lastname}</span></div>
//           </div>

//           <div className="flex flex-col gap-1">
//            <div className="text-sm font-bold">Account Number</div>
//            <div className="flex items-center gap-1 text-xs"><span><FaHashtag /></span><span>{usr?.accountNumber}</span></div>
//           </div>

//           <div className="flex flex-col gap-1">
//            <div className="text-sm font-bold">Email address</div>
//            <div className="flex items-center gap-1 text-xs"><span><MdEmail /></span><span>{usr?.email}</span></div>
//           </div>

//           <div className="flex flex-col gap-1">
//            <div className="text-sm font-bold">Date of birth Birth</div>
//            <div className="flex items-center gap-1 text-xs"><span><MdDateRange /></span><span>{usr?.dateofbirth}</span></div>
//           </div>

//           <div className="flex flex-col gap-1">
//            <div className="text-sm font-bold">Phone Number</div>
//            <div className="flex items-center gap-1 text-xs"><span><FaPhoneAlt /></span><span>{usr?.phonenumber}</span></div>
//           </div>

//            <div className="flex flex-col gap-1 border-b border-gray-300 pb-4">
//             <div className="text-sm font-bold">Address</div>
//             <div className="flex items-center gap-1 text-xs"><span><CiLocationOn /></span><span>{usr?.houseaddress}</span></div>
//           </div>

           
//          <div className="flex flex-row gap-2 mt-7">
//              <div><CiCircleInfo /></div>
//              <div className="flex flex-col gap-3">
//               <span className="text-xs">Account Information</span>
//               <span className="text-xs">To update your information, please contact our customer support team with your request</span>
//              </div>
//          </div>

//       </div>




//      </div>
//    </>
//   )
// }

// export default AccountSetting

import { Link } from "react-router-dom";
import { CiUser, CiLocationOn, CiCircleInfo } from "react-icons/ci";
import { FaShieldAlt, FaHashtag, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdEmail, MdDateRange } from "react-icons/md";
import { useStoreState } from "easy-peasy";


const AccountSetting = () => {
  const usr = useStoreState((state) => state.usr);

  const initials = `${usr?.firstname?.[0] ?? ""}${usr?.lastname?.[0] ?? ""}`.toUpperCase();

  return (
    <div className="pt-16 pb-56 px-3 lg:px-20 xl:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">

        {/* ── Sidebar ── */}
        <aside className="flex flex-col gap-4">

          {/* Profile card */}
          <div className="bg-[#5B0F12] rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center pt-8 pb-0 px-5 gap-3">
              <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white font-medium text-xl">
                {initials || <CiUser className="text-2xl" />}
              </div>
              <div className="text-center">
                <p className="text-white font-medium text-sm">
                  {usr?.firstname} {usr?.lastname}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{usr?.accountNumber}</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" className="w-full mt-2">
              <path fill="rgba(0,0,0,0.2)" d="M0,16L40,26.7C80,37,160,59,240,58.7C320,59,400,37,440,26.7L480,16L480,80L0,80Z" />
            </svg>
          </div>

          {/* Navigation */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
            <Link
              to="#"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <span className="w-7 h-7 rounded-lg bg-[#5B0F12] flex items-center justify-center text-white text-xs">
                <CiUser />
              </span>
              Profile information
            </Link>
            <Link
              to="/Userdashboard/changepassword"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-xs">
                <FaShieldAlt />
              </span>
              Security settings
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-xs">
                <IoKeyOutline />
              </span>
              Transaction pin
            </Link>
          </div>

          {/* Help card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
              <IoIosHelpCircleOutline className="text-base" />
              Need help?
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Contact our support team if you need assistance with your account settings or have any questions.
            </p>
            <Link to="#" className="flex items-center gap-1.5 text-xs font-medium text-[#5B0F12] mt-1">
              Contact support <FaArrowRightLong className="text-xs" />
            </Link>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex flex-col gap-5">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Profile information</h1>
              <p className="text-xs text-gray-500 mt-0.5">Your personal details and account information</p>
            </div>
            <button className="flex items-center gap-2 text-xs font-medium bg-[#5B0F12] text-white px-4 py-2 rounded-lg hover:bg-[#7a1519] transition-colors">
              Edit profile
            </button>
          </div>

          {/* Info card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <Field icon={<CiUser />} label="First name" value={usr?.firstname} />
              <Field icon={<CiUser />} label="Last name" value={usr?.lastname} />
              <Field icon={<FaHashtag />} label="Account number" value={usr?.accountNumber} />
              <Field icon={<MdEmail />} label="Email address" value={usr?.email} />
             <Field
  icon={<MdDateRange />}
  label="Date of birth"
  value={
    usr?.dateofbirth
      ? new Date(usr.dateofbirth).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      : "—"
  }
/>
              <Field icon={<FaPhoneAlt />} label="Phone number" value={usr?.phonenumber} />
              <div className="sm:col-span-2">
                <Field icon={<CiLocationOn />} label="Home address" value={usr?.houseaddress} />
              </div>

            </div>

            <hr className="my-6 border-gray-100" />

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/Userdashboard/changepassword"
                className="flex items-center gap-2 text-xs font-medium bg-[#5B0F12] text-white px-4 py-2.5 rounded-lg hover:bg-[#7a1519] transition-colors"
              >
                <FaShieldAlt /> Change password
              </Link>
              <button className="flex items-center gap-2 text-xs font-medium border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <IoKeyOutline className="text-sm" /> Update PIN
              </button>
              <button className="flex items-center gap-2 text-xs font-medium border border-gray-200 text-red-600 px-4 py-2.5 rounded-lg hover:bg-red-50 transition-colors ml-auto">
                Deactivate account
              </button>
            </div>
          </div>

          {/* Notice */}
          <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
            <CiCircleInfo className="text-gray-400 mt-0.5 flex-shrink-0 text-base" />
            <p className="text-xs text-gray-500 leading-relaxed">
              To update your personal information, please contact our customer support team with a valid request.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
};

const Field = ({ icon, label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{label}</span>
    <div className="flex items-center gap-2 text-sm text-gray-800">
      <span className="text-gray-400 text-sm flex-shrink-0">{icon}</span>
      <span>{value ?? "—"}</span>
    </div>
  </div>
);

export default AccountSetting;