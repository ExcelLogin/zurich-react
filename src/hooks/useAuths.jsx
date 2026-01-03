import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";


const useAuths = () => {
     const { auth } = useContext(AuthContext);
      useDebugValue(auth, auth => auth?.accessToken ? "Logged In" : "Logged Out")
  return useContext(AuthContext);
}

export default useAuths
