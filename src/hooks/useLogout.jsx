// import axios from "../api/axios";
// import useAuths from "./useAuths";

// const useLogout = () => {
//     const { setAuth } = useAuths();

//     const logout = async () => {
//         setAuth({});
//         try {
//             const response = await axios.get('/logout', {
//                 withCredentials: true
//             });
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     return logout;
// }

// export default useLogout


// import axios from "../api/axios";
// import useAuths from "./useAuths";

// const useLogout = () => {
//     const { setAuth } = useAuths();

//     const logout = async (navigate) => {
//         setAuth({});
//         try {
//             await axios.get('/logout', { withCredentials: true });
//         } catch (err) {
//             console.error(err);
//         } finally {
//             // replace: true overwrites the current history entry
//             // so the back button cannot return to the dashboard
//             navigate('/login', { replace: true });
//         }
//     };

//     return logout;
// };

// export default useLogout;

// import axios from "../api/axios";
// import useAuths from "./useAuths";
// import { useNavigate } from "react-router-dom";

// const useLogout = () => {
//     const { setAuth } = useAuths();
//     const navigate = useNavigate();  // ← add this

//     const logout = async () => {
//         setAuth({});
//         try {
//             await axios.get('/logout', { withCredentials: true });
//         } catch (err) {
//             console.error(err);
//         } finally {
//             navigate('/login', { replace: true });  
           
//         }
//     };

//     return logout;
// };

// export default useLogout;



import axios from "../api/axios";
import useAuths from "./useAuths";
import { useNavigate } from "react-router-dom";

const useLogout = (redirectTo = "/login") => {  // ← add param
    const { setAuth } = useAuths();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        try {
            await axios.get('/logout', { withCredentials: true });
        } catch (err) {
            console.error(err);
        } finally {
            navigate(redirectTo, { replace: true });
        }
    };

    return logout;
};

export default useLogout;