import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { RxCardStackPlus } from "react-icons/rx";
import { LuShoppingBag } from "react-icons/lu";



const BuyPlan = () => {
  return (
   <>
   <div className="pt-12 px-4 pb-32">

   
     <div className="flex flex-col items-start gap-4 sm:items-start lg:flex-row lg:items-center">
        <div className="flex gap-2">
            <div className="mt-2">
            <IoMdCheckmarkCircleOutline />
            </div>
           <div className="flex flex-col">
              <span className="font-bold">Save and Invest</span>
              <span className="text-xs">Grow your wealth with our curated save and invest plans</span>
           </div>
        </div>
        <div className="flex justify-center gap-12">
            <div className="flex items-center gap-1"><span><MdOutlineArrowCircleDown className="text-green-500" /></span><span>Deposit</span></div>
            <div className="flex items-center gap-1"><span><MdOutlineArrowCircleUp className="text-red-500" /></span><span>Withdraw</span></div>
            <div className="flex items-center gap-1"><span><MdOutlineArrowCircleDown className="text-green-500"/></span><span>portfolios</span></div>
        </div>
     </div>


     <div className="flex flex-col gap-4 my-10">
       <div className="flex justify-between"><div className="flex flex-col"><span className="text-xs">ACCOUNT BALANCE</span><span className="font-bold text-lg">$8000</span></div> <div className="flex items-center bg-gray-300 p-2 h-8 rounded-lg shadow-lg"><RxCardStackPlus /></div></div>
       <div className="flex justify-between"><div className="flex flex-col"><span className="text-xs">ROI</span><span  className="font-bold text-lg">$8000</span></div> <div className="flex items-center bg-red-200 border border-red-950 p-2 h-8 rounded-lg"><RxCardStackPlus /></div></div>
     </div>
       


     <div>

     <div className="grid gap-9 lg:grid-cols-3">
        
        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

         <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>


        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
           <div className="flex items-center justify-between pr-8 mb-5"><span>Secure Save</span> <span><LuShoppingBag className="text-green-400" /></span></div>
            <div className="flex flex-col gap-1">
                <span>Minimum investment: $200</span>
                <span>Maximum investment: $20000</span>
                <span>Expected Return: 20% for Every 10 minutes</span>
                <span>Duration: 6 Days</span>
            </div>
           
            <div className=" flex flex-col gap-1 mt-5">
                <div>Enter Amount</div>
                <div className="border border-gray-300 rounded-md px-5 py-2"><input type="text" disabled placeholder="$200-$20000"/></div>
                <div className="border border-gray-300 rounded-md px-5 py-2">$Invest and save Now</div>
            </div>
        </div>
     </div>

     </div>




   </div>
   </>
  )
}

export default BuyPlan
