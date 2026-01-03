import axios from '../api/axios';
import useAuths from './useAuths';


const useRefreshToken = () => {
    const { setAuth } = useAuths();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {

            return {
                ...prev,
                accessToken: response.data.accessToken
            }
        });
        //  console.log(response.data.accessToken);
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;