// import { useRef, useState, useEffect } from 'react';
// import useAuths from '../../hooks/useAuths';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import logo from '../../assets/images.jpeg';

// import axios from '../../api/axios';
// const LOGIN_URL = '/auth';

// const Login = () => {
//     const {auth,setAuth,persist,setPersist } = useAuths();

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     const userRef = useRef();
//     const errRef = useRef();

//     const [email, setUser] = useState('');
//     const [password, setPwd] = useState('');
//     // const [Confirmpassword, setConfirmPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [email, password])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(LOGIN_URL,
//                 JSON.stringify({ email, password}),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             // console.log(JSON.stringify(response?.data));
//             // console.log(JSON.stringify(response));
//             const accessToken = response?.data?.accessToken;
//             // const roles = response?.data?.roles;
//             setAuth({ accessToken });
//             // console.log(auth)
//             setUser('');
//             setPwd('');
//             // setConfirmPwd('');
//             navigate('/Userdashboard', { replace: true });
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg(err.message);
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     const togglePersist = () => {
//         setPersist(prev => !prev);
//     }

//     useEffect(() => {
//         localStorage.setItem("persist", persist);
//     }, [persist])

//     return (
//         <section className='flex flex-col items-center justify-center text-slate-100 min-h-screen min-w-fit bg-gray-800'>
//          <img src={logo} className='w-20 h-10 absolute top-1 left-1 rounded-md' alt="logo"/>
//          <div className='mb-4 font-bold'>Western Zurich Online Banking</div>
//         <div className='flex flex-col w-80 gap-4 bg-slate-700 px-4 pt-2 pb-5 rounded-sm shadow-lg'>     
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1 className='text-center'>Sign In</h1>
//             <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
//                 <label htmlFor="username" className='text-xs'>Email:</label>
//                 <input
//                 className='text-slate-900 py-1 px-1 border-0 outline-none rounded-sm'
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e) => setUser(e.target.value)}
//                     value={email}
//                     required
//                 />

//                 <label htmlFor="password" className='text-xs'>Password:</label>
//                 <input
//                 className='text-slate-900 py-1 px-1 border-0 outline-none rounded-sm '
//                     type="password"
//                     id="password"
//                     onChange={(e) => setPwd(e.target.value)}
//                     value={password}
//                     required
//                 />

//                 <div className="flex items-center gap-2 my-2">
//                     <input
//                         type="checkbox"
//                         id="persist"
//                         onChange={togglePersist}
//                         checked={persist}
                        
//                     />
//                     <label htmlFor="persist" className='text-xs'>Trust This Device</label>
//                 </div>
              
//                 <button className='text-sm my-1 py-1 border border-gray-500 rounded-sm'>Sign In</button>
                
//             </form>
//             <div className=' flex justify-between text-xs'>
               
//                 <span className="text-xs">
//                  {/* Need an Account?<br /> */}
//                     <Link to="/register">Sign Up</Link>
//                 </span>

//                 <span className='text-xs'>Forgot password?</span>
//             </div>
             

//             </div>
           
//         </section>

//     )
// }

// export default Login



// import { useRef, useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import axios from '../../api/axios';
// import useAuths from '../../hooks/useAuths';

// const LOGIN_URL = '/auth';

// export default function Login() {
//   const { setAuth, persist, setPersist } = useAuths();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const emailRef = useRef();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPwd, setShowPwd] = useState(false);
//   const [errMsg, setErrMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => { emailRef.current?.focus(); }, []);
//   useEffect(() => { setErrMsg(''); }, [email, password]);
//   useEffect(() => { localStorage.setItem('persist', persist); }, [persist]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(LOGIN_URL,
//         JSON.stringify({ email, password }),
//         { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
//       );
//       setAuth({ accessToken: res?.data?.accessToken });
//       setEmail(''); setPassword('');
//       navigate(location.state?.from?.pathname || '/Userdashboard', { replace: true });
//     } catch (err) {
//       if (!err?.response)            setErrMsg(err.message);
//       else if (err.response?.status === 400) setErrMsg('Missing email or password.');
//       else if (err.response?.status === 401) setErrMsg('Incorrect email or password.');
//       else                                   setErrMsg('Sign in failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0 sm:p-6">
//       <div className="w-full sm:max-w-4xl flex flex-col lg:flex-row sm:rounded-2xl overflow-hidden sm:border sm:border-gray-200">

//         {/* ── Mobile top bar (visible on sm and below) ── */}
//         <div className="flex items-center gap-3 bg-[#0C447C] px-5 py-4 lg:hidden">
//           <div className="w-8 h-8 bg-[#185FA5] rounded-lg flex items-center justify-center shrink-0">
//             <ShieldIcon className="w-4 h-4 text-white" />
//           </div>
//           <div>
//             <p className="text-sm font-medium text-blue-100 tracking-tight">Western Zurich</p>
//             <p className="text-[10px] text-[#85B7EB] tracking-widest uppercase">Private Banking</p>
//           </div>
//         </div>

//         {/* ── Left panel (hidden on mobile) ── */}
//         <aside className="hidden lg:flex flex-col justify-between w-[380px] shrink-0 bg-[#0C447C] p-12">
//           <div>
//             {/* Brand */}
//             <div className="flex items-center gap-3 mb-10">
//               <div className="w-9 h-9 bg-[#185FA5] rounded-lg flex items-center justify-center">
//                 <ShieldIcon className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-blue-100 tracking-tight">Western Zurich</p>
//                 <p className="text-[10px] text-[#85B7EB] tracking-widest uppercase">Private Banking</p>
//               </div>
//             </div>

//             <h1 className="text-2xl font-medium text-blue-50 leading-snug mb-3">
//               Your finances,<br />always within reach.
//             </h1>
//             <p className="text-sm text-[#85B7EB] leading-relaxed mb-8">
//               Securely manage accounts, transfers, and investments from anywhere in the world.
//             </p>

//             {/* Trust signals */}
//             <div className="flex flex-col gap-3">
//               {TRUST_SIGNALS.map(({ Icon, text }) => (
//                 <div key={text} className="flex items-center gap-3">
//                   <div className="w-7 h-7 bg-[#185FA5] rounded-md flex items-center justify-center shrink-0">
//                     <Icon className="w-3.5 h-3.5 text-[#B5D4F4]" />
//                   </div>
//                   <span className="text-xs text-[#B5D4F4]">{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Helpline */}
//           <div className="pt-6 border-t border-[#185FA5]">
//             <p className="text-[11px] text-[#85B7EB]">Need help? Call us anytime</p>
//             <p className="text-sm font-medium text-[#B5D4F4] mt-1">+1 800 929 4747</p>
//           </div>
//         </aside>

//         {/* ── Right panel (form) ── */}
//         <main className="flex-1 bg-white flex items-center justify-center px-6 py-10 sm:px-12 sm:py-12">
//           <div className="w-full max-w-sm">

//             <div className="mb-7">
//               <h2 className="text-xl font-medium text-gray-900">Sign in</h2>
//               <p className="text-sm text-gray-500 mt-1">Welcome back. Enter your credentials below.</p>
//             </div>

//             {/* Error banner */}
//             {errMsg && (
//               <div role="alert" className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-3 py-2.5 mb-5">
//                 {errMsg}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">

//               {/* Email */}
//               <div className="flex flex-col gap-1.5">
//                 <label htmlFor="email" className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
//                   Email address
//                 </label>
//                 <input
//                   id="email" type="email" ref={emailRef} autoComplete="email"
//                   value={email} onChange={(e) => setEmail(e.target.value)} required
//                   placeholder="you@example.com"
//                   className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-700 bg-gray-50
//                              text-gray-900 placeholder-gray-400 outline-none
//                              focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
//                 />
//               </div>

//               {/* Password */}
//               <div className="flex flex-col gap-1.5">
//                 <div className="flex justify-between items-center">
//                   <label htmlFor="password" className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
//                     Password
//                   </label>
//                   <button type="button" className="text-xs text-blue-700 font-medium hover:underline">
//                     Forgot password?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <input
//                     id="password" type={showPwd ? 'text' : 'password'} autoComplete="current-password"
//                     value={password} onChange={(e) => setPassword(e.target.value)} required
//                     placeholder="Enter your password"
//                     className="w-full text-sm px-3 py-2.5 pr-10 rounded-lg border border-slate-700 bg-gray-50
//                                text-gray-900 placeholder-gray-400 outline-none
//                                focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPwd((v) => !v)}
//                     aria-label={showPwd ? 'Hide password' : 'Show password'}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPwd ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Trust device */}
//               <div className="flex items-start gap-2.5">
//                 <input
//                   id="persist" type="checkbox" checked={persist}
//                   onChange={() => setPersist((v) => !v)}
//                   className="mt-0.5 w-4 h-4 rounded accent-blue-700 cursor-pointer"
//                 />
//                 <div>
//                   <label htmlFor="persist" className="text-sm text-gray-700 cursor-pointer select-none">
//                     Trust this device for 30 days
//                   </label>
//                   <p className="text-xs text-gray-400 mt-0.5">Skip two-factor verification on this browser</p>
//                 </div>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit" disabled={loading}
//                 className="w-full py-2.5 bg-blue-700 hover:bg-[#0C447C] active:scale-[0.98]
//                            disabled:opacity-60 disabled:cursor-not-allowed
//                            text-white text-sm font-medium rounded-lg transition"
//               >
//                 {loading ? 'Signing in…' : 'Sign in securely'}
//               </button>

//               {/* Divider */}
//               <div className="flex items-center gap-3 text-gray-400 text-xs">
//                 <div className="flex-1 h-px bg-gray-100" />
//                 <span>or continue with</span>
//                 <div className="flex-1 h-px bg-gray-100" />
//               </div>

//               {/* Smart card */}
//               <button
//                 type="button"
//                 className="w-full flex items-center justify-center gap-2 py-2.5
//                            text-sm text-gray-600 border border-gray-200 rounded-lg
//                            hover:bg-gray-50 active:scale-[0.98] transition"
//               >
//                 <CardIcon className="w-4 h-4" />
//                 Smart card / security key
//               </button>
//             </form>

//             {/* Footer row */}
//             <div className="flex justify-between items-center mt-7 pt-5 border-t border-gray-100">
//               <span className="text-xs text-gray-400">Don't have an account?</span>
//               <Link to="/register" className="text-xs text-blue-700 font-medium hover:underline">
//                 Open an account →
//               </Link>
//             </div>

//             {/* Security note */}
//             <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
//               <LockIcon className="w-3 h-3" />
//               Secured by 256-bit encryption
//             </p>

//           </div>
//         </main>

//       </div>
//     </div>
//   );
// }

// /* ── Trust signals data ── */
// const TRUST_SIGNALS = [
//   { Icon: LockIcon,         text: '256-bit SSL encryption on every session' },
//   { Icon: CheckCircleIcon,  text: 'FDIC insured up to $250,000' },
//   { Icon: ClockIcon,        text: '24/7 fraud monitoring & alerts' },
//   { Icon: CardIcon,         text: 'PCI DSS Level 1 compliant' },
// ];

// /* ── Inline SVG icons ── */
// function ShieldIcon({ className }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
// }
// function LockIcon({ className }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
// }
// function CheckCircleIcon({ className }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="20 6 9 17 4 12"/></svg>;
// }
// function ClockIcon({ className }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
// }
// function CardIcon({ className }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
// }
// function EyeIcon({ className }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
// }
// function EyeOffIcon({ className }) {
//   return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;
// }



import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import useAuths from '../../hooks/useAuths';

// ── Import your bank image ──
import bankImage from '../../assets/swiss.jpeg';

const LOGIN_URL = '/auth';

export default function Login() {
  const { setAuth, persist, setPersist } = useAuths();
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => { emailRef.current?.focus(); }, []);
  useEffect(() => { setErrMsg(''); }, [email, password]);
  useEffect(() => { localStorage.setItem('persist', persist); }, [persist]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
      );
      setAuth({ accessToken: res?.data?.accessToken });
      setEmail('');
      setPassword('');
      navigate(location.state?.from?.pathname || '/Userdashboard', { replace: true });
    } catch (err) {
      if (!err?.response)                    setErrMsg(err.message);
      else if (err.response?.status === 400) setErrMsg('Missing email or password.');
      else if (err.response?.status === 401) setErrMsg('Incorrect email or password.');
      else                                   setErrMsg('Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
         style={{ background: '#1a0507', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div className="w-full max-w-4xl flex rounded-2xl overflow-hidden"
           style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.7)' }}>

        {/* ── LEFT PANEL ── */}
        <aside className="hidden lg:flex flex-col justify-between relative overflow-hidden"
               style={{ width: 360, flexShrink: 0 }}>

          {/* Full-bleed bank photo */}
          <img
            src={bankImage}
            alt="Western Zurich Bank"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Crimson overlay */}
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(160deg, rgba(91,15,18,0.84) 0%, rgba(60,8,10,0.74) 40%, rgba(26,5,7,0.9) 100%)' }} />

          {/* Content above overlay */}
          <div className="relative z-10 flex flex-col justify-between h-full p-9">
            <div>
              {/* Brand */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <img src={bankImage} alt="Logo" className="w-9 h-9 object-contain" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 600, color: '#fdeced', letterSpacing: '0.02em' }}>
                    Western Zurich
                  </p>
                  <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(253,236,237,0.5)', marginTop: 2 }}>
                    Private Banking
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 500, color: '#fff5f6', lineHeight: 1.28, marginBottom: 10 }}>
                Your finances,<br />always within reach.
              </h1>
              <p style={{ fontSize: 12.5, color: 'rgba(253,236,237,0.62)', lineHeight: 1.65, marginBottom: 20 }}>
                Securely manage accounts, transfers, and investments from anywhere in the world.
              </p>

              {/* Live badge */}
              <div className="inline-flex items-center gap-2 mb-5"
                   style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.13)', borderRadius: 40, padding: '6px 14px 6px 10px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f87171', flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: 'rgba(253,236,237,0.75)' }}>Secure session active</span>
              </div>

              {/* Trust signals */}
              <div className="flex flex-col gap-2.5">
                {TRUST_SIGNALS.map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center flex-shrink-0"
                         style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(255,255,255,0.09)' }}>
                      <Icon className="w-3 h-3" style={{ stroke: 'rgba(253,236,237,0.65)' }} />
                    </div>
                    <span style={{ fontSize: 11, color: 'rgba(253,236,237,0.6)', lineHeight: 1.4 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpline */}
            <div style={{ paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: 10, color: 'rgba(253,236,237,0.4)', marginBottom: 3 }}>Need help? Call us anytime</p>
              <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(253,236,237,0.8)' }}>+1 800 929 4747</p>
            </div>
          </div>
        </aside>

        {/* ── RIGHT PANEL ── */}
        <main className="flex-1 bg-white flex items-center justify-center px-10 py-11">
          <div className="w-full max-w-sm">

            {/* Header */}
            <div className="mb-7">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 27, fontWeight: 600, color: '#1a0507', marginBottom: 4 }}>
                Sign in
              </h2>
              <p style={{ fontSize: 13, color: '#999' }}>Welcome back. Enter your credentials below.</p>
            </div>

            {/* Error banner */}
            {errMsg && (
              <div role="alert"
                   style={{ background: '#fff5f5', border: '1px solid #fbbaba', color: '#b91c1c', fontSize: 12.5, borderRadius: 8, padding: '10px 13px', marginBottom: 18 }}>
                {errMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Email */}
              <div>
                <label htmlFor="email"
                       style={{ display: 'block', fontSize: 9.5, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#aaa', marginBottom: 6 }}>
                  Email address
                </label>
                <input
                  id="email" type="email" ref={emailRef} autoComplete="email"
                  value={email} onChange={(e) => setEmail(e.target.value)} required
                  placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={e => Object.assign(e.target.style, inputStyle)}
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center" style={{ marginBottom: 6 }}>
                  <label htmlFor="password"
                         style={{ fontSize: 9.5, fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#aaa' }}>
                    Password
                  </label>
                  <button type="button" style={{ fontSize: 11, color: '#5B0F12', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}>
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password" type={showPwd ? 'text' : 'password'} autoComplete="current-password"
                    value={password} onChange={(e) => setPassword(e.target.value)} required
                    placeholder="Enter your password"
                    style={{ ...inputStyle, paddingRight: 40 }}
                    onFocus={e => Object.assign(e.target.style, { ...inputFocusStyle, paddingRight: '40px' })}
                    onBlur={e => Object.assign(e.target.style, { ...inputStyle, paddingRight: '40px' })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(v => !v)}
                    aria-label={showPwd ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#bbb', display: 'flex', alignItems: 'center' }}
                  >
                    {showPwd ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Trust device */}
              <div className="flex items-start gap-2.5" style={{ paddingBottom: 4 }}>
                <input
                  id="persist" type="checkbox" checked={persist}
                  onChange={() => setPersist(v => !v)}
                  style={{ width: 14, height: 14, marginTop: 3, accentColor: '#5B0F12', cursor: 'pointer', flexShrink: 0 }}
                />
                <div>
                  <label htmlFor="persist" style={{ fontSize: 13, color: '#333', cursor: 'pointer' }}>
                    Trust this device for 30 days
                  </label>
                  <p style={{ fontSize: 11, color: '#bbb', marginTop: 2 }}>Skip two-factor verification on this browser</p>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={loading}
                style={{
                  width: '100%', padding: '12px', background: loading ? 'rgba(91,15,18,0.6)' : '#5B0F12',
                  color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 500,
                  letterSpacing: '0.04em', border: 'none', borderRadius: 9, cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { if (!loading) e.target.style.background = '#7a1417'; }}
                onMouseLeave={e => { if (!loading) e.target.style.background = '#5B0F12'; }}
              >
                {loading ? 'Signing in…' : 'Sign in securely'}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-2.5">
                <div style={{ flex: 1, height: 1, background: '#f3eaea' }} />
                <span style={{ fontSize: 11, color: '#ccc' }}>or continue with</span>
                <div style={{ flex: 1, height: 1, background: '#f3eaea' }} />
              </div>

              {/* Smart card */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2"
                style={{ padding: '11px', background: 'none', border: '1px solid #e8dede', borderRadius: 9, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#555', cursor: 'pointer', transition: 'background 0.15s, border-color 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fdf9f9'; e.currentTarget.style.borderColor = '#5B0F12'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = '#e8dede'; }}
              >
                <CardIcon className="w-4 h-4" />
                Smart card / security key
              </button>
            </form>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 pt-4" style={{ borderTop: '1px solid #f5eced', marginBottom: 12 }}>
              <span style={{ fontSize: 11.5, color: '#bbb' }}>Don't have an account?</span>
              <Link to="/register" style={{ fontSize: 11.5, color: '#5B0F12', fontWeight: 500, textDecoration: 'none' }}>
                Open an account →
              </Link>
            </div>

            <p className="flex items-center justify-center gap-1.5" style={{ fontSize: 10, color: '#ccc' }}>
              <LockIcon className="w-3 h-3" />
              Secured by 256-bit encryption
            </p>

          </div>
        </main>

      </div>
    </div>
  );
}

/* ── Shared input styles ── */
const inputStyle = {
  width: '100%',
  padding: '11px 13px',
  fontSize: 13.5,
  fontFamily: "'DM Sans', sans-serif",
  border: '1px solid #e8dede',
  borderRadius: 9,
  background: '#fdf9f9',
  color: '#1a0507',
  outline: 'none',
};

const inputFocusStyle = {
  ...inputStyle,
  borderColor: '#5B0F12',
  boxShadow: '0 0 0 3px rgba(91,15,18,0.09)',
  background: '#fff',
};

/* ── Trust signals data ── */
const TRUST_SIGNALS = [
  { Icon: LockIcon,        text: '256-bit SSL encryption on every session' },
  { Icon: CheckCircleIcon, text: 'FDIC insured up to $250,000' },
  { Icon: ClockIcon,       text: '24/7 fraud monitoring & alerts' },
  { Icon: CardIcon,        text: 'PCI DSS Level 1 compliant' },
];

/* ── Inline SVG icons ── */
function ShieldIcon({ className, style }) {
  return <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
}
function LockIcon({ className, style }) {
  return <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
}
function CheckCircleIcon({ className, style }) {
  return <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="20 6 9 17 4 12" /></svg>;
}
function ClockIcon({ className, style }) {
  return <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function CardIcon({ className, style }) {
  return <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>;
}
function EyeIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
}
function EyeOffIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></svg>;
}