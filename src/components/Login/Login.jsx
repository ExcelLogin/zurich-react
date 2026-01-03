import { useRef, useState, useEffect } from 'react';
import useAuths from '../../hooks/useAuths';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images.jpeg';

import axios from '../../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const {auth,setAuth,persist,setPersist } = useAuths();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    // const [Confirmpassword, setConfirmPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            setAuth({ accessToken });
            // console.log(auth)
            setUser('');
            setPwd('');
            // setConfirmPwd('');
            navigate('/Userdashboard', { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg(err.message);
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <section className='flex flex-col items-center justify-center text-slate-100 min-h-screen min-w-fit bg-gray-800'>
         <img src={logo} className='w-20 h-10 absolute top-1 left-1 rounded-md' alt="logo"/>
         <div className='mb-4 font-bold'>Western Zurich Online Banking</div>
        <div className='flex flex-col w-80 gap-4 bg-slate-700 px-4 pt-2 pb-5 rounded-sm shadow-lg'>     
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className='text-center'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
                <label htmlFor="username" className='text-xs'>Email:</label>
                <input
                className='text-slate-900 py-1 px-1 border-0 outline-none rounded-sm'
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password" className='text-xs'>Password:</label>
                <input
                className='text-slate-900 py-1 px-1 border-0 outline-none rounded-sm '
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                />

                <div className="flex items-center gap-2 my-2">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist}
                        checked={persist}
                        
                    />
                    <label htmlFor="persist" className='text-xs'>Trust This Device</label>
                </div>
              
                <button className='text-sm my-1 py-1 border border-gray-500 rounded-sm'>Sign In</button>
                
            </form>
            <div className=' flex justify-between text-xs'>
               
                <span className="text-xs">
                 {/* Need an Account?<br /> */}
                    <Link to="/register">Sign Up</Link>
                </span>

                <span className='text-xs'>Forgot password?</span>
            </div>
             

            </div>
           
        </section>

    )
}

export default Login
