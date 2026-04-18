import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) : 'N/A';

const maskSSN = (s) => (s ? `***-**-${String(s).slice(-3)}` : 'N/A');

const getInitials = (first, last) =>
  `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase();

const Row = ({ label, value, mono = false }) => (
  <tr className="border-b border-[#5B0F12]/10 last:border-0">
    <td className="py-1.5 pr-3 text-xs text-[#5B0F12]/50 w-[45%] capitalize">{label}</td>
    <td className={`py-1.5 text-xs capitalize ${mono ? 'font-mono text-[#5B0F12] normal-case font-semibold' : 'text-slate-700'}`}>
      {value ?? 'N/A'}
    </td>
  </tr>
);

const Section = ({ title, dotClass, children }) => (
  <div className="p-4 bg-white">
    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#5B0F12]/60 mb-3">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClass}`} />
      {title}
    </p>
    <table className="w-full"><tbody>{children}</tbody></table>
  </div>
);

const avatarStyles = [
  'bg-[#5B0F12] text-white',
  'bg-[#7A1519] text-white',
  'bg-[#3D0A0C] text-white',
  'bg-[#9B2226] text-white',
];

const UserCard = ({ user, index }) => (
  <div className="bg-white border border-[#5B0F12]/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#5B0F12]/30 transition-all duration-200">

    {/* Header */}
    <div className="flex items-center gap-3 px-5 py-4 border-b border-[#5B0F12]/10 flex-wrap bg-gradient-to-r from-[#5B0F12]/5 to-transparent">
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${avatarStyles[index % 4]}`}>
        {getInitials(user.firstname, user.lastname)}
      </div>

      <div className="flex-1 min-w-0">
        <Link
          to={`/Admin/userframe/${user._id}`}
          className="text-sm font-semibold text-slate-900 capitalize hover:text-[#5B0F12] transition-colors truncate block"
        >
          {user.firstname} {user.middlename} {user.lastname}
        </Link>
        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
          <span className="text-xs text-slate-400 capitalize">{user.accounttype} account</span>
          <span className="w-1 h-1 rounded-full bg-[#5B0F12]/20" />
          <span className="font-mono text-[11px] text-[#5B0F12] bg-[#5B0F12]/8 px-1.5 py-0.5 rounded border border-[#5B0F12]/15">
            {user.currency?.toUpperCase()}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#5B0F12]/20" />
          <span className="text-xs text-slate-400">{user.email}</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
        {/* <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#5B0F12]/8 text-[#5B0F12] border border-[#5B0F12]/20 capitalize">
          {user.occupation}
        </span> */}
        <span className="font-mono text-[11px] text-slate-400">
          {user._id.slice(-8).toUpperCase()}
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#5B0F12]/10">
      <Section title="Personal" dotClass="bg-[#5B0F12]">
        <Row label="Date of birth" value={formatDate(user.dateofbirth)} />
        <Row label="Phone"         value={user.phonenumber} />
        <Row label="SSN"           value={maskSSN(user.ssn)} />
        <Row label="OTTC pin"      value={user.pin} />
      </Section>

      <Section title="Address" dotClass="bg-[#7A1519]">
        <Row label="House"   value={user.houseaddress} />
        <Row label="Street"  value={user.address} />
        <Row label="City"    value={user.city} />
        <Row label="State"   value={user.state} />
        <Row label="Country" value={user.country} />
        <Row label="ZIP"     value={user.zipcode} />
      </Section>

      <Section title="Financial" dotClass="bg-[#9B2226]">
        <Row label="Account type"  value={user.accounttype} />
        <Row label="Currency"      value={user.currency?.toUpperCase()} />
        <Row label="Annual income" value={user.annualincome} />
        <Row label="Account ID"    value={user._id} mono />
      </Section>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between px-5 py-2.5 bg-[#5B0F12]/5 border-t border-[#5B0F12]/10">
      <span className="font-mono text-[11px] text-[#5B0F12]/40">{user._id}</span>
      <Link
        to={`/Admin/userframe/${user._id}`}
        className="flex items-center gap-1.5 text-[11px] font-semibold text-[#5B0F12] hover:text-[#7A1519] transition-colors duration-150 group"
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
    <div className="pb-32 px-4 sm:px-6 pt-8 max-w-5xl mx-auto">
      <div className="mb-6 border-l-4 border-[#5B0F12] pl-4">
        <h1 className="text-xl font-bold text-slate-900">Account holders</h1>
        <p className="text-sm text-[#5B0F12]/60 mt-1">{UsersMain?.length ?? 0} registered accounts</p>
      </div>
      

        <Link
        to="/Admin/"
        className="px-3 py-2 mb-10 bg-[#5B0F12] border border-zinc-200 text-slate-100 text-xs font-medium rounded-lg hover:bg-zinc-50 transition-colors inline-flex mt-4"
        >
        <div className='text-white'>go back</div>
        </Link>

      <div className="flex flex-col gap-4">
        {UsersMain?.map((user, index) => (
          <UserCard key={user._id} user={user} index={index} />
        ))}
      </div>

    </div>
  );
};
export default UsersMainFrame;