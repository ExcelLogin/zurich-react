// TransactionTable.jsx
import { useStoreState } from "easy-peasy";
import { LuList } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

const StatusBadge = ({ status }) => {
  const styles = {
    Pending:   "bg-yellow-100 text-yellow-800",
    Active:    "bg-green-100 text-green-800",
    Inactive:  "bg-red-100 text-red-800",
    Completed: "bg-blue-100 text-blue-800",
  };
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-full ${
        styles[status] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const TransactionTable = () => {
  const RecentTransactions = useStoreState((state) => state.RecentTransactions);



  // Handles both array shape and { data: [] } shape from the store
  const transactions = Array.isArray(RecentTransactions)
    ? RecentTransactions
    : RecentTransactions?.data ?? [];

  return (
    <div className="mt-5 mb-5 py-10 px-1">

      {/* ── Header ── */}
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <LuList />
          <span className="font-bold text-sm">Recent Transactions</span>
        </div>
        {/* <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          <span className="font-bold text-sm">View All</span>
          <MdArrowForwardIos />
        </div> */}
           <Link to="/Userdashboard/accounthistory" >
             <button className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"> 
               <span className="font-bold text-sm">View All</span>
               <MdArrowForwardIos />
             </button>
           </Link>
         
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-[#5B0F12] text-slate-100">
            <tr>
              {[
                "Ref Code",
                "Amount",
                "Purpose",
                "Date",
                "Status",
              ].map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {transactions.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-10 text-center text-sm text-gray-400"
                >
                  No transactions found.
                </td>
              </tr>
            ) : (
              transactions.map((tx, idx) => (
                <tr
                  key={`${tx.refCode}-${idx}`}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-mono text-gray-500">
                    {tx.refCode}
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                    {tx.beneficiaryName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">
                    {tx.bankName}
                  </td> */}
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                    {tx.accountNumber}
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    +${Number(tx.amountTransferred).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-[180px] truncate">
                    {tx.purposeOfTransfer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {formatDate(tx.dateOfTransfer)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={tx.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default TransactionTable;