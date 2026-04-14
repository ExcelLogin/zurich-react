

// export default userHistory
import React, { useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useParams, Link, useNavigate } from "react-router-dom";


const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const toDateTimeLocal = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const initials = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((w) => w[0].toUpperCase())
    .join("")
    .slice(0, 2);
};
 

const userHistory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getTFById = useStoreState((state) => state.getTFById);
   const saveRecentTransactions= useStoreActions((actions) => actions.saveRecentTransactions);
  // const updateTransferHistory = useStoreActions((actions) => actions.updateTransferHistory);
  // const deleteTransferHistory = useStoreActions((actions) => actions.deleteTransferHistory);

  const t = getTFById(id);


  // console.log(t)

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false); 
    

  const [form, setForm] = useState({
    beneficiaryName: t?.beneficiaryName || "",
    bankName: t?.bankName || "",
    accountNumber: t?.accountNumber || "",
    amountTransferred: t?.amountTransferred || "",
    purposeOfTransfer: t?.purposeOfTransfer || "",
    status: t?.status || "Successful",
    type: t?.type || "Credit",
    dateOfTransfer: toDateTimeLocal(t?.dateOfTransfer),
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (id) => {
    // Convert datetime-local string back to ISO before saving
    const payload = {
      ...form,
      dateOfTransfer: form.dateOfTransfer
        ? new Date(form.dateOfTransfer).toISOString()
        : t?.dateOfTransfer,
    };
      setIsUpdating(true);     
      
        await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = await saveRecentTransactions({ id, ...payload }); 

   setIsUpdating(false);   
     if (result?.success) {
      setShowUpdateModal(false);
      // result.data holds the full API response if you need it
    } else {
      console.error("Update failed:", result?.error, result?.details);
      // show a toast/error here if you want
    }
  };

  const handleDelete = () => {
    deleteTransferHistory(id);
    setShowDeleteModal(false);
    navigate(-1);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-start justify-start p-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full max-w-sm shadow-sm">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium text-sm">
                {initials(t?.beneficiaryName)}
              </div>
              <div>
                <p className='font-medium'>Recipient Details</p>
                <p className="font-medium text-gray-900 capitalize text-xs">{t?.beneficiaryName} </p>
                <p className="text-xs text-gray-500">{t?.bankName}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="bg-green-100 text-green-700 text-xs px-2.5 py-0.5 rounded-md">
                {t?.status}
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2.5 py-0.5 rounded-md">
                {t?.type}
              </span>
            </div>
          </div>

          {/* Amount */}
          <div className="border-t border-gray-100 pt-3 mb-4">
            <p className="text-xs text-gray-500 mb-0.5">Amount transferred</p>
            <p className="text-3xl font-medium text-gray-900">
              ${t?.amountTransferred.toLocaleString()}
            </p>
          </div>

          {/* Details */}
          <div className="border-t border-gray-100 pt-3 space-y-2">
            {[
              { label: "Account number", value: t?.accountNumber },
              { label: "Purpose", value: t?.purposeOfTransfer },
              {
                label: "Reference",
                value: t?.refCode,
                mono: true,
                small: true,
              },
              { label: "Date", value: formatDate(t?.dateOfTransfer) },
              {
                label: "Transaction ID",
                value: t?._id,
                mono: true,
                small: true,
                muted: true,
              },
            ].map(({ label, value, mono, small, muted }) => (
              <div key={label} className="flex justify-between items-start gap-4">
                <span className="text-gray-500 text-xs shrink-0">{label}</span>
                <span
                  className={[
                    "text-right",
                    mono ? "font-mono" : "",
                    small ? "text-xs" : "text-xs",
                    muted ? "text-gray-400" : "text-gray-800 font-medium",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="border-t border-gray-100 pt-4 mt-4 flex gap-3">
            <button
              onClick={() => setShowUpdateModal(true)}
              className="flex-1 bg-slate-950 hover:bg-slate-900 active:scale-95 text-white text-sm font-medium py-1 rounded-xl transition-all duration-150"
            >
              Update history
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex-1 bg-red-50 hover:bg-red-100 active:scale-95 text-red-600 text-sm font-medium py-2.5 rounded-xl border border-red-200 transition-all duration-150"
            >
              Delete history
            </button>
          </div>

        </div>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowUpdateModal(false)}
        >
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-5">

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-base font-medium text-gray-900">Update history</h2>
                <p className="text-xs text-gray-400 mt-0.5">Edit transaction details below</p>
              </div>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {[
                { name: "beneficiaryName", label: "Beneficiary name", type: "text" },
                { name: "bankName", label: "Bank name", type: "text" },
                { name: "amountTransferred", label: "Amount ($)", type: "number" },
                { name: "purposeOfTransfer", label: "Purpose of transfer", type: "text" },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label className="block text-xs text-gray-500 mb-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs text-gray-500 mb-1">Account number</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  name="accountNumber"
                  value={form.accountNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setForm((prev) => ({ ...prev, accountNumber: val }));
                  }}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Date & Time */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Date & time of transfer</label>
                <input
                  type="datetime-local"
                  name="dateOfTransfer"
                  value={form.dateOfTransfer}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                >
                  <option>Successful</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                >
                  <option>Credit</option>
                  <option>Debit</option>
                </select>
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 active:scale-95 transition-all duration-150"
              >
                Cancel
              </button>
            <button
  onClick={() => handleUpdate(t?._id)}          // 👈 arrow fn so it doesn't fire on render
  disabled={isUpdating}
  className="flex-1 bg-slate-950 hover:bg-slate-900 text-white text-sm font-medium py-2.5 rounded-xl active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {isUpdating ? (
    <span className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      Saving...
    </span>
  ) : (
    "Save changes"
  )}
</button>
            </div>

          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowDeleteModal(false)}
        >
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-5">

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="text-center mb-5">
              <h2 className="text-base font-medium text-gray-900 mb-1">Delete transaction history</h2>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete this transaction? This action cannot be undone.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 active:scale-95 transition-all duration-150"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2.5 rounded-xl active:scale-95 transition-all duration-150"
              >
                Yes, delete
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default userHistory