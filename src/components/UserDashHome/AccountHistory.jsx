import { CiFilter, CiExport, CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { useStoreState } from "easy-peasy";

const AccountHistory = () => {
  const RecentTransactions = useStoreState((state) => state.RecentTransactions);
  const [search, setSearch] = useState("");

  const transactions = Array.isArray(RecentTransactions)
    ? RecentTransactions
    : RecentTransactions?.data ?? [];

  const filtered = transactions.filter((tx) => {
    const q = search.toLowerCase();
    return (
      tx.refCode?.toLowerCase().includes(q) ||
      tx.beneficiaryName?.toLowerCase().includes(q) ||
      tx.bankName?.toLowerCase().includes(q) ||
      tx.purposeOfTransfer?.toLowerCase().includes(q)
    );
  });

  const formatDate = (iso) => {
    if (!iso) return "—";
    return new Date(iso).toLocaleString("en-US", {
      year: "numeric", month: "short", day: "2-digit",
      hour: "2-digit", minute: "2-digit",
    });
  };

  const formatAmount = (amount) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

  const statusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "completed": return "bg-green-100 text-green-800";
      case "pending":   return "bg-yellow-100 text-yellow-800";
      case "failed":    return "bg-red-100 text-red-800";
      default:          return "bg-gray-100 text-gray-700";
    }
  };

  const typeStyle = (type) =>
    type?.toLowerCase() === "debit"
      ? "text-red-600 font-semibold"
      : "text-green-600 font-semibold";

  return (
    <div className="py-10 px-3 bg-gray-200 min-h-screen">
      <h1 className="text-xl font-bold">Transaction History</h1>

      <div className="flex flex-row gap-3 mt-5">
        <button className="flex flex-row items-center gap-1 bg-slate-950 text-slate-50 text-sm py-1 px-3 rounded-md">
          <CiFilter /> <span>Filter</span>
        </button>
        <button className="flex flex-row items-center gap-1 bg-slate-950 text-slate-50 text-sm py-1 px-3 rounded-md">
          <CiExport /> <span>Export</span>
        </button>
      </div>

      <div className="mt-5 border-2 border-gray-400 p-2 rounded-md flex items-center bg-white">
        <CiSearch />
        <input
          type="search"
          placeholder="Search by ref code, beneficiary, bank..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border-none outline-none pl-2 text-sm"
        />
      </div>

      <div className="overflow-x-auto mt-6 rounded-lg shadow-sm">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-[#5B0F12]">
            <tr>
              {["Ref Code", "Date", "Beneficiary", "Bank", "Account No.", "Purpose", "Amount", "Type", "Status"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-medium text-slate-50 uppercase tracking-wider whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-6 py-8 text-center text-sm text-gray-400">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filtered.map((tx) => (
                <tr key={tx.uniqId} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-xs font-mono text-sate-700">
                    {tx.refCode}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-600">
                    {formatDate(tx.dateOfTransfer)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {tx.beneficiaryName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 capitalize">
                    {tx.bankName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 font-mono">
                    {tx.accountNumber}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 max-w-[160px] truncate" title={tx.purposeOfTransfer}>
                    {tx.purposeOfTransfer}
                  </td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm ${typeStyle(tx.type)}`}>
                    {tx.type?.toLowerCase() === "debit" ? "−" : "+"}{formatAmount(tx.amountTransferred)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${tx.type?.toLowerCase() === "debit" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyle(tx.status)}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-gray-500">{filtered.length} transaction{filtered.length !== 1 ? "s" : ""} shown</p>
    </div>
  );
};

export default AccountHistory;


