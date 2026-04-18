// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from '../api/axios';
// import bankImage from '../assets/swiss.jpeg';

// /* ─── Global styles ─── */
// const GlobalStyles = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');
//     *, *::before, *::after { box-sizing: border-box; }
//     body, input, select, button, textarea { font-family: 'Inter', sans-serif; }

//     @keyframes wz-spin    { to { transform: rotate(360deg); } }
//     @keyframes wz-popIn   { from { opacity:0; transform:scale(0.88) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }
//     @keyframes wz-fieldIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

//     .wz-spin      { animation: wz-spin    0.7s linear infinite; }
//     .wz-pop-in    { animation: wz-popIn   0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
//     .wz-field-in  { animation: wz-fieldIn 0.25s ease both; }

//     .wz-inp {
//       width: 100%;
//       padding: 11px 13px 11px 36px;
//       font-size: 13.5px;
//       font-family: 'Inter', sans-serif;
//       border: 1.5px solid #e8d8d9;
//       border-radius: 10px;
//       background: #fff;
//       color: #1a0305;
//       outline: none;
//       transition: border-color 0.2s, box-shadow 0.2s;
//     }
//     .wz-inp::placeholder { color: #d4babb; }
//     .wz-inp:focus { border-color: #5B0F12; box-shadow: 0 0 0 3px rgba(91,15,18,0.09); }
//     .wz-inp:hover:not(:focus) { border-color: #c5a8aa; }
//     .wz-inp.wz-err { border-color: #e74c3c; background: #fff8f8; }
//     .wz-inp.wz-err:focus { box-shadow: 0 0 0 3px rgba(231,76,60,0.08); }

//     .wz-inp-no-icon { padding-left: 13px; }

//     select.wz-inp { -webkit-appearance: none; appearance: none; }

//     .wz-scroll::-webkit-scrollbar { width: 4px; }
//     .wz-scroll::-webkit-scrollbar-track { background: transparent; }
//     .wz-scroll::-webkit-scrollbar-thumb { background: #e8d8d9; border-radius: 99px; }
//   `}</style>
// );

// /* ─── Icon helper ─── */
// const PATHS = {
//   user:     '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>',
//   mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>',
//   phone:    '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.2.9.4 1.8.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c1 .3 1.9.5 2.8.7A2 2 0 0122 16.9z"/>',
//   calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
//   map:      '<path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
//   globe:    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>',
//   zip:      '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
//   lock:     '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
//   currency: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
//   shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
//   arrR:     '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
//   arrL:     '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
//   check:    '<polyline points="20 6 9 17 4 12"/>',
// };

// const Icon = ({ name, style, className = '' }) => (
//   <svg
//     viewBox="0 0 24 24" fill="none" stroke="currentColor"
//     strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
//     style={{ width: 14, height: 14, flexShrink: 0, ...style }}
//     className={className}
//     dangerouslySetInnerHTML={{ __html: PATHS[name] }}
//   />
// );

// /* ─── Password strength ─── */
// const getStrength = (pw = '') => {
//   const r = {
//     length:  pw.length >= 8,
//     upper:   /[A-Z]/.test(pw),
//     lower:   /[a-z]/.test(pw),
//     number:  /[0-9]/.test(pw),
//     special: /[^A-Za-z0-9]/.test(pw),
//   };
//   const score = Object.values(r).filter(Boolean).length;
//   const barColors = ['', '#e74c3c','#e74c3c','#e67e22','#5B0F12','#27ae60'];
//   return { r, score, barColor: barColors[score] || '#e8d8d9' };
// };

// const PasswordStrength = ({ value = '' }) => {
//   const { r, score, barColor } = getStrength(value);
//   const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
//   const rules = [
//     { key: 'length', text: '8+ chars' }, { key: 'upper', text: 'Uppercase' },
//     { key: 'lower', text: 'Lowercase' }, { key: 'number', text: 'Number' },
//     { key: 'special', text: 'Symbol' },
//   ];
//   return (
//     <div style={{ marginTop: 8 }}>
//       <div style={{ display: 'flex', gap: 4, marginBottom: 5 }}>
//         {[1,2,3,4,5].map(i => (
//           <div key={i} style={{ flex: 1, height: 3, borderRadius: 99, background: i <= score ? barColor : '#f0dede', transition: 'background 0.3s' }} />
//         ))}
//       </div>
//       <span style={{ fontSize: 11, color: '#b09496' }}>{value ? `Strength: ${labels[score]}` : 'Enter a password'}</span>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 7 }}>
//         {rules.map(({ key, text }) => (
//           <span key={key} style={{
//             fontSize: 11, padding: '3px 10px', borderRadius: 99,
//             background: r[key] ? '#f0faf4' : '#f5eced',
//             color: r[key] ? '#27ae60' : '#b09496',
//             display: 'flex', alignItems: 'center', gap: 5, transition: 'all 0.2s',
//           }}>
//             <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />
//             {text}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ─── Show/hide password ─── */
// const PwInput = React.forwardRef(({ hasError, placeholder, ...rest }, ref) => {
//   const [show, setShow] = useState(false);
//   return (
//     <div style={{ position: 'relative' }}>
//       <div style={{ position: 'relative' }}>
//         <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#c5a8aa', display: 'flex', pointerEvents: 'none' }}>
//           <Icon name="lock" />
//         </span>
//         <input
//           {...rest} ref={ref} type={show ? 'text' : 'password'} placeholder={placeholder}
//           className={`wz-inp${hasError ? ' wz-err' : ''}`}
//           style={{ paddingRight: 40 }}
//         />
//       </div>
//       <button type="button" tabIndex={-1} onClick={() => setShow(s => !s)}
//         style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#c5a8aa', display: 'flex', alignItems: 'center', padding: 3 }}>
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
//           {show
//             ? <><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
//             : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
//           }
//         </svg>
//       </button>
//     </div>
//   );
// });
// PwInput.displayName = 'PwInput';

// /* ─── Reusable Field ─── */
// const Field = ({ name, label, icon, type = 'text', required = true, placeholder = '', validate, register, errors, style }) => {
//   const rules = {};
//   if (required) rules.required = `${label} is required`;
//   if (type === 'email') rules.pattern = { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' };
//   if (validate) rules.validate = validate;
//   const hasError = !!errors[name];

//   return (
//     <div style={{ marginBottom: 16, ...style }}>
//       <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b09496', marginBottom: 6 }}>
//         {label}{required && <span style={{ color: '#c0392b', marginLeft: 2 }}>*</span>}
//       </label>
//       <div style={{ position: 'relative' }}>
//         {icon && (
//           <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#c5a8aa', display: 'flex', pointerEvents: 'none' }}>
//             <Icon name={icon} />
//           </span>
//         )}
//         <input
//           {...register(name, rules)} type={type} placeholder={placeholder}
//           className={`wz-inp${!icon ? ' wz-inp-no-icon' : ''}${hasError ? ' wz-err' : ''}`}
//         />
//       </div>
//       {hasError && (
//         <p style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: '#e74c3c', marginTop: 4 }}>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, flexShrink: 0 }}>
//             <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
//           </svg>
//           {errors[name].message}
//         </p>
//       )}
//     </div>
//   );
// };

// /* ─── Spinner ─── */
// const Spinner = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
//     className="wz-spin" style={{ width: 15, height: 15 }}>
//     <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity={0.25}/>
//     <path d="M12 3a9 9 0 019 9"/>
//   </svg>
// );

// /* ─── Trust signals ─── */
// const TRUST = [
//   { icon: 'shield',   text: '256-bit SSL encryption on all data' },
//   { icon: 'currency', text: 'Zero-fee checking & savings accounts' },
//   { icon: 'globe',    text: 'Multi-currency international transfers' },
//   { icon: 'phone',    text: '24/7 dedicated support team' },
// ];

// const STEP_DEFS = [
//   { n: 1, label: 'Personal' },
//   { n: 2, label: 'Address'  },
//   { n: 3, label: 'Security' },
//   { n: 4, label: 'Account'  },
// ];

// const STEP_FIELDS = {
//   1: ['firstname','lastname','middlename','dateofbirth','email','phonenumber'],
//   2: ['address','city','state','country','zipcode'],
//   3: ['ssn','pin','password','confirmpassword'],
//   4: ['accounttype','currency'],
// };

// /* ════════════════════════════════════
//    MAIN COMPONENT
// ════════════════════════════════════ */
// const Register = () => {
//   const [step, setStep] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [toast, setToast] = useState(null);

//   const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm({ mode: 'onChange' });
//   const passwordValue    = watch('password', '');
//   const accountTypeValue = watch('accounttype', '');

//   const fp = { register, errors };

//   const nextStep = async () => {
//     if (await trigger(STEP_FIELDS[step])) setStep(s => s + 1);
//   };

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     try {
//       const res = await axios.post('/register', JSON.stringify(data), {
//         headers: { 'Content-Type': 'application/json' }, withCredentials: true,
//       });
//       setToast({ type: 'success', message: res?.data?.message || 'Welcome to Western Zurich Bank!' });
//     } catch (err) {
//       setToast({ type: 'error', message: err.response?.data?.message || err.message || 'Something went wrong.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   /* ─── Shared styles ─── */
//   const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 };
//   const sectionHead = (eyebrow, title, sub) => (
//     <div style={{ marginBottom: 24 }}>
//       <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5B0F12', marginBottom: 8 }}>{eyebrow}</p>
//       <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#1a0305', marginBottom: 5, lineHeight: 1.15 }}>{title}</h2>
//       <p style={{ fontSize: 13, color: '#9e8c8d', fontWeight: 300 }}>{sub}</p>
//     </div>
//   );

//   return (
//     <>
//       <GlobalStyles />
//       <div style={{ display: 'flex', minHeight: '100vh', background: '#0e0305', fontFamily: "'Inter', sans-serif" }}>

//         {/* ══ LEFT PANEL ══ */}
//         <aside style={{ width: 360, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'none' }}
//                className="md:block">
//           <img src={bankImage} alt="Western Zurich Bank"
//                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(175deg, rgba(91,15,18,0.62) 0%, rgba(40,6,9,0.82) 52%, rgba(10,2,3,0.97) 100%)' }} />

//           <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '36px 34px' }}>
//             <div>
//               {/* Brand */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
//                 <div style={{ width: 46, height: 46, borderRadius: 11, overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <img src={bankImage} alt="Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} />
//                 </div>
//                 <div>
//                   <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#fff', letterSpacing: '0.01em', lineHeight: 1.2 }}>Western Zurich</p>
//                   <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,210,214,0.6)', marginTop: 3 }}>Private Banking</p>
//                 </div>
//               </div>

//               {/* Badge */}
//               <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 30, padding: '5px 13px 5px 9px', marginBottom: 16 }}>
//                 <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#f87171', flexShrink: 0 }} />
//                 <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,228,230,0.92)', letterSpacing: '0.04em' }}>New account registration</span>
//               </div>

//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 14, textShadow: '0 2px 28px rgba(0,0,0,0.6)' }}>
//                 Join thousands<br />of clients who<br />trust us.
//               </h1>
//               <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,228,230,0.85)', lineHeight: 1.75, marginBottom: 22 }}>
//                 Open your private banking account in minutes. Fully regulated, encrypted, and built for modern wealth management.
//               </p>

//               <div style={{ height: 1, background: 'rgba(255,255,255,0.14)', marginBottom: 20 }} />

//               <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
//                 {TRUST.map(({ icon, text }) => (
//                   <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
//                     <div style={{ width: 27, height: 27, borderRadius: 8, flexShrink: 0, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                       <Icon name={icon} style={{ stroke: 'rgba(255,210,215,0.88)', width: 13, height: 13 }} />
//                     </div>
//                     <span style={{ fontSize: 11.5, color: 'rgba(255,222,225,0.82)', lineHeight: 1.35 }}>{text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div style={{ paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 20 }}>
//               <p style={{ fontSize: 10, color: 'rgba(255,200,205,0.5)', letterSpacing: '0.08em', marginBottom: 4 }}>FDIC Insured · Regulated · Protected</p>
//               <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,235,237,0.94)', letterSpacing: '0.04em' }}>+1 800 929 4747</p>
//             </div>
//           </div>
//         </aside>

//         {/* ══ FORM SIDE ══ */}
//         <main className="wz-scroll" style={{ flex: 1, background: '#faf5f5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '40px 44px', overflowY: 'auto' }}>
//           <div style={{ width: '100%', maxWidth: 560 }}>

//             {/* Step tracker */}
//             <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 24, position: 'relative' }}>
//               {STEP_DEFS.map((s, idx) => {
//                 const done   = step > s.n;
//                 const active = step === s.n;
//                 return (
//                   <div key={s.n} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
//                     {idx < STEP_DEFS.length - 1 && (
//                       <div style={{
//                         position: 'absolute', height: 1.5, top: 13,
//                         left: 'calc(50% + 14px)', right: 'calc(-50% + 14px)',
//                         zIndex: 0, background: done ? '#5B0F12' : '#f0dede',
//                         transition: 'background 0.4s',
//                       }} />
//                     )}
//                     <div style={{
//                       position: 'relative', zIndex: 1,
//                       width: 27, height: 27, borderRadius: '50%',
//                       display: 'flex', alignItems: 'center', justifyContent: 'center',
//                       fontSize: 11, fontWeight: 600,
//                       border: `1.5px solid ${done ? '#5B0F12' : active ? '#5B0F12' : '#e8d8d9'}`,
//                       background: done ? '#5B0F12' : '#fff',
//                       color: done ? '#fff' : active ? '#5B0F12' : '#b09496',
//                       boxShadow: active ? '0 0 0 4px rgba(91,15,18,0.1)' : 'none',
//                       transition: 'all 0.2s',
//                     }}>
//                       {done
//                         ? <Icon name="check" style={{ stroke: '#fff', width: 13, height: 13 }} />
//                         : s.n
//                       }
//                     </div>
//                     <span style={{ fontSize: 10, marginTop: 6, fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase', whiteSpace: 'nowrap', color: done || active ? '#5B0F12' : '#b09496', transition: 'color 0.2s' }}>
//                       {s.label}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Progress bar */}
//             <div style={{ height: 3, background: '#f0dede', borderRadius: 99, marginBottom: 28, overflow: 'hidden' }}>
//               <div style={{ height: '100%', background: '#5B0F12', borderRadius: 99, width: `${(step / 4) * 100}%`, transition: 'width 0.45s ease' }} />
//             </div>

//             {/* ══ STEP 1 ══ */}
//             {step === 1 && (
//               <div className="wz-field-in">
//                 {sectionHead('Step 1 of 4', 'Personal Information', 'Tell us about yourself to get started')}
//                 <div style={grid2}>
//                   <Field name="firstname"  label="First Name"   icon="user"     placeholder=""              {...fp} />
//                   <Field name="lastname"   label="Last Name"    icon="user"     placeholder=""             {...fp} />
//                 </div>
//                 <Field name="middlename"   label="Middle Name"   icon="user"     required={false} placeholder="Optional"             {...fp} />
//                 <Field name="dateofbirth"  label="Date of Birth" icon="calendar" type="date"                                         {...fp} />
//                 <Field name="email"        label="Email Address" icon="mail"     type="email" placeholder="you@example.com"           {...fp} />
//                 <Field name="phonenumber"  label="Phone Number"  icon="phone"    placeholder="+1 555 000 0000"                        {...fp} />
//               </div>
//             )}

//             {/* ══ STEP 2 ══ */}
//             {step === 2 && (
//               <div className="wz-field-in">
//                 {sectionHead('Step 2 of 4', 'Residential Address', 'Required for identity verification and correspondence')}
//                 <Field name="address" label="Street Address" icon="map" placeholder="12 Naizi Street" {...fp} />
//                 <div style={grid2}>
//                   <Field name="city"  label="City"          icon="map" placeholder=""     {...fp} />
//                   <Field name="state" label="State / Region" icon="map" placeholder="" {...fp} />
//                 </div>
//                 <div style={grid2}>
//                   <Field name="country" label="Country"           icon="globe" placeholder="" {...fp} />
//                   <Field name="zipcode" label="Zip / Postal Code"  icon="zip"  placeholder="" {...fp} />
//                 </div>
//               </div>
//             )}

//             {/* ══ STEP 3 ══ */}
//             {step === 3 && (
//               <div className="wz-field-in">
//                 {sectionHead('Step 3 of 4', 'Security Credentials', 'Keep these confidential — never share with anyone')}

//                 {/* Info box */}
//                 <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fff8f8', border: '1px solid #f0d5d6', borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
//                   <Icon name="shield" style={{ stroke: '#5B0F12', marginTop: 1 }} />
//                   <span style={{ fontSize: 12, color: '#7a1c1f', lineHeight: 1.5 }}>Your SSN and PIN are end-to-end encrypted and never stored in plain text.</span>
//                 </div>

//                 {/* SSN */}
//                 <div style={{ marginBottom: 16 }}>
//                   <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b09496', marginBottom: 6 }}>
//                     Social Security Number <span style={{ color: '#c0392b' }}>*</span>
//                   </label>
//                   <PwInput {...register('ssn', { required: 'SSN is required' })} hasError={!!errors.ssn} placeholder="" />
//                   {errors.ssn && <p style={{ fontSize: 11.5, color: '#e74c3c', marginTop: 4 }}>{errors.ssn.message}</p>}
//                 </div>

//                 {/* PIN */}
//                 <div style={{ marginBottom: 16 }}>
//                   <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b09496', marginBottom: 6 }}>
//                     Transaction PIN <span style={{ color: '#c0392b' }}>*</span>
//                   </label>
//                   <PwInput {...register('pin', { required: 'PIN is required' })} hasError={!!errors.pin} placeholder="Your PIN" />
//                   {errors.pin && <p style={{ fontSize: 11.5, color: '#e74c3c', marginTop: 4 }}>{errors.pin.message}</p>}
//                 </div>

//                 {/* Password */}
//                 <div style={{ marginBottom: 16 }}>
//                   <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b09496', marginBottom: 6 }}>
//                     Password <span style={{ color: '#c0392b' }}>*</span>
//                   </label>
//                   <PwInput
//                     {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Must be at least 8 characters' } })}
//                     hasError={!!errors.password} placeholder="Create a strong password"
//                   />
//                   {errors.password && <p style={{ fontSize: 11.5, color: '#e74c3c', marginTop: 4 }}>{errors.password.message}</p>}
//                   <PasswordStrength value={passwordValue} />
//                 </div>

//                 {/* Confirm password */}
//                 <div style={{ marginBottom: 16 }}>
//                   <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b09496', marginBottom: 6 }}>
//                     Confirm Password <span style={{ color: '#c0392b' }}>*</span>
//                   </label>
//                   <PwInput
//                     {...register('confirmpassword', { required: 'Please confirm your password', validate: v => v === passwordValue || 'Passwords do not match' })}
//                     hasError={!!errors.confirmpassword} placeholder="Re-enter your password"
//                   />
//                   {errors.confirmpassword && <p style={{ fontSize: 11.5, color: '#e74c3c', marginTop: 4 }}>{errors.confirmpassword.message}</p>}
//                 </div>
//               </div>
//             )}

//             {/* ══ STEP 4 ══ */}
//             {step === 4 && (
//               <div className="wz-field-in">
//                 {sectionHead('Step 4 of 4', 'Account Preferences', 'Choose your account type and primary currency')}

//                 {/* Account type */}
//                 <div style={{ marginBottom: 16 }}>
//                   <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b09496', marginBottom: 8 }}>
//                     Account Type <span style={{ color: '#c0392b' }}>*</span>
//                   </label>
//                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
//                     {[
//                       { value: 'checking',   title: 'Checking', desc: 'Day-to-day spending & bill payments' },
//                       { value: 'savings', title: 'Savings',  desc: 'Grow your money with competitive APY' },
//                     ].map(({ value, title, desc }) => {
//                       const checked = accountTypeValue === value;
//                       return (
//                         <label key={value} style={{
//                           display: 'block', padding: '14px', borderRadius: 12, cursor: 'pointer',
//                           border: `1.5px solid ${checked ? '#5B0F12' : '#e8d8d9'}`,
//                           background: checked ? '#fff8f8' : '#fff',
//                           transition: 'border-color 0.2s, background 0.2s',
//                         }}>
//                           <input {...register('accounttype', { required: 'Account type is required' })} type="radio" value={value} style={{ display: 'none' }} />
//                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
//                             <span style={{ fontSize: 13, fontWeight: 600, color: '#1a0305' }}>{title}</span>
//                             <div style={{
//                               width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
//                               border: `1.5px solid ${checked ? '#5B0F12' : '#e8d8d9'}`,
//                               background: checked ? '#5B0F12' : 'transparent',
//                               display: 'flex', alignItems: 'center', justifyContent: 'center',
//                               transition: 'all 0.2s',
//                             }}>
//                               {checked && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', display: 'block' }} />}
//                             </div>
//                           </div>
//                           <p style={{ fontSize: 11.5, color: '#9e8c8d', lineHeight: 1.4, margin: 0 }}>{desc}</p>
//                         </label>
//                       );
//                     })}
//                   </div>
//                   {errors.accounttype && <p style={{ fontSize: 11.5, color: '#e74c3c', marginTop: 6 }}>{errors.accounttype.message}</p>}
//                 </div>

//                 {/* Currency */}
//                 <div style={{ marginBottom: 16 }}>
//                   <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b09496', marginBottom: 6 }}>
//                     Primary Currency <span style={{ color: '#c0392b' }}>*</span>
//                   </label>
//                   <div style={{ position: 'relative' }}>
//                     <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#c5a8aa', display: 'flex', pointerEvents: 'none' }}>
//                       <Icon name="currency" />
//                     </span>
//                     <select {...register('currency', { required: 'Currency is required' })} className={`wz-inp${errors.currency ? ' wz-err' : ''}`}>
//                       <option value="">Select a currency</option>
//                       <option value="usd">USD — US Dollar</option>
//                       <option value="eur">EUR — Euro</option>
//                       <option value="gbp">GBP — British Pound</option>
//                     </select>
//                   </div>
//                   {errors.currency && <p style={{ fontSize: 11.5, color: '#e74c3c', marginTop: 4 }}>{errors.currency.message}</p>}
//                 </div>

//                 {/* Legal */}
//                 <div style={{ background: '#fff', border: '1px solid #f0dede', borderRadius: 10, padding: '14px', marginTop: 4 }}>
//                   <strong style={{ display: 'block', fontSize: 12, color: '#1a0305', marginBottom: 4, fontWeight: 600 }}>Before you submit</strong>
//                   <p style={{ fontSize: 12, color: '#9e8c8d', lineHeight: 1.6, margin: 0 }}>
//                     By submitting this application you agree to our Terms of Service and Privacy Policy. Your information is protected under 256-bit TLS encryption and handled in compliance with applicable banking regulations.
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* ══ Navigation ══ */}
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24, paddingTop: 18, borderTop: '1px solid #f0dede' }}>
//               {step > 1 ? (
//                 <button type="button" onClick={() => setStep(s => s - 1)}
//                   style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', border: '1.5px solid #e8d8d9', borderRadius: 10, background: 'transparent', color: '#9e8c8d', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'Inter', sans-serif", transition: 'border-color 0.2s, color 0.2s' }}
//                   onMouseEnter={e => { e.currentTarget.style.borderColor='#5B0F12'; e.currentTarget.style.color='#5B0F12'; }}
//                   onMouseLeave={e => { e.currentTarget.style.borderColor='#e8d8d9'; e.currentTarget.style.color='#9e8c8d'; }}
//                 >
//                   <Icon name="arrL" />
//                   Back
//                 </button>
//               ) : <span />}

//               {step < 4 ? (
//                 <button type="button" onClick={nextStep}
//                   style={{ display: 'flex', alignItems: 'center', gap: 7, marginLeft: 'auto', padding: '11px 28px', border: 'none', borderRadius: 10, background: '#5B0F12', color: '#fff', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.04em', fontFamily: "'Inter', sans-serif", transition: 'background 0.2s' }}
//                   onMouseEnter={e => e.currentTarget.style.background='#7a1417'}
//                   onMouseLeave={e => e.currentTarget.style.background='#5B0F12'}
//                 >
//                   Continue
//                   <Icon name="arrR" style={{ stroke: '#fff' }} />
//                 </button>
//               ) : (
//                 <button type="button" disabled={isLoading} onClick={handleSubmit(onSubmit)}
//                   style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto', padding: '11px 28px', border: 'none', borderRadius: 10, background: isLoading ? 'rgba(91,15,18,0.55)' : '#5B0F12', color: '#fff', fontSize: 13.5, fontWeight: 600, cursor: isLoading ? 'not-allowed' : 'pointer', letterSpacing: '0.04em', fontFamily: "'Inter', sans-serif", transition: 'background 0.2s' }}
//                   onMouseEnter={e => { if(!isLoading) e.currentTarget.style.background='#7a1417'; }}
//                   onMouseLeave={e => { if(!isLoading) e.currentTarget.style.background='#5B0F12'; }}
//                 >
//                   {isLoading ? (
//                     <><Spinner /> Opening Account…</>
//                   ) : (
//                     <><Icon name="shield" style={{ stroke: '#fff' }} /> Open My Account</>
//                   )}
//                 </button>
//               )}
//             </div>

//           </div>
//         </main>
//       </div>

//       {/* ══ TOAST ══ */}
//       {toast && (
//         <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(14,3,5,0.6)', backdropFilter: 'blur(4px)' }}
//              onClick={() => setToast(null)}>
//           <div className="wz-pop-in" onClick={e => e.stopPropagation()}
//                style={{ background: '#fff', borderRadius: 18, padding: '40px', maxWidth: 380, width: '90%', textAlign: 'center', boxShadow: '0 40px 80px rgba(0,0,0,0.3)' }}>
//             <div style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: toast.type === 'success' ? '#f0faf4' : '#fff8f8' }}>
//               <svg viewBox="0 0 24 24" fill="none" stroke={toast.type === 'success' ? '#27ae60' : '#e74c3c'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
//                 {toast.type === 'success'
//                   ? <><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></>
//                   : <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>
//                 }
//               </svg>
//             </div>
//             <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: '#1a0305', marginBottom: 8 }}>
//               {toast.type === 'success' ? 'Account Opened!' : 'Registration Failed'}
//             </h3>
//             <p style={{ fontSize: 13, color: '#9e8c8d', lineHeight: 1.65, marginBottom: 24 }}>{toast.message}</p>
//             <button onClick={() => setToast(null)}
//               style={{ padding: '11px 32px', border: 'none', borderRadius: 10, background: '#5B0F12', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}
//               onMouseEnter={e => e.currentTarget.style.background='#7a1417'}
//               onMouseLeave={e => e.currentTarget.style.background='#5B0F12'}
//             >
//               {toast.type === 'success' ? 'Continue to Sign In' : 'Try Again'}
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../api/axios';
import bankImage from '../assets/swiss.jpeg';

/* ─── Icon helper ─── */
const PATHS = {
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>',
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>',
  phone:    '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.2.9.4 1.8.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c1 .3 1.9.5 2.8.7A2 2 0 0122 16.9z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  map:      '<path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  globe:    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>',
  zip:      '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  lock:     '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
  currency: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
  shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  arrR:     '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  arrL:     '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  check:    '<polyline points="20 6 9 17 4 12"/>',
};

const Icon = ({ name, className = '' }) => (
  <svg
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={`w-3.5 h-3.5 shrink-0 ${className}`}
    dangerouslySetInnerHTML={{ __html: PATHS[name] }}
  />
);

/* ─── Password strength ─── */
const getStrength = (pw = '') => {
  const r = {
    length:  pw.length >= 8,
    upper:   /[A-Z]/.test(pw),
    lower:   /[a-z]/.test(pw),
    number:  /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
  const score = Object.values(r).filter(Boolean).length;
  const barColors = ['bg-zinc-200', 'bg-red-500', 'bg-red-400', 'bg-orange-400', 'bg-[#5B0F12]', 'bg-green-500'];
  return { r, score, barColorClass: barColors[score] || 'bg-zinc-200' };
};

const PasswordStrength = ({ value = '' }) => {
  const { r, score, barColorClass } = getStrength(value);
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
  const rules = [
    { key: 'length', text: '8+ chars' }, { key: 'upper', text: 'Uppercase' },
    { key: 'lower', text: 'Lowercase' }, { key: 'number', text: 'Number' },
    { key: 'special', text: 'Symbol' },
  ];
  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1.5">
        {[1,2,3,4,5].map(i => (
          <div key={i} className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${i <= score ? barColorClass : 'bg-[#f0dede]'}`} />
        ))}
      </div>
      <span className="text-[11px] text-[#b09496]">{value ? `Strength: ${labels[score]}` : 'Enter a password'}</span>
      <div className="flex flex-wrap gap-1.5 mt-1.5">
        {rules.map(({ key, text }) => (
          <span key={key} className={`text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-all duration-200 ${r[key] ? 'bg-green-50 text-green-600' : 'bg-[#f5eced] text-[#b09496]'}`}>
            <span className="w-1 h-1 rounded-full bg-current shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Show/hide password ─── */
const PwInput = React.forwardRef(({ hasError, placeholder, ...rest }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c5a8aa] flex pointer-events-none">
          <Icon name="lock" />
        </span>
        <input
          {...rest} ref={ref} type={show ? 'text' : 'password'} placeholder={placeholder}
          className={`w-full pl-9 pr-10 py-2.5 text-[13.5px] border-[1.5px] rounded-xl bg-white text-[#1a0305] outline-none transition-all duration-200 placeholder:text-[#d4babb] focus:shadow-[0_0_0_3px_rgba(91,15,18,0.09)] hover:border-[#c5a8aa] ${hasError ? 'border-red-400 bg-red-50 focus:border-red-400' : 'border-[#e8d8d9] focus:border-[#5B0F12]'}`}
        />
      </div>
      <button type="button" tabIndex={-1} onClick={() => setShow(s => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[#c5a8aa] flex items-center p-0.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          {show
            ? <><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
            : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
          }
        </svg>
      </button>
    </div>
  );
});
PwInput.displayName = 'PwInput';

/* ─── Field label ─── */
const FieldLabel = ({ label, required }) => (
  <label className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#b09496] mb-1.5">
    {label}{required && <span className="text-red-600 ml-0.5">*</span>}
  </label>
);

/* ─── Error message ─── */
const FieldError = ({ message }) => (
  <p className="flex items-center gap-1 text-[11.5px] text-red-500 mt-1">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    {message}
  </p>
);

/* ─── Reusable Field ─── */
const Field = ({ name, label, icon, type = 'text', required = true, placeholder = '', validate, register, errors }) => {
  const rules = {};
  if (required) rules.required = `${label} is required`;
  if (type === 'email') rules.pattern = { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' };
  if (validate) rules.validate = validate;
  const hasError = !!errors[name];

  return (
    <div className="mb-4">
      <FieldLabel label={label} required={required} />
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c5a8aa] flex pointer-events-none">
            <Icon name={icon} />
          </span>
        )}
        <input
          {...register(name, rules)} type={type} placeholder={placeholder}
          className={`w-full ${icon ? 'pl-9' : 'pl-3'} pr-3 py-2.5 text-[13.5px] border-[1.5px] rounded-xl bg-white text-[#1a0305] outline-none transition-all duration-200 placeholder:text-[#d4babb] focus:shadow-[0_0_0_3px_rgba(91,15,18,0.09)] hover:border-[#c5a8aa] ${hasError ? 'border-red-400 bg-red-50 focus:border-red-400' : 'border-[#e8d8d9] focus:border-[#5B0F12]'}`}
        />
      </div>
      {hasError && <FieldError message={errors[name].message} />}
    </div>
  );
};

/* ─── Spinner ─── */
const Spinner = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 animate-spin">
    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity={0.25}/>
    <path d="M12 3a9 9 0 019 9"/>
  </svg>
);

/* ─── Trust signals ─── */
const TRUST = [
  { icon: 'shield',   text: '256-bit SSL encryption on all data' },
  { icon: 'currency', text: 'Zero-fee checking & savings accounts' },
  { icon: 'globe',    text: 'Multi-currency international transfers' },
  { icon: 'phone',    text: '24/7 dedicated support team' },
];

const STEP_DEFS = [
  { n: 1, label: 'Personal' },
  { n: 2, label: 'Address'  },
  { n: 3, label: 'Security' },
  { n: 4, label: 'Account'  },
];

const STEP_FIELDS = {
  1: ['firstname','lastname','middlename','dateofbirth','email','phonenumber'],
  2: ['address','city','state','country','zipcode'],
  3: ['ssn','password','confirmpassword'],
  4: ['accounttype','currency'],
};

/* ─── Section heading ─── */
const SectionHead = ({ eyebrow, title, sub }) => (
  <div className="mb-6">
    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#5B0F12] mb-2">{eyebrow}</p>
    <h2 className="font-serif text-[26px] font-semibold text-[#1a0305] mb-1 leading-tight">{title}</h2>
    <p className="text-[13px] text-[#9e8c8d] font-light">{sub}</p>
  </div>
);

/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
const Register = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm({ mode: 'onChange' });
  const passwordValue    = watch('password', '');
  const accountTypeValue = watch('accounttype', '');

  const fp = { register, errors };

  const nextStep = async () => {
    if (await trigger(STEP_FIELDS[step])) setStep(s => s + 1);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post('/register', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }, withCredentials: true,
      });
      setToast({ type: 'success', message: res?.data?.message || 'Welcome to Western Zurich Bank!' });
    } catch (err) {
      setToast({ type: 'error', message: err.response?.data?.message || err.message || 'Something went wrong.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        body, input, select, button, textarea { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif !important; }
        select { -webkit-appearance: none; appearance: none; }
        @keyframes wz-popIn { from { opacity:0; transform:scale(0.88) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }
        @keyframes wz-fieldIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .wz-pop-in { animation: wz-popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
        .wz-field-in { animation: wz-fieldIn 0.25s ease both; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e8d8d9; border-radius: 99px; }
      `}</style>

      <div className="flex min-h-screen bg-[#0e0305]">

        {/* ══ LEFT PANEL ══ */}
        <aside className="hidden md:flex w-[360px] shrink-0 relative overflow-hidden flex-col">
          <img src={bankImage} alt="Western Zurich Bank"
               className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(175deg, rgba(91,15,18,0.62) 0%, rgba(40,6,9,0.82) 52%, rgba(10,2,3,0.97) 100%)' }} />

          <div className="relative z-10 flex flex-col justify-between h-full p-9">
            <div>
              {/* Brand */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-white/10 flex items-center justify-center">
                  <img src={bankImage} alt="Logo" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="font-serif text-[15px] font-semibold text-white tracking-wide leading-tight">Western Zurich</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-pink-200/60 mt-0.5">Private Banking</p>
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <span className="text-[11px] font-medium text-pink-100/90 tracking-wide">New account registration</span>
              </div>

              <h1 className="font-serif text-[30px] font-bold text-white leading-snug mb-3.5" style={{ textShadow: '0 2px 28px rgba(0,0,0,0.6)' }}>
                Join thousands<br />of clients who<br />trust us.
              </h1>
              <p className="text-[13px] font-light text-pink-100/85 leading-relaxed mb-6">
                Open your private banking account in minutes. Fully regulated, encrypted, and built for modern wealth management.
              </p>

              <div className="h-px bg-white/15 mb-5" />

              <div className="flex flex-col gap-3">
                {TRUST.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg shrink-0 bg-white/10 border border-white/15 flex items-center justify-center">
                      <Icon name={icon} className="text-pink-200/88 w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11.5px] text-pink-100/82 leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 mt-5">
              <p className="text-[10px] text-pink-200/50 tracking-wider mb-1">FDIC Insured · Regulated · Protected</p>
              <p className="text-[13px] font-medium text-pink-50/95 tracking-wide">+1 800 929 4747</p>
            </div>
          </div>
        </aside>

        {/* ══ FORM SIDE ══ */}
        <main className="flex-1 bg-[#faf5f5] flex flex-col items-center justify-start px-11 py-10 overflow-y-auto">
          <div className="w-full max-w-[560px]">

            {/* Step tracker */}
            <div className="flex items-start mb-6 relative">
              {STEP_DEFS.map((s, idx) => {
                const done   = step > s.n;
                const active = step === s.n;
                return (
                  <div key={s.n} className="flex-1 flex flex-col items-center relative">
                    {idx < STEP_DEFS.length - 1 && (
                      <div className={`absolute h-px top-[13px] z-0 transition-all duration-500 ${done ? 'bg-[#5B0F12]' : 'bg-[#f0dede]'}`}
                           style={{ left: 'calc(50% + 14px)', right: 'calc(-50% + 14px)' }} />
                    )}
                    <div className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold border-[1.5px] transition-all duration-200
                      ${done ? 'border-[#5B0F12] bg-[#5B0F12] text-white' : active ? 'border-[#5B0F12] bg-white text-[#5B0F12] shadow-[0_0_0_4px_rgba(91,15,18,0.1)]' : 'border-[#e8d8d9] bg-white text-[#b09496]'}`}>
                      {done ? <Icon name="check" className="text-white" /> : s.n}
                    </div>
                    <span className={`text-[10px] mt-1.5 font-medium tracking-wide uppercase whitespace-nowrap transition-colors duration-200 ${done || active ? 'text-[#5B0F12]' : 'text-[#b09496]'}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="h-0.5 bg-[#f0dede] rounded-full mb-7 overflow-hidden">
              <div className="h-full bg-[#5B0F12] rounded-full transition-all duration-500 ease-out" style={{ width: `${(step / 4) * 100}%` }} />
            </div>

            {/* ══ STEP 1 ══ */}
            {step === 1 && (
              <div className="wz-field-in">
                <SectionHead eyebrow="Step 1 of 4" title="Personal Information" sub="Tell us about yourself to get started" />
                <div className="grid grid-cols-2 gap-3.5">
                  <Field name="firstname" label="First Name"  icon="user" placeholder="" {...fp} />
                  <Field name="lastname"  label="Last Name"   icon="user" placeholder="" {...fp} />
                </div>
                <Field name="middlename"  label="Middle Name"   icon="user"     required={false} placeholder="Optional" {...fp} />
                <Field name="dateofbirth" label="Date of Birth" icon="calendar"  type="date"                             {...fp} />
                <Field name="email"       label="Email Address" icon="mail"      type="email" placeholder="you@example.com" {...fp} />
                <Field name="phonenumber" label="Phone Number"  icon="phone"     placeholder="+1 555 000 0000"           {...fp} />
              </div>
            )}

            {/* ══ STEP 2 ══ */}
            {step === 2 && (
              <div className="wz-field-in">
                <SectionHead eyebrow="Step 2 of 4" title="Residential Address" sub="Required for identity verification and correspondence" />
                <Field name="address" label="Street Address" icon="map" placeholder="12 Naizi Street" {...fp} />
                <div className="grid grid-cols-2 gap-3.5">
                  <Field name="city"  label="City"           icon="map" placeholder="" {...fp} />
                  <Field name="state" label="State / Region"  icon="map" placeholder="" {...fp} />
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  <Field name="country" label="Country"          icon="globe" placeholder="" {...fp} />
                  <Field name="zipcode" label="Zip / Postal Code" icon="zip"  placeholder="" {...fp} />
                </div>
              </div>
            )}

            {/* ══ STEP 3 ══ */}
            {step === 3 && (
              <div className="wz-field-in">
                <SectionHead eyebrow="Step 3 of 4" title="Security Credentials" sub="Keep these confidential — never share with anyone" />

                {/* Info box */}
                <div className="flex gap-2.5 items-start bg-[#fff8f8] border border-[#f0d5d6] rounded-xl px-3.5 py-3 mb-4">
                  <Icon name="shield" className="text-[#5B0F12] mt-0.5" />
                  <span className="text-[12px] text-[#7a1c1f] leading-relaxed">Your SSN is end-to-end encrypted and never stored in plain text.</span>
                </div>

                {/* SSN */}
                <div className="mb-4">
                  <FieldLabel label="Social Security Number" required />
                  <PwInput {...register('ssn', { required: 'SSN is required' })} hasError={!!errors.ssn} placeholder="" />
                  {errors.ssn && <FieldError message={errors.ssn.message} />}
                </div>

                {/* Password */}
                <div className="mb-4">
                  <FieldLabel label="Password" required />
                  <PwInput
                    {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Must be at least 8 characters' } })}
                    hasError={!!errors.password} placeholder="Create a strong password"
                  />
                  {errors.password && <FieldError message={errors.password.message} />}
                  <PasswordStrength value={passwordValue} />
                </div>

                {/* Confirm password */}
                <div className="mb-4">
                  <FieldLabel label="Confirm Password" required />
                  <PwInput
                    {...register('confirmpassword', { required: 'Please confirm your password', validate: v => v === passwordValue || 'Passwords do not match' })}
                    hasError={!!errors.confirmpassword} placeholder="Re-enter your password"
                  />
                  {errors.confirmpassword && <FieldError message={errors.confirmpassword.message} />}
                </div>
              </div>
            )}

            {/* ══ STEP 4 ══ */}
            {step === 4 && (
              <div className="wz-field-in">
                <SectionHead eyebrow="Step 4 of 4" title="Account Preferences" sub="Choose your account type and primary currency" />

                {/* Account type */}
                <div className="mb-4">
                  <FieldLabel label="Account Type" required />
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'checking', title: 'Checking', desc: 'Day-to-day spending & bill payments' },
                      { value: 'savings',  title: 'Savings',  desc: 'Grow your money with competitive APY' },
                    ].map(({ value, title, desc }) => {
                      const checked = accountTypeValue === value;
                      return (
                        <label key={value} className={`block p-3.5 rounded-xl cursor-pointer border-[1.5px] transition-all duration-200 ${checked ? 'border-[#5B0F12] bg-[#fff8f8]' : 'border-[#e8d8d9] bg-white'}`}>
                          <input {...register('accounttype', { required: 'Account type is required' })} type="radio" value={value} className="hidden" />
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[13px] font-semibold text-[#1a0305]">{title}</span>
                            <div className={`w-3.5 h-3.5 rounded-full shrink-0 border-[1.5px] flex items-center justify-center transition-all duration-200 ${checked ? 'border-[#5B0F12] bg-[#5B0F12]' : 'border-[#e8d8d9] bg-transparent'}`}>
                              {checked && <span className="w-1.5 h-1.5 rounded-full bg-white block" />}
                            </div>
                          </div>
                          <p className="text-[11.5px] text-[#9e8c8d] leading-snug m-0">{desc}</p>
                        </label>
                      );
                    })}
                  </div>
                  {errors.accounttype && <FieldError message={errors.accounttype.message} />}
                </div>

                {/* Currency */}
                <div className="mb-4">
                  <FieldLabel label="Primary Currency" required />
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c5a8aa] flex pointer-events-none">
                      <Icon name="currency" />
                    </span>
                    <select {...register('currency', { required: 'Currency is required' })}
                      className={`w-full pl-9 pr-3 py-2.5 text-[13.5px] border-[1.5px] rounded-xl bg-white text-[#1a0305] outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(91,15,18,0.09)] ${errors.currency ? 'border-red-400 bg-red-50' : 'border-[#e8d8d9] focus:border-[#5B0F12]'}`}>
                      <option value="">Select a currency</option>
                      <option value="usd">USD — US Dollar</option>
                      <option value="eur">EUR — Euro</option>
                      <option value="gbp">GBP — British Pound</option>
                    </select>
                  </div>
                  {errors.currency && <FieldError message={errors.currency.message} />}
                </div>

                {/* Legal */}
                <div className="bg-white border border-[#f0dede] rounded-xl p-3.5 mt-1">
                  <strong className="block text-[12px] text-[#1a0305] mb-1 font-semibold">Before you submit</strong>
                  <p className="text-[12px] text-[#9e8c8d] leading-relaxed m-0">
                    By submitting this application you agree to our Terms of Service and Privacy Policy. Your information is protected under 256-bit TLS encryption and handled in compliance with applicable banking regulations.
                  </p>
                </div>
              </div>
            )}

            {/* ══ Navigation ══ */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#f0dede]">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(s => s - 1)}
                  className="flex items-center gap-1.5 px-4 py-2.5 border-[1.5px] border-[#e8d8d9] rounded-xl bg-transparent text-[#9e8c8d] text-[13px] font-medium cursor-pointer transition-all duration-200 hover:border-[#5B0F12] hover:text-[#5B0F12]">
                  <Icon name="arrL" />
                  Back
                </button>
              ) : <span />}

              {step < 4 ? (
                <button type="button" onClick={nextStep}
                  className="flex items-center gap-1.5 ml-auto px-7 py-2.5 border-none rounded-xl bg-[#5B0F12] text-white text-[13.5px] font-semibold cursor-pointer tracking-wide transition-all duration-200 hover:bg-[#7a1417]">
                  Continue
                  <Icon name="arrR" className="text-white" />
                </button>
              ) : (
                <button type="button" disabled={isLoading} onClick={handleSubmit(onSubmit)}
                  className={`flex items-center gap-2 ml-auto px-7 py-2.5 border-none rounded-xl text-white text-[13.5px] font-semibold tracking-wide transition-all duration-200 ${isLoading ? 'bg-[#5B0F12]/55 cursor-not-allowed' : 'bg-[#5B0F12] cursor-pointer hover:bg-[#7a1417]'}`}>
                  {isLoading ? (
                    <><Spinner /> Opening Account…</>
                  ) : (
                    <><Icon name="shield" className="text-white" /> Open My Account</>
                  )}
                </button>
              )}
            </div>

          </div>
        </main>
      </div>

      {/* ══ TOAST ══ */}
      {toast && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0e0305]/60 backdrop-blur-sm"
             onClick={() => setToast(null)}>
          <div className="wz-pop-in bg-white rounded-[18px] p-10 max-w-[380px] w-[90%] text-center shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
               onClick={e => e.stopPropagation()}>
            <div className={`w-[72px] h-[72px] rounded-full mx-auto mb-5 flex items-center justify-center ${toast.type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke={toast.type === 'success' ? '#27ae60' : '#e74c3c'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                {toast.type === 'success'
                  ? <><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></>
                  : <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>
                }
              </svg>
            </div>
            <h3 className="font-serif text-[22px] font-semibold text-[#1a0305] mb-2">
              {toast.type === 'success' ? 'Account Opened!' : 'Registration Failed'}
            </h3>
            <p className="text-[13px] text-[#9e8c8d] leading-relaxed mb-6">{toast.message}</p>
            <button onClick={() => setToast(null)}
              className="px-8 py-2.5 border-none rounded-xl bg-[#5B0F12] text-white text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#7a1417]">
              {toast.type === 'success' ? 'Continue to Sign In' : 'Try Again'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;