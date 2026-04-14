// import { Link } from 'react-router-dom';
// import { useStoreState, useStoreActions } from 'easy-peasy';



// const Lists = () => {

//  const Users = useStoreState((state) => state.Users);

// //  console.log(Users)

//  const getStatusColor = (status) => {
//     switch(status) {
//       case 'Active':
//         return 'bg-green-100 text-green-800';
//       case 'pending':
//         return 'bg-yellow-200 text-yellow-800';
//       case 'Inactive':
//         return 'bg-gray-100 text-gray-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//     return (
//         <>
//     <div className="h-auto bg-gray-100 py-8 px-2 rounded-md">
//       <div className="max-w-6xl mx-1">
//         <h1 className="text-xl font-bold text-slate-900 mb-6"> List of all users</h1>
        
//         <div className="w-full min-h-screen bg-slate-100 rounded-md  shadow overflow-x-scroll">
//           <table className="min-w-full divide-y divide-gray-600 ">
//             <thead className="bg-slate-950 text-slate-100">
//               <tr>
//               <th><input type="checkbox" /></th>
              
//                 <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
//                   Firstname
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
//                   Lastname
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
//                   Balance
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {Users.map((row) => (
//                 <tr key={row.usersdetail._id} className="hover:bg-gray-400 bg-gray-300 text-slate-900  transition-colors ">
//                 <td><input type="checkbox" /></td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <Link to={`/Admin/user/${row.usersdetail._id}`}> {row.usersdetail.email}</Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <Link>{row.usersdetail.firstname}</Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <Link>{row.usersdetail.lastname}</Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <Link>
//                    ${row.balance.toFixed(2)}
//                   </Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row.status)}`}>
//                     <Link>{row.status}</Link>
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
       
          
//         </>
//     )
// }

// export default Lists






import { Link, useNavigate } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import { useState } from 'react';

const Lists = () => {
  const Users = useStoreState((state) => state.Users);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = Users.filter((row) => {
    const q = search.toLowerCase();
    return (
      row.usersdetail.email.toLowerCase().includes(q) ||
      row.usersdetail.firstname.toLowerCase().includes(q) ||
      row.usersdetail.lastname.toLowerCase().includes(q) ||
      row.status.toLowerCase().includes(q)
    );
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-100 text-emerald-700';
      case 'pending':
        return 'bg-amber-100 text-amber-700';
      case 'Inactive':
        return 'bg-slate-100 text-slate-500';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-rose-50 to-slate-200 p-8">

      {/* Page card */}
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">
              Users
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              {filtered.length} of {Users.length} total users
            </p>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search name, email or status…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 px-4 py-2 text-sm rounded-lg border border-[#5B0F12] bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B0F12]/30 focus:border-[#5B0F12] transition"
          />
        </div>

        {/* Table card */}
        <div className="bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">

              {/* Head */}
              <thead className="bg-[#5B0F12]">
                <tr>
                  <th className="w-10 px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      className="accent-white cursor-pointer rounded"
                    />
                  </th>
                  {['Email', 'First name', 'Last name', 'Balance', 'Status'].map((col) => (
                    <th
                      key={col}
                      className="px-5 py-3 text-left text-xs font-medium text-rose-200 uppercase tracking-wider whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-slate-100 bg-white">
                {filtered.map((row) => (
                  <tr
                    key={row.usersdetail._id}
                    onClick={() => navigate(`/Admin/user/${row.usersdetail._id}`)}
                    className="cursor-pointer hover:bg-rose-50 transition-colors duration-150 group"
                  >
                    {/* Checkbox */}
                    <td
                      className="px-4 py-4 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        className="accent-[#5B0F12] cursor-pointer rounded"
                      />
                    </td>

                    {/* Email */}
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-[#5B0F12] group-hover:underline">
                        {row.usersdetail.email}
                      </span>
                    </td>

                    {/* First name */}
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-700">
                      {row.usersdetail.firstname}
                    </td>

                    {/* Last name */}
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-700">
                      {row.usersdetail.lastname}
                    </td>

                    {/* Balance */}
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-700 tabular-nums">
                      ${row.balance.toFixed(2)}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Empty state */}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-16 text-center text-sm text-slate-400">
                      {search
                        ? `No users match "${search}".`
                        : 'No users found.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer count */}
          {filtered.length > 0 && (
            <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 text-xs text-slate-400">
              Showing {filtered.length} {filtered.length === 1 ? 'user' : 'users'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lists;
