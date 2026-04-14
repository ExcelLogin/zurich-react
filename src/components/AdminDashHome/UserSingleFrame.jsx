import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) : 'N/A';

const formatDateForInput = (d) =>
  d ? new Date(d).toISOString().split('T')[0] : '';

const maskSSN = (s) => (s ? `***-**-${String(s).slice(-3)}` : 'N/A');

const getInitials = (first, last) =>
  `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase();

const avatarColors = [
  'bg-[#5B0F12] text-white',
  'bg-[#7A1519] text-white',
  'bg-[#3D0A0C] text-white',
  'bg-[#9B2226] text-white',
];

// ── Reusable primitives ────────────────────────────────────────────────────

const Field = ({ label, value, mono = false, full = false }) => (
  <div className={`flex flex-col gap-0.5 ${full ? 'col-span-2' : ''}`}>
    <span className="text-[11px] uppercase tracking-widest font-medium text-[#5B0F12]/50">{label}</span>
    <span className={`text-sm text-slate-800 capitalize ${mono ? 'font-mono text-[#5B0F12] normal-case text-xs font-semibold' : ''}`}>
      {value ?? 'N/A'}
    </span>
  </div>
);

const SectionCard = ({ title, dotClass, children }) => (
  <div className="bg-white border border-[#5B0F12]/15 rounded-xl p-5 shadow-sm">
    <div className="flex items-center gap-2 mb-4">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotClass}`} />
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#5B0F12]/60">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
      {children}
    </div>
  </div>
);

const StatusPill = ({ label, color }) => (
  <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border capitalize ${color}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
    {label}
  </span>
);

// ── Edit Modal ─────────────────────────────────────────────────────────────

const inputClass =
  'w-full rounded-lg border border-[#5B0F12]/20 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B0F12]/40 focus:border-transparent transition capitalize placeholder:normal-case';

const labelClass = 'block text-[11px] uppercase tracking-widest font-medium text-[#5B0F12]/50 mb-1';

const FormField = ({ label, name, value, onChange, type = 'text', full = false }) => (
  <div className={full ? 'col-span-2' : ''}>
    <label className={labelClass}>{label}</label>
    <input
      type={type}
      name={name}
      value={value ?? ''}
      onChange={onChange}
      className={inputClass}
    />
  </div>
);

const ModalSection = ({ title, dotClass, children }) => (
  <div>
    <div className="flex items-center gap-2 mb-3">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotClass}`} />
      <h4 className="text-xs font-semibold uppercase tracking-widest text-[#5B0F12]/60">{title}</h4>
    </div>
    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
      {children}
    </div>
  </div>
);

const EditModal = ({ user, onClose, onSave }) => {
  const [form, setForm] = useState({ ...user, dateofbirth: formatDateForInput(user.dateofbirth) });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setSaving(true);
    await onSave(form);
    setSaving(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl border border-[#5B0F12]/20 w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]">

        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#5B0F12]/10 flex-shrink-0 bg-gradient-to-r from-[#5B0F12]/5 to-transparent">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Edit account holder</h2>
            <p className="text-xs text-[#5B0F12]/50 mt-0.5 capitalize">{user.firstname} {user.lastname}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#5B0F12]/40 hover:text-[#5B0F12] hover:bg-[#5B0F12]/8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 py-5 flex flex-col gap-6 flex-1">

          <ModalSection title="Personal information" dotClass="bg-[#5B0F12]">
            <FormField label="First name"    name="firstname"   value={form.firstname}   onChange={handleChange} />
            <FormField label="Last name"     name="lastname"    value={form.lastname}    onChange={handleChange} />
            <FormField label="Middle name"   name="middlename"  value={form.middlename}  onChange={handleChange} />
            <FormField label="Date of birth" name="dateofbirth" value={form.dateofbirth} onChange={handleChange} type="date" />
            <FormField label="Email"         name="email"       value={form.email}       onChange={handleChange} type="email" />
            <FormField label="Phone"         name="phonenumber" value={form.phonenumber} onChange={handleChange} />
            <FormField label="Occupation"    name="occupation"  value={form.occupation}  onChange={handleChange} />
            <FormField label="SSN"           name="ssn"         value={form.ssn}         onChange={handleChange} />
            <FormField label="Passport no."  name="passport"    value={form.passport}    onChange={handleChange} full />
          </ModalSection>

          <div className="border-t border-[#5B0F12]/10" />

          <ModalSection title="Address" dotClass="bg-[#7A1519]">
            <FormField label="House no." name="houseaddress" value={form.houseaddress} onChange={handleChange} />
            <FormField label="Street"    name="address"      value={form.address}      onChange={handleChange} />
            <FormField label="City"      name="city"         value={form.city}         onChange={handleChange} />
            <FormField label="State"     name="state"        value={form.state}        onChange={handleChange} />
            <FormField label="Country"   name="country"      value={form.country}      onChange={handleChange} />
            <FormField label="ZIP code"  name="zipcode"      value={form.zipcode}      onChange={handleChange} />
          </ModalSection>

          <div className="border-t border-[#5B0F12]/10" />

          <ModalSection title="Financial details" dotClass="bg-[#9B2226]">
            <FormField label="Account type"  name="accounttype"  value={form.accounttype}  onChange={handleChange} />
            <FormField label="Currency"      name="currency"     value={form.currency}     onChange={handleChange} />
            <FormField label="Annual income" name="annualincome" value={form.annualincome} onChange={handleChange} />
          </ModalSection>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#5B0F12]/10 flex-shrink-0 bg-[#5B0F12]/3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-[#5B0F12]/70 hover:bg-[#5B0F12]/8 rounded-lg transition-colors border border-[#5B0F12]/15"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="px-5 py-2 text-sm font-semibold bg-[#5B0F12] hover:bg-[#7A1519] disabled:opacity-60 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            {saving && (
              <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </div>

      </div>
    </div>
  );
};

// ── Main component ─────────────────────────────────────────────────────────

const UserSingleFrame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const UsersMain = useStoreState((state) => state.UsersMain);
  const updateUser = useStoreActions((actions) => actions.updateUser);

  const [editOpen, setEditOpen] = useState(false);

  const user = UsersMain?.find((u) => u._id === id);
  const index = UsersMain?.findIndex((u) => u._id === id) ?? 0;

  if (!user) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-[#5B0F12]/40">
      <svg className="w-10 h-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-5-5M9 20H4v-2a4 4 0 015-5m6-5a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <p className="text-sm">User not found.</p>
      <button onClick={() => navigate('/users')} className="text-xs text-[#5B0F12] hover:underline">
        Back to account holders
      </button>
    </div>
  );

  const handleSave = async (updatedData) => {
    await updateUser({ id: user._id, data: updatedData });
  };

  return (
    <>
      {editOpen && (
        <EditModal
          user={user}
          onClose={() => setEditOpen(false)}
          onSave={handleSave}
        />
      )}

      <div className="px-4 sm:px-6 pt-8 pb-24 max-w-4xl mx-auto">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs text-[#5B0F12]/50 hover:text-[#5B0F12] transition-colors mb-6 group"
        >
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 12 12" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9.5 6h-7M5.5 3L2.5 6l3 3" />
          </svg>
          Back to account holders
        </button>

        {/* Profile header card */}
        <div className="bg-white border border-[#5B0F12]/15 rounded-xl overflow-hidden mb-5 shadow-sm">

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 px-6 py-6 border-b border-[#5B0F12]/10 bg-gradient-to-r from-[#5B0F12]/5 to-transparent">

            {/* Avatar */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 ${avatarColors[index % avatarColors.length]}`}>
              {getInitials(user.firstname, user.lastname)}
            </div>

            {/* Name block */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-slate-900 capitalize">
                {user.firstname} {user.middlename} {user.lastname}
              </h1>
              <p className="text-sm text-[#5B0F12]/60 mt-0.5 capitalize">{user.occupation}</p>
              <p className="text-xs text-slate-400 mt-1">{user.email}</p>
            </div>

            {/* Badges + Edit button */}
            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
              <StatusPill
                label={user.accounttype + ' account'}
                color="bg-[#5B0F12]/8 text-[#5B0F12] border-[#5B0F12]/20"
              />
              <StatusPill
                label={user.currency?.toUpperCase()}
                color="bg-[#7A1519]/8 text-[#7A1519] border-[#7A1519]/20"
              />
              <button
                onClick={() => setEditOpen(true)}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border capitalize bg-[#5B0F12] text-white border-[#5B0F12] hover:bg-[#7A1519] transition-colors"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 0l.172.172a2 2 0 010 2.828L12 16H9v-3z" />
                </svg>
                Edit user
              </button>
            </div>
          </div>

          {/* Quick-stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#5B0F12]/10">
            {[
              { label: 'Country',       value: user.country },
              { label: 'City',          value: user.city },
              { label: 'Annual income', value: user.annualincome },
              { label: 'Account ID',    value: user._id.slice(-8).toUpperCase() },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-3">
                <p className="text-[11px] uppercase tracking-widest text-[#5B0F12]/50 mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-slate-800 capitalize truncate">{value ?? 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detail sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <SectionCard title="Personal information" dotClass="bg-[#5B0F12]">
            <Field label="First name"    value={user.firstname} />
            <Field label="Last name"     value={user.lastname} />
            <Field label="Middle name"   value={user.middlename} />
            <Field label="Date of birth" value={formatDate(user.dateofbirth)} />
            <Field label="Phone"         value={user.phonenumber} />
            <Field label="SSN"           value={maskSSN(user.ssn)} />
            <Field label="Passport"      value={user.passport} full />
          </SectionCard>

          <SectionCard title="Address" dotClass="bg-[#7A1519]">
            <Field label="House no."  value={user.houseaddress} />
            <Field label="Street"     value={user.address} />
            <Field label="City"       value={user.city} />
            <Field label="State"      value={user.state} />
            <Field label="Country"    value={user.country} />
            <Field label="ZIP code"   value={user.zipcode} />
          </SectionCard>

          <SectionCard title="Financial details" dotClass="bg-[#9B2226]">
            <Field label="Account type"  value={user.accounttype} />
            <Field label="Currency"      value={user.currency?.toUpperCase()} />
            <Field label="Annual income" value={user.annualincome} />
            <Field label="Account ID"    value={user._id} mono full />
          </SectionCard>

          <SectionCard title="Identity & security" dotClass="bg-[#3D0A0C]">
            <Field label="Occupation"   value={user.occupation} />
            <Field label="Passport no"  value={user.passport} />
            <Field label="SSN (masked)" value={maskSSN(user.ssn)} />
            <Field label="User ID"      value={user._id} mono full />
          </SectionCard>

        </div>
      </div>
    </>
  );
};

export default UserSingleFrame;