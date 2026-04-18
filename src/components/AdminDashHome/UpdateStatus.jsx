import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCircleInfo } from "react-icons/fa6";

const STATUS_OPTIONS = ['Active', 'Inactive', 'Blocked'];

const UpdateStatus = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const editStatus = useStoreState((state) => state.editStatus);
    const setEditStatus = useStoreActions((actions) => actions.setEditStatus);
    const saveUpdateStatus = useStoreActions((actions) => actions.saveUpdateStatus);

    const getUserById = useStoreState((state) => state.getUserById);
    const user = getUserById(id);

    // Pre-populate with user's current status
    useEffect(() => {
        if (user) {
            setEditStatus(user.usersdetail.status);
        }
    }, [user, setEditStatus]);


    const handleUpdate = async (id) => {
        if (!editStatus) {
            alert('Please select a status');
            return;
        }

        setIsSubmitting(true);
        const updateStatus = { id, status: editStatus };

        try {
            const result = await saveUpdateStatus(updateStatus);

            if (result.success) {
                setTimeout(() => {
                    navigate(`/Admin/user/${id}`, {
                        state: { from: location },
                        replace: true
                    });
                    alert(`Status updated successfully! New status: ${result.status}`);
                    setIsSubmitting(false);
                }, 1500);
            } else {
                alert(`Error: ${result.error}`);
                setIsSubmitting(false);
            }

        } catch (err) {
            console.log(err);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-2">
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-1 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto">
                    <div className="bg-white shadow-xl overflow-hidden">

                        {/* Header */}
                        <div className="bg-[#5B0F12] px-6 py-4">
                            <h2 className="text-sm font-bold text-white text-center">
                                Update Account Status
                            </h2>
                            <p className="mt-2 text-blue-100 text-center text-xs">
                                Update {user?.usersdetail.email} account status
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            className="px-2 py-8 space-y-6"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="space-y-2">
                                <label
                                    htmlFor="statusSelect"
                                    className="block text-xs font-semibold text-gray-700"
                                >
                                    Account Status
                                </label>

                                {/* Current status badge */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs text-gray-500">Current:</span>
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full 
                                        ${user?.usersdetail.status === 'Active' ? 'bg-green-100 text-green-700' :
                                          user?.usersdetail.status === 'Blocked' ? 'bg-red-100 text-red-700' :
                                          'bg-yellow-100 text-yellow-700'}`}>
                                        {user?.usersdetail.status}
                                    </span>
                                </div>

                                {/* Status dropdown */}
                                <select
                                    id="statusSelect"
                                    value={editStatus}
                                    onChange={(e) => setEditStatus(e.target.value)}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 outline-none text-sm font-medium bg-white"
                                >
                                    <option value="" disabled>Select a status</option>
                                    {STATUS_OPTIONS.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>

                                <p className="text-xs text-gray-500 mt-1">
                                    Select the new status for this account
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate(user?.usersdetail._id)}
                                    disabled={isSubmitting}
                                    className="flex-1 text-sm bg-[#5B0F12] text-white font-semibold py-1 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
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
                                        'Update Status'
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
                                    Changing status to <strong>Blocked</strong> will restrict the user from accessing their account.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStatus;