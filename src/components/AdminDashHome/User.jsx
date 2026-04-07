import { useParams, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import TransactionTable from "./TransactionTable"; 




const User = () => {
    const { id } = useParams();
    const getUserById = useStoreState((state) => state.getUserById);
    const user = getUserById(id);
    const getTFsById = useStoreState((state) => state.getTFsById);
    const filtered = getTFsById(id);
    //  console.log(filtered)


      // Status badge styling based on status
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <>
    <div className="text-slate-950 text-2xl pt-10 pb-32">
    
        <div className="flex flex-col items-start justify-start min-h-screen  p-4 ">
                          <div className="text-left text-sm font-medium mb-5">Account registery status</div>
                            <div className="w-full  bg-white rounded-lg shadow-lg overflow-hidden">
                              {/* Header Section */}
                              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h2 className="text-sm font-bold text-white">{user?.usersdetail.firstname}</h2>
                                    <p className="text-blue-100 text-sm mt-1">{user?.usersdetail.email}</p>
                                  </div>
                                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xl">
                                    {user?.usersdetail.firstname.charAt(0)}
                                  </div>
                                </div>
                              </div>

                              {/* Body Section */}
                              <div className="p-6 space-y-4">
                                {/* Status */}
                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                  <span className="text-gray-600 font-medium text-xs">Status</span>
                                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusStyle(user?.status)}`}>
                                    {user?.status}
                                  </span>
                                </div>

                                {/* Balance */}
                                <div className="flex items-center justify-between py-3">
                                  <span className="text-gray-600 font-medium text-sm">Account Balance</span>
                                  <span className="text-xl font-bold text-gray-900">
                                    ${user?.balance.toFixed(2)}
                                  </span>
                                </div>
                              </div>

                              {/* Footer Actions (Optional) */}
                              <div className="px-6 pb-6 grid grid-cols-1 gap-3 xl:flex">
                                <button className="flex-1 bg-slate-900 text-white py-2 rounded-lg font-medium text-xs hover:bg-slate-700 transition-colors">
                                  Update status
                                </button>
                                  <button className="flex-1 bg-slate-900 text-slate-50 text-xs py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors">
                                  <Link to={`/Admin/subtract/${user?.usersdetail._id}`} > Deduct balance</Link>
                                </button>
                                  <button className="flex-1 bg-gray-300 text-gray-700 text-xs py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                                  <Link to={`/Admin/add/${user?.usersdetail._id}`} > Top balance</Link>
                                </button>
                                
                              </div>
                            </div> 

                             {/* user transaction history */}
                        
                              <TransactionTable filtered={filtered} />
              </div>

  </div>
  </>
  )
}

export default User
