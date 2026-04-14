import { CiFilter,CiExport,CiSearch  } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";

const LoanHistory = () => {
  return (
    <>
    <div className="pt-10 px-3 pb-32 bg-gray-200 md:px-10 xl:px-36">

    <div className='text-lg font-bold my-5'>Loan History</div>

        <div className="bg-[#5B0F12] text-slate-100 rounded-2xl">
            <div className='flex flex-col px-9'>
                <div className="flex mt-5 gap-2">
                    <div><FaClockRotateLeft className="mt-2 text-xl"/></div> <div className="flex flex-col"><span className="font-bold text-sm">Your Loan Applications</span><span className="text-xs">Track and manage your loan requests</span></div>
                </div>

                <div className='flex flex-row mt-5 gap-5'>
                    <div className="flex items-center gap-2 bg-gray-500 rounded-md px-3 py-1 text-xs"><span><CiFilter /> </span><span>Filter</span></div>
                    <div className="flex items-center gap-2 bg-gray-500 rounded-md px-3 py-1 text-xs"><span><CiExport/></span><span>Export</span></div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>

        <div className="mt-5 border-2 p-2 rounded-md flex items-center">
            <CiSearch /> <input type="search" placeholder="Search by loan purpose or amount..." className="w-full border-none outline-none pl-2" />  
        </div>
       



         <div class="overflow-x-auto mt-10">
          <table class="min-w-full bg-[#5B0F12] border border-gray-200 rounded-lg overflow-hidden">
            <thead class="bg-slate-950">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50 uppercase tracking-wider">
                  TYPE
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                 AMOUNT
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                  PURPOSE
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                 DURATION
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                  STATUS
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                  DATE APPLIED
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><BsBank /></td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    processed
                  </span>
                </td>
              </tr>

            
            </tbody>
           </table>
        </div>


       
    </div>
    </>
  )
}

export default LoanHistory
