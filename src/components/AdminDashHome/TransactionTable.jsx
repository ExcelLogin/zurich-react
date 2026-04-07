import { Link } from 'react-router-dom';

const TransactionTable = ({ filtered }) => {
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'successful': return 'bg-green-100 text-green-800';
      case 'pending':    return 'bg-yellow-100 text-yellow-800';
      case 'failed':     return 'bg-red-100 text-red-800';
      default:           return 'bg-blue-100 text-blue-800';
    }
  };

  const getTypeStyle = (type) => {
    switch (type?.toLowerCase()) {
      case 'credit': return 'bg-green-100 text-green-700';
      case 'debit':  return 'bg-red-100 text-red-700';
      default:       return 'bg-gray-100 text-gray-600';
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return '—';
    const date = new Date(isoString);
    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="w-full mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-sm font-bold text-slate-900">Transaction History</h2>
        <p className="text-xs text-gray-500 mt-1">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th className="px-4 py-3">Beneficiary</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Ref Code</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-400 text-xs">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filtered.map((txn) => (
                <tr
                  key={txn.refCode}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td colSpan={6} className="p-0">
                    <Link
                      to={`/Admin/history/${txn._id}`}
                      className="grid grid-cols-6 w-full px-4 py-3 no-underline"
                    >
                      <span className="font-medium text-gray-900 text-xs">{txn.beneficiaryName}</span>
                      <span className="font-semibold text-gray-900 text-xs">${txn.amountTransferred}</span>
                      <span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${getTypeStyle(txn.type)}`}>
                          {txn.type}
                        </span>
                      </span>
                      <span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(txn.status)}`}>
                          {txn.status}
                        </span>
                      </span>
                      <span className="text-gray-500 text-xs whitespace-nowrap">{formatDate(txn.dateOfTransfer)}</span>
                      <span className="text-gray-400 text-xs font-mono">{txn.refCode}</span>
                    </Link>
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