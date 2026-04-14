

import { useParams, Link} from "react-router-dom";
import { useState,useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate,useLocation } from 'react-router-dom';
import { FaCircleInfo,FaGreaterThan } from "react-icons/fa6";

const DeductBalance = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deductBalance = useStoreState((state) => state.deductBalance);


    const saveDeductBalance = useStoreActions((actions) => actions.saveDeductBalance);
    const setDeductBalance = useStoreActions((actions) => actions.setDeductBalance);
  

    const getUserById = useStoreState((state) => state.getUserById);
    const user = getUserById(id);

    // console.log(user.balance);

    useEffect(() => {
        if (user) {
            setDeductBalance(user.balance);
        }
    }, [user, setDeductBalance])


    const handleEdit =async (id) => {
        setIsSubmitting(true);
        const updatedBalance = {id, balance: deductBalance };
        //  saveBalance(updatedBalance).then(alert('Balance updated successfully')).catch(err => console.log(err));
        // navigate(`/Admin/user/${id}`, { state: { from: location }, replace: true });
        try{
       const result =   await saveDeductBalance(updatedBalance);


          if (result.success) {
            // alert(`Balance updated successfully! New balance: $${result.balance}`);
            
            // Add delay before navigation
            setTimeout(() => {
                navigate(`/Admin/user/${id}`, { 
                    state: { from: location }, 
                    replace: true 
                });
                 alert(`Balance updated successfully! New balance: $${result.balance}`);
                 setIsSubmitting(false);
            }, 1500);
        } else {
            alert(`Error: ${result.error}`);
            setIsSubmitting(false);
        }
          
      
     
    //   setTimeout(() => {
    //     navigate(`/Admin/user/${id}`, { state: { from: location }, replace: true });
    //   }, 1500);
    } catch (err) {
    //   console.log(err);
    //   setIsSubmitting(false);
         console.log(err);
        alert('An unexpected error occurred');
        setIsSubmitting(false);
    }

    }

    return (
    <div className="p-2">
            {<>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-1 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#5B0F12] px-6 py-4">
            <h2 className="text-sm font-bold text-white text-center">
              Deduct Balance
            </h2>
            <p className="mt-2 text-blue-100 text-center text-xs">
              Deduct {user?.usersdetail.email}  account balance
            </p>
          </div>

          {/* Form */}
          <form 
            className="px-2 py-8 space-y-6" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label 
                htmlFor="postTitle" 
                className="block text-xs font-semibold text-gray-700"
              >
                Balance Amount
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 text-sm">
                  $
                </span>
                <input
                  id="postTitle"
                  type="text"
                  required
                  value={deductBalance}
                  onChange={(e) => setDeductBalance(e.target.value)}
                  className="w-full pl-8 pr-4 py-1 border-2 border-gray-200 rounded-lg focus:ring-2 focus:slate-500 focus:border-transparent transition-all duration-200 outline-none text-sm font-medium"
                  placeholder="0.00"
                  disabled={isSubmitting}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Enter the new balance amount for this user
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={() => handleEdit(user?.usersdetail._id)}
                disabled={isSubmitting}
                className="flex-1 text-sm bg-[#5B0F12] text-white font-semibold py-1 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
              
              <button
                type="button"
                onClick={() => navigate(`/Admin/user/${id}`)}
                disabled={isSubmitting}
                className="flex-1 bg-gray-100 text-sm text-gray-700 font-semibold py-1 px-6 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
           <FaCircleInfo className='text-sm' />
            <div className="ml-3">
              <h3 className="text-xs font-medium text-slate-900">
                Important Information
              </h3>
              <p className="mt-1 text-xs text-slate-900">
                Changes to the balance will be saved immediately. Please verify the amount before submitting.
              </p>
            </div>
          </div>
        </div>
       </div>
     </div>
                 
      </>}
    </div>
    )
}

export default DeductBalance
