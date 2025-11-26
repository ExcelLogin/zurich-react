import { useNavigate,Link } from "react-router-dom"
import { useState,useEffect } from 'react'
import { CiMobile2 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { CiWifiOff } from "react-icons/ci";
import { FaBoltLightning } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosCheckboxOutline } from "react-icons/io";




const Downloads = () => {
  const tabs = [
    {
      label: `Andriod `,
      content: {
        title: "Andriod Installation",
        description:
          "Manage and update your personal",
        explain :"gell"
          
      },
    },
    {
      label: "IOS",
      content: {
        title: "Analytics Dashboard",
        description:
          "Gain valuable i",
      },
    },
    {
      label: "DESKTOP",
      content: {
        title: "Notification Center",
        description:
          "Take full control of your ",
      },
    }
  ];


    const [activeTab, setActiveTab] = useState(0);

  const renderContent = (content) => {
    return (
      <div className="p-10 bg-gray-200 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-slate-900">
          {content.title}
        </h2>
        <p className="text-gray-900">{content.description}</p>
         <p className="text-gray-900">{content.explain }</p>
      </div>
    );
  };


  return (
    <>
    <div className="pt-16 px-3 pb-32 bg-gray-200">

        <div className="flex flex-col items-center text-center">
            <div className="bg-gray-300 p-3 rounded-full">
            <CiMobile2 />
            </div>
            <div><h2 className="text-xl font-semibold">Download Our Banking App</h2></div>
            <div><p className="text-xs">Experience secure and convenient banking on the go with our Progressive Web App. Access all your banking services offline with enhanced security and performance.</p></div>
        </div>

        <div className="flex flex-col items-center text-center mt-9 gap-9 md:flex-row">
            <div className="flex flex-col items-center text-center border border-slate-200 rounded-lg">
                <div className="bg-green-200 p-3 rounded-full">
                   <IoShieldCheckmark  className="text-green-400"/>
                </div>
                <div><h2 className="text-lg font-semibold">Bank-Grade Security</h2></div>
                <div><p className="text-xs">End-to-end encryption and multi-factor authentication keep your money safe</p></div>
            </div>
             <div className="flex flex-col items-center text-center border border-slate-200 rounded-lg">
                <div className="bg-blue-200 p-3 rounded-full">
                    <CiWifiOff />
                </div>
                <div><h2 className="text-lg font-semibold">Works Offline</h2></div>
                <div><p className="text-xs">Access your account balance and transaction history even without internet</p></div>
            </div>
             <div className="flex flex-col items-center text-center border border-slate-200 rounded-lg">
                <div className=" p-3 rounded-full">
                    <FaBoltLightning className="text-purple-500" />
                </div>
                <div><h2 className="text-lg font-semibold">Lightning fast</h2></div>
                <div><p className="text-xs">Instant loading and smooth performance for all your banking needs</p></div>
            </div>
        
        </div>


        <div className="flex flex-col items-center text-center mt-16 gap-4 bg-slate-200 rounded-xl p-3">
            <div><h2 className="font-bold">Get Started in Seconds</h2></div>
            <div><p className="text-xs">Click the button below to instantly install our banking app on your device</p></div>
            <div className="flex items-center bg-slate-950 text-slate-50 gap-2 p-2 rounded-lg"><span><LuDownload /></span><span>Install Banking App</span></div>
            <div className="text-green-700 flex items-center gap-2"><span><IoIosCheckboxOutline /></span><span>Mac detected - Ready to install</span></div>
            <div><Link className="underline text-blue-800">Need help ? View manual installation steps</Link></div>
        </div>

        {/* visit */}


        <div className="flex flex-col items-center mx-2 mt-20 w-full">
                <div className="flex flex-wrap gap-6">
                    {tabs.map((tab, index) => (
                    <button
                        className={`py-3 px-6  text-slate-100 focus:outline-none transition-colors font-medium text-sm duration-300 cursor-pointer ${
                        activeTab === index
                            ? " text-slate-100 bg-slate-950 rounded-md"
                            : "text-slate-900 hover:text-slate-50  "
                        }`}
                        key={index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                        
                    </button>
                    ))}
                </div>
                <div className="mt-1">{renderContent(tabs[activeTab].content)}</div>
                
        </div>
         
      <div className="text-center mt-16 text-lg font-extrabold"><h2>Why Use Our Bankin App?</h2></div>
 
      <div className="flex flex-col items-center gap-2 md:flex-row md:mx-24">
        <div className="mt-10">
            <div className="p-3">
                    <div className="flex gap-2">
                        <div>
                            <IoMdCheckmarkCircleOutline className="mt-1 text-green-600"/>
                        </div>
                        <div className="flex flex-col">
                            <span>Instant Access</span>
                            <span>One-tap access from your home screen, no app store required</span>
                        </div>
                        
                    </div>
            </div>

            <div className="p-3">
                    <div className="flex gap-2">
                        <div>
                            <IoMdCheckmarkCircleOutline className="mt-1 text-green-600"/>
                        </div>
                        <div className="flex flex-col">
                            <span>Instant Access</span>
                            <span>One-tap access from your home screen, no app store required</span>
                        </div>
                        
                    </div>
            </div>

            <div className="p-3">
                    <div className="flex gap-2">
                        <div>
                            <IoMdCheckmarkCircleOutline className="mt-1 text-green-600"/>
                        </div>
                        <div className="flex flex-col">
                            <span>Instant Access</span>
                            <span>One-tap access from your home screen, no app store required</span>
                        </div>
                        
                    </div>
            </div>
            </div>

            <div className="mt-5">
            <div className="p-3">
                    <div className="flex gap-2">
                        <div>
                            <IoMdCheckmarkCircleOutline className="mt-1 text-green-600"/>
                        </div>
                        <div className="flex flex-col">
                            <span>Instant Access</span>
                            <span>One-tap access from your home screen, no app store required</span>
                        </div>
                        
                    </div>
            </div>

            <div className="p-3">
                    <div className="flex gap-2">
                        <div>
                            <IoMdCheckmarkCircleOutline className="mt-1 text-green-600"/>
                        </div>
                        <div className="flex flex-col">
                            <span>Instant Access</span>
                            <span>One-tap access from your home screen, no app store required</span>
                        </div>
                        
                    </div>
            </div>

            <div className="p-3">
                    <div className="flex gap-2">
                        <div>
                            <IoMdCheckmarkCircleOutline className="mt-1 text-green-600"/>
                        </div>
                        <div className="flex flex-col">
                            <span>Instant Access</span>
                            <span>One-tap access from your home screen, no app store required</span>
                        </div>
                        
                    </div>
            </div>
            </div>
        </div>

        <div className="flex flex-col items-center text-center mt-10">
            <div className="font-bold">Need Help Installing?</div>
            <div><p>Our support team is here to help you get started with the banking app</p></div>
            <div className="flex items-center bg-slate-950 rounded-lg text-slate-50 gap-2 p-3 mt-7"><span><IoIosHelpCircleOutline /></span><span>Contact Support</span></div>
        </div>

    </div>
    </>
  )
}

export default Downloads
