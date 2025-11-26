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


const Virtualcards = () => {
  return (
    <>
    <div className="pt-12 pb-24 px-5 bg-gray-200">
          <div className="flex flex-row justify-between"><span className="text-xl font-bold">Virtual Cards</span> <span className="text-xs text-slate-50 rounded-md p-2 bg-red-950"><span className="mr-2">+</span>Apply for card</span></div>

          <div className="flex flex-col gap-6 my-9 md:flex-row">
            <div className="flex gap-2"><span className='flex items-center w-8 p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><CiCreditCard1/></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Active Cards</span><span className="font-bold">2</span></div></div>
            <div  className="flex gap-2"><span className='flex items-center w-8 p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><MdOutlinePendingActions /></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Pending Application</span><span className="font-bold">4</span></div></div>
            <div  className="flex gap-2"><span className='flex items-center w-8 p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-zinc-100'><TbWallet/></span> <div className="flex flex-col"><span className="text-xs text-slate-500">Total Card Balance</span><span className="font-bold">&#163; 7000</span></div></div>
          </div>


          <div className="flex flex-col bg-slate-950 py-3 px-4 text-slate-50 rounded-lg">
            <h2 className="font-bold text-lg">Virtual Cards Made Easy</h2>
            <p className="py-3 text-xs">Create virtual cards for secure online payments, subscription management, and more. Our Virtual cards offer enhanced security and control over your spending.</p>
            <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><FaShieldAlt /></span><span className="text-xs">Secure payments<br />Protect your main account with separate virtual cards</span></div>
            <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><TbWorld /></span><span className="text-xs">Global Acceptance<br />Use anywhere major cards are accepted online</span></div>
            <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><AiOutlineControl /></span><span className="text-xs">Spending Controls<br />Set limits and monitor transactions in real-time</span></div>
            <div className="my-3 flex flex-row items-center gap-3"><span className='text-current p-2 bg-slate-950 border rounded-md shadow-3xl mb-4 text-slate-50'><FaBoltLightning /></span><span className="text-xs">Instant Issuance<br />Create and use cards within minutes</span></div>
            <div className="bg-slate-50 text-slate-700 text-center rounded-md py-1 px-1">Apply Now</div>
          </div>
        

        <div className="flex flex-row justify-between mt-10 mb-5"><span>Your Cards</span> <span> New Card</span></div>

        <div className="border border-zinc-900 py-52"></div>

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
