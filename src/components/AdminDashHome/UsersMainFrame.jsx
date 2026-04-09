import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) : 'N/A';

const maskSSN = (s) => (s ? `***-**-${String(s).slice(-3)}` : 'N/A');

const getInitials = (first, last) =>
  `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase();

const Row = ({ label, value, mono = false }) => (
  <tr className="border-b border-slate-100 dark:border-slate-800 last:border-0">
    <td className="py-1.5 pr-3 text-xs text-slate-400 w-[45%] capitalize">{label}</td>
    <td className={`py-1.5 text-xs capitalize ${mono ? 'font-mono text-teal-700 dark:text-teal-400 normal-case' : 'text-slate-700 dark:text-slate-200'}`}>
      {value ?? 'N/A'}
    </td>
  </tr>
);

const Section = ({ title, dotClass, children }) => (
  <div className="p-4 bg-white dark:bg-slate-900">
    <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-slate-400 mb-3">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClass}`} />
      {title}
    </p>
    <table className="w-full"><tbody>{children}</tbody></table>
  </div>
);

const UserCard = ({ user, index }) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">

    {/* Header */}
    <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex-wrap">
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-sm font-medium flex-shrink-0 ${
        ['bg-blue-100 text-blue-800', 'bg-teal-100 text-teal-800', 'bg-amber-100 text-amber-800', 'bg-rose-100 text-rose-800'][index % 4]
      }`}>
        {getInitials(user.firstname, user.lastname)}
      </div>

      <div className="flex-1 min-w-0">
        <Link
          to={`/Admin/userframe/${user._id}`}
          className="text-sm font-medium text-slate-900 dark:text-white capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
        >
          {user.firstname} {user.middlename} {user.lastname}
        </Link>
        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
          <span className="text-xs text-slate-400 capitalize">{user.accounttype} account</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="font-mono text-[11px] text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-1.5 py-0.5 rounded">
            {user.currency?.toUpperCase()}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="text-xs text-slate-400">{user.email}</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
        <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 capitalize">
          {user.occupation}
        </span>
        <span className="font-mono text-[11px] text-slate-400">
          {user._id.slice(-8).toUpperCase()}
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
      <Section title="Personal" dotClass="bg-blue-400">
        <Row label="Date of birth" value={formatDate(user.dateofbirth)} />
        <Row label="Phone"         value={user.phonenumber} />
        <Row label="SSN"           value={maskSSN(user.ssn)} />
        <Row label="Passport"      value={user.passport} />
      </Section>

      <Section title="Address" dotClass="bg-teal-400">
        <Row label="House"   value={user.houseaddress} />
        <Row label="Street"  value={user.address} />
        <Row label="City"    value={user.city} />
        <Row label="State"   value={user.state} />
        <Row label="Country" value={user.country} />
        <Row label="ZIP"     value={user.zipcode} />
      </Section>

      <Section title="Financial" dotClass="bg-amber-400">
        <Row label="Account type"  value={user.accounttype} />
        <Row label="Currency"      value={user.currency?.toUpperCase()} />
        <Row label="Annual income" value={user.annualincome} />
        <Row label="Account ID"    value={user._id} mono />
      </Section>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between px-5 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
      <span className="font-mono text-[11px] text-slate-400">{user._id}</span>
      <Link
        to={`/Admin/userframe/${user._id}`}
        className="flex items-center gap-1.5 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150 group"
      >
        View profile
        <svg
          className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5"
          viewBox="0 0 12 12" fill="none"
        >
          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>

  </div>
);

const UsersMainFrame = () => {
  const UsersMain = useStoreState((state) => state.UsersMain);

  return (
    <div className="pb-32 px-4 sm:px-6 pt-8   max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-medium text-slate-900 dark:text-white">Account holders</h1>
        <p className="text-sm text-slate-400 mt-1">{UsersMain?.length ?? 0} registered accounts</p>
      </div>

      <div className="flex flex-col gap-4">
        {UsersMain?.map((user, index) => (
          <UserCard key={user._id} user={user} index={index} />
        ))}
      </div>
    </div>
  );
};

export default UsersMainFrame;