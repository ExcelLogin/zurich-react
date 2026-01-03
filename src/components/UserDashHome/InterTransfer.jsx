import { useState,useEffect } from 'react'
import { FaBitcoin,FaPaypal } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";
import { PiFlagBannerBold } from "react-icons/pi";
import { SiCashapp,SiVenmo,SiZelle,SiRevolut,SiAlipay, SiWechat   } from "react-icons/si";
import { IoIosMore,IoMdArrowRoundBack } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRegUserCircle  } from "react-icons/fa";





const InterTransfer = () => {
 const [isVisible, setIsVisible] = useState(false);



  return (
    <>
      <div className='pt-10 pb-56 lg:px-20'>
                <h2 className='text-xl font-bold pl-2'>International Transfer </h2>
                <div className='p-5'>
                    <h3 className='font-bold text-sm'>Select Transfer Method</h3>
                    <div className='grid grid-col sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 lg:gap-1'>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2 mt-7 rounded-md border-2 border-gray-200'>
                          <div className='flex flex-row gap-3 items-center'><div className='p-3 bg-blue-100 rounded-full'><GiWireframeGlobe/></div><span className='font-bold' >Wire Transfer</span></div>
                          <div><p className='text-xs'>Transfer fund directly to international accounts</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                          <div className='flex flex-row gap-4  items-center '><div className='p-3 bg-yellow-500 rounded-full'><FaBitcoin/></div><span className='font-bold'>Cryptocurrency</span></div>
                          <div><p className='text-xs'>Send funds to your cryptocurrency wallet</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                            <div className='flex flex-row gap-4  items-center '><div className='p-3 bg-blue-300 rounded-full'><FaPaypal /></div><span className='font-bold'>Paypal</span></div>
                            <div><p className='text-xs'>Transfer funds to your PayPal account</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                           <div className='flex flex-row gap-4  items-center'><div className='p-3 bg-blue-300 rounded-full'><PiFlagBannerBold /></div><span className='font-bold'>Wise Transfer</span></div>
                           <div><p className='text-xs'>Transfer with low fees using Wise</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                          <div className='flex flex-row gap-4  items-center'><div className='p-3 bg-blue-300 rounded-full'><SiCashapp /></div><span className='font-bold'>Cash App</span></div>
                          <div><p className='text-xs'>Quick transfer to your cash app account</p></div>
                        </div>
                        <button onClick={() => setIsVisible(!isVisible)}  className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                           <div className='flex flex-row gap-4  items-center'><div className='p-3 bg-blue-300 rounded-full'><IoIosMore /></div><div className='flex flex-col items-start font-bold'><div>More Options</div><div><p className='text-xs'>Zelle, Venmo, Revolut, and more</p></div></div></div>
                        </button>
                    </div>
                </div>

                    {/* more optionx */}

                  {isVisible && ( <div className=' p-5'>
                    <button onClick={() => setIsVisible(!isVisible)}  className='flex flex-row items-center gap-3  mb-2'><IoMdArrowRoundBack /><span className='font-bold'><h3>Additional Transfer Method</h3></span></button>
                    <div className='mb-5 text-xs pl-7'>zelle, Venmo, Revolut, and more</div>
                    <div className='grid grid-col sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 lg:gap-1'>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                          <div className='flex flex-row gap-4  items-center'><div className='p-3 bg-blue-300 rounded-full'><SiVenmo /></div><span className='font-bold'>Venmo</span></div>
                           <div><p className='text-xs'>Transfer fund directly to international accounts</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                           <div className='flex flex-row gap-4  items-center'><div className='p-3 bg-blue-300 rounded-full'><SiZelle /></div><span className='font-bold'>Zelle</span></div>
                           <div><p className='text-xs'>Send funds to your cryptocurrency wallet</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                            <div className='flex flex-row gap-4  items-center'><div ><SiRevolut /></div><span className='font-bold'>Revolut</span></div>
                        <div><p className='text-xs'>Transfer funds to your PayPal account</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                           <div className='flex flex-row gap-4  items-center'><div className='p-3 bg-blue-300 rounded-full'><SiAlipay /></div><span className='font-bold'>Alipay</span></div>
                           <div><p className='text-xs'>Transfer with low fees using Wise</p></div>
                        </div>
                        <div className='flex flex-col justify-center mb-10 gap-1 py-3 px-2  rounded-md border-2 border-gray-200'>
                          <div className='flex flex-row gap-4  items-center'><div className='p-3 bg-blue-300 rounded-full'><SiWechat /></div><span className='font-bold'>WeChat Pay</span></div>
                          <div><p className='text-xs' >Quick transfer to your cash app account</p></div>
                        </div>
                        
                    </div>
                </div>)}
                 
                

                <div className='flex flex-row items-center mb-2 gap-3 pl-5'>
                    <RiSecurePaymentFill /> <p className='text-sm font-medium'>Secure Deposit</p>
                </div>
                <p className='px-10 text-xs'>All deposits are processed through secure payment channels. Your financial information is never stored on our server.</p>
        </div>
      
    </>
  )
}

export default InterTransfer
