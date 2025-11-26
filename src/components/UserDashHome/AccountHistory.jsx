
import { CiFilter,CiExport,CiSearch  } from "react-icons/ci";
import { FaRegUserCircle  } from "react-icons/fa";
import { useState,useEffect } from 'react'



const AccountHistory = () => {
  return (
 <>
 <div className="py-10 px-3 bg-gray-200">

     <h1 className='text-xl font-bold'>Transactions</h1>
                 <div className="flex flex-row gap-5 mt-5">
                     <div className="flex flex-row items-center gap-1 bg-slate-950 text-slate-50 text-sm py-1 px-3 rounded-md "><CiFilter /> <span>Filter</span></div>
                     <div className="flex flex-row items-center gap-1 bg-slate-950 text-slate-50 text-sm py-1 px-3 rounded-md"><CiExport /><span>Export</span></div>
                 </div>
                 <div className="mt-5 border-2 border-gray-400 p-2 rounded-md flex items-center">
                  <CiSearch /> <input type="search" className="w-full bg-gray-200 border-none outline-none pl-2" />  
                 </div>
 
          <div class="overflow-x-auto mt-10">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead class="bg-slate-950">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50 uppercase tracking-wider">
                  ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                  Role
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-50  uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jane Smith</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">jane@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">User</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mike Johnson</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">mike@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Manager</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sarah Williams</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">sarah@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">User</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">David Brown</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">david@example.com</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">User</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
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

export default AccountHistory
