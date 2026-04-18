

import { useParams, Link } from "react-router-dom";
import { useStoreState } from 'easy-peasy';
import TransactionTable from "./TransactionTable";
import { useState } from "react";

const User = () => {
  const { id } = useParams();
  const getUserById = useStoreState((state) => state.getUserById);
  const user = getUserById(id);
  const getTFsById = useStoreState((state) => state.getTFsById);
  const filtered = getTFsById(id);
  const [sidebarOpen, setSidebarOpen] = useState(false);


// console.log(user)


const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':   return 'bg-emerald-100 text-emerald-700';
      case 'inactive': return 'bg-amber-100 text-amber-700';
      case 'blocked':  return 'bg-red-100 text-red-700';    
      default:         return 'bg-slate-100 text-slate-500';
    }
  };

  const initials =
    (user?.usersdetail.firstname?.charAt(0) ?? '') +
    (user?.usersdetail.lastname?.charAt(0) ?? '');

  const SidebarContent = () => (
    <>
      {/* Profile block */}
      <div className="p-6 border-b border-zinc-100">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-[#5B0F12] flex items-center justify-center text-white font-bold text-2xl tracking-wider shadow-sm">
            {initials.toUpperCase()}
          </div>
          <div>
            <p className="text-base font-semibold text-slate-800">
              {user?.usersdetail.firstname} {user?.usersdetail.lastname}
            </p>
            <p className="text-xs text-slate-400 mt-0.5 break-all">
              {user?.usersdetail.email}
            </p>
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(user?.usersdetail.status)}`}>
            {user?.usersdetail.status}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 border-b border-zinc-100 space-y-2">
        {[
          { label: 'Balance',      value: `$${user?.balance.toFixed(2)}` },
          { label: 'Transactions', value: filtered?.length ?? 0 },
          { label: 'Account ID',   value: `#${id.slice(-6).toUpperCase()}` },
          { label: 'Member since', value: user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
              : '—'
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
            <span className="text-xs text-slate-400">{label}</span>
            <span className="text-xs font-semibold text-slate-700 tabular-nums">{value}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="p-4 space-y-1 flex-1">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 px-2 mb-3">Actions</p>
        


        <Link to={`/Admin/status/${user?.usersdetail._id}`}>

           <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-zinc-50 hover:text-slate-900 transition-colors text-left">
          <span className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-xs text-slate-500 shrink-0">✎</span>
          Update status
        </button>
        </Link>
      

        <Link 
          to={`/Admin/credit/${user?.usersdetail._id}`}
          onClick={() => setSidebarOpen(false)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-zinc-50 hover:text-slate-900 transition-colors"
        >
          <span className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-xs text-slate-500 shrink-0">⊙</span>
        Credit user account
        </Link>

        <Link
          to={`/Admin/add/${user?.usersdetail._id}`}
          onClick={() => setSidebarOpen(false)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-zinc-50 hover:text-slate-900 transition-colors"
        >
          <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0">+</span>
          Top up balance
        </Link>

        <Link
          to={`/Admin/subtract/${user?.usersdetail._id}`}
          onClick={() => setSidebarOpen(false)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-zinc-50 hover:text-slate-900 transition-colors"
        >
          <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-bold shrink-0">−</span>
          Deduct balance
        </Link>
      </div>

      {/* Danger zone */}
      <div className="p-4 border-t border-zinc-100">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-rose-500 hover:bg-rose-50 transition-colors text-left">
          <span className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center text-xs shrink-0">⊗</span>
          Suspend account
        </button>
      </div>
    </>
  );

  return (
    <div className="pb-10 bg-zinc-300 text-slate-800">

      {/* ── Mobile top bar ── */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-zinc-200 sticky top-0 z-30">
        <Link
          to="/Admin"
          className="text-xs text-slate-500 hover:text-[#5B0F12] transition-colors"
        >
          ← Users
        </Link>
        <p className="text-sm font-semibold text-slate-800 truncate mx-4">
          {user?.usersdetail.firstname} {user?.usersdetail.lastname}
        </p>
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-slate-600 hover:bg-zinc-200 transition-colors"
        >
          ☰
        </button>
      </div>

      {/* ── Mobile sidebar drawer overlay ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Mobile sidebar drawer ── */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 lg:hidden overflow-y-auto ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
          {/* <span className="text-sm font-semibold text-slate-700">User details</span> */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-7 h-7 rounded-lg pt-10 bg-zinc-100 flex items-center justify-center text-slate-500 hover:bg-zinc-200 transition-colors text-xs"
          >
            ✕
          </button>
        </div>
        <SidebarContent />
      </div>

      {/* ── Desktop layout ── */}
      <div className="flex">

        {/* Desktop sidebar */}
        <aside className="hidden lg:flex w-72 shrink-0 border-r border-zinc-200 bg-white flex-col min-h-screen sticky top-0">
          <SidebarContent />
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-5 min-w-0">

          {/* Page header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-slate-800">Account overview</h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 truncate">
                {user?.usersdetail.firstname} {user?.usersdetail.lastname} · {user?.usersdetail.email}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/Admin"
                className="px-3 py-2 bg-white border border-zinc-200 text-slate-600 text-xs font-medium rounded-lg hover:bg-zinc-50 transition-colors hidden sm:inline-flex"
              >
                ← Back to users
              </Link>
              <button className="px-3 py-2 bg-[#5B0F12] hover:bg-[#7a1518] text-white text-xs font-medium rounded-lg transition-colors">
                Update status
              </button>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: 'Account balance',    value: `$${user?.balance.toFixed(2)}`,  sub: 'Available funds'   },
              { label: 'Transactions',       value: filtered?.length ?? 0,            sub: 'All time'          },
              { label: 'Member since',       value: user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                  : '—',                                                               sub: 'Registration date' },
              { label: 'Account ID',         value: `#${id.slice(-6).toUpperCase()}`, sub: 'Unique identifier' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="bg-white border border-zinc-200 rounded-2xl px-4 sm:px-5 py-4 shadow-sm min-w-0">
                <p className="text-xs text-slate-400 mb-1 truncate">{label}</p>
                <p className="text-lg sm:text-xl font-semibold text-slate-800 tabular-nums truncate">{value}</p>
                <p className="text-xs text-slate-300 mt-1 truncate">{sub}</p>
              </div>
            ))}
          </div>

          {/* Profile details */}
          <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-4 sm:px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-700">Profile details</h2>
              <Link
                to="/Admin/usersmainframe"
                className="text-xs text-[#5B0F12] hover:underline font-medium"
              >
                Edit →
              </Link>
            </div>
            <div className="divide-y divide-zinc-50">
              {[
                { label: 'First name',    value: user?.usersdetail.firstname },
                { label: 'Last name',     value: user?.usersdetail.lastname },
                { label: 'Email address', value: user?.usersdetail.email },
                { label: 'Account number', value: user?.accountNumber },
                { label: 'Status', value: (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(user?.usersdetail.status)}`}>
                  {user?.usersdetail.status}
                  </span>
                )},
                { label: 'Balance', value: (
                  <span className="font-semibold text-emerald-600 tabular-nums">
                    ${user?.balance.toFixed(2)}
                  </span>
                )},
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between px-4 sm:px-6 py-3.5 hover:bg-zinc-50 transition-colors gap-4">
                  <span className="text-sm text-slate-400 shrink-0">{label}</span>
                  <span className="text-sm text-slate-700 text-right truncate">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction history */}
          <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-4 sm:px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-700">Transaction history</h2>
              <span className="text-xs text-slate-400 bg-zinc-100 px-2.5 py-1 rounded-full tabular-nums shrink-0">
                {filtered?.length ?? 0} records
              </span>
            </div>
            <div className="overflow-x-auto">
              <TransactionTable filtered={filtered} />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default User;