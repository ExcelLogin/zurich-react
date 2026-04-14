// import { useRef, useState, useEffect } from 'react';
// import useAuths from '../../hooks/useAuths';
// import { Link, useNavigate, useLocation } from 'react-router-dom';


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
//             // setAuth({ email,roles, accessToken });
//             setUser('');
//             setPwd('');
//             // setConfirmPwd('');
//             navigate('/Admin', { replace: true });
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
//         <section className='text-slate-100 bg-slate-900'>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                 className='text-slate-900'
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e) => setUser(e.target.value)}
//                     value={email}
//                     required
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                 className='text-slate-900'
//                     type="password"
//                     id="password"
//                     onChange={(e) => setPwd(e.target.value)}
//                     value={password}
//                     required
//                 />
//                  {/* <label htmlFor="password">Confirm Password:</label>
//                 <input
//                 className='text-slate-900'
//                     type="password"
//                     id="password"
//                     onChange={(e) => setConfirmPwd(e.target.value)}
//                     value={Confirmpassword}
//                     required
//                 /> */}
//                 <button className='btn-sgn'>Sign In</button>
//                 <div className="persistCheck">
//                     <input
//                         type="checkbox"
//                         id="persist"
//                         onChange={togglePersist}
//                         checked={persist}
//                     />
//                     <label htmlFor="persist">Trust This Device</label>
//                 </div>
//             </form>
//             <p>
//                 Need an Account?<br />
//                 <span className="line">
//                     <Link to="/register">Sign Up</Link>
//                 </span>
//             </p>
//         </section>

//     )
// }

// export default Login




import { useRef, useState, useEffect } from 'react';
import useAuths from '../../hooks/useAuths';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';

const LOGIN_URL = '/auth';

const Login = () => {
    const { auth, setAuth, persist, setPersist } = useAuths();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            const accessToken = response?.data?.accessToken;
            setAuth({ accessToken });
            setUser('');
            setPwd('');
            navigate('/Admin', { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg(err.message);
            } else if (err.response?.status === 400) {
                setErrMsg('Missing email or password.');
            } else if (err.response?.status === 401) {
                setErrMsg('Invalid credentials. Please try again.');
            } else {
                setErrMsg('Login failed. Please try again later.');
            }
            errRef.current.focus();
        } finally {
            setIsLoading(false);
        }
    };

    const togglePersist = () => {
        setPersist((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem('persist', persist);
    }, [persist]);

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-white">Admin Portal</h1>
                    <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
                </div>

                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

                    {/* Error Message */}
                    {errMsg && (
                        <div
                            ref={errRef}
                            aria-live="assertive"
                            className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3 mb-6"
                        >
                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email Field */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1.5">
                                Email address
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={email}
                                required
                                placeholder="admin@example.com"
                                className="w-full bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-lg px-4 py-2.5 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                                    Password
                                </label>
                                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition">
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={password}
                                required
                                placeholder="••••••••"
                                className="w-full bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-lg px-4 py-2.5 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Trust Device */}
                        <div className="flex items-center gap-2.5">
                            <input
                                type="checkbox"
                                id="persist"
                                onChange={togglePersist}
                                checked={persist}
                                className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer"
                            />
                            <label htmlFor="persist" className="text-sm text-slate-400 cursor-pointer select-none">
                                Trust this device
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-medium text-sm rounded-lg px-4 py-2.5 transition flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Signing in...
                                </>
                            ) : (
                                'Sign in'
                            )}
                        </button>
                    </form>
                </div>

                {/* Register Link */}
                <p className="text-center text-sm text-slate-500 mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;