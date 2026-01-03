import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';



const Lists = () => {

 const Users = useStoreState((state) => state.Users);

//  console.log(Users)

 const getStatusColor = (status) => {
    switch(status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-200 text-yellow-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
    return (
        <>
    <div className="h-auto bg-gray-100 py-8 px-2 rounded-md">
      <div className="max-w-6xl mx-1">
        <h1 className="text-xl font-bold text-slate-900 mb-6">Users Data</h1>
        
        <div className="w-full min-h-screen bg-slate-100 rounded-md  shadow overflow-x-scroll">
          <table className="min-w-full divide-y divide-gray-600 ">
            <thead className="bg-slate-950 text-slate-100">
              <tr>
              <th><input type="checkbox" /></th>
              
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Firstname
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Lastname
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Balance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Users.map((row) => (
                <tr key={row.usersdetail._id} className="hover:bg-gray-400 bg-gray-300 text-slate-900  transition-colors ">
                <td><input type="checkbox" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link to={`/Admin/user/${row.usersdetail._id}`}> {row.usersdetail.email}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link>{row.usersdetail.firstname}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link>{row.usersdetail.lastname}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link>
                   ${row.balance.toFixed(2)}
                  </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row.status)}`}>
                    <Link>{row.status}</Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
       
          
        </>
    )
}

export default Lists








   {/* {Users.map((val) => <li key={val?.usersdetail._id} className='w-full flex items-center gap-5 py-1  border-b-2'> 

                  <span>{val?.usersdetail.email}</span>
                  <span>{val?.usersdetail.firstname}</span>
                  <span>{val?.usersdetail.lastname}</span>
                  <span>{val?.balance}</span>
                  <span>{val?.status}</span>
                  
                  </li>
                  )*/}