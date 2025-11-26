import axios from "../api/axios";
import useAuths from "./useAuths";

const useLogout = () => {
    const { setAuth } = useAuths();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.get('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout