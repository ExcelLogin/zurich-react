import { useNavigate, Link } from "react-router-dom";
// import useLogout from "../hooks/useLogout";
// import '../css/hm.css'

const Home = () => {
    const navigate = useNavigate();
    // const logout = useLogout();

    const signOut = async () => {
        // await logout();
        navigate('/linkpage');
    }

    return (
        <section>
        <div className="hm">
          <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/Userdashboard">Go to the User dash board page</Link>
            <br />
              <Link to="/Admin">Go to the Admin page</Link>
            <br />
            <br/>
             <Link to="/login">Login</Link>
            <br />
            <br/>
              <Link to="/Adminlogin">Admin Login</Link>
            <br />
            <br/>
            <Link to="/linkpage">Go to the link page</Link>
            <br/>
            <br/>
         
        </div>
          
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
