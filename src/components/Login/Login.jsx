import { useRef, useState, useEffect } from 'react';
import useAuths from '../../hooks/useAuths';
import { Link, useNavigate, useLocation } from 'react-router-dom';


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
        <section className='text-slate-100 bg-slate-900'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                className='text-slate-900'
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                className='text-slate-900'
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                />
                 {/* <label htmlFor="password">Confirm Password:</label>
                <input
                className='text-slate-900'
                    type="password"
                    id="password"
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    value={Confirmpassword}
                    required
                /> */}
                <button className='btn-sgn'>Sign In</button>
                <div className="persistCheck">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist}
                        checked={persist}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>

    )
}

export default Login
