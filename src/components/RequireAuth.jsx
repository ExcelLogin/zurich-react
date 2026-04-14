// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuths from "../hooks/useAuths"
// import { jwtDecode } from "jwt-decode";

// const RequireAuth = ({allowedRoles }) => {
// const {auth} = useAuths()
// const location = useLocation();

// const  decoded = auth?.accessToken
//      ? jwtDecode(auth.accessToken) 
//      :undefined


// // console.log(decoded)


// const  roles  = decoded?.UserInfo?.roles || []




//   return (
//       roles?.find(role => allowedRoles?.includes(role))
//             ? <Outlet />
//             : auth?.accessToken //changed from user to accessToken to persist login after refresh
//                 ? <Navigate to="unauthorized" state={{ from: location }} replace />
//                 : <Navigate to="/login" state={{ from: location }} replace />
//   )
// }

// export default RequireAuth


import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuths from "../hooks/useAuths";
import { jwtDecode } from "jwt-decode";

const RequireAuth = ({ allowedRoles, redirectTo = "/login" }) => {  // ← add redirectTo prop
    const { auth } = useAuths();
    const location = useLocation();

    const decoded = auth?.accessToken
        ? jwtDecode(auth.accessToken)
        : undefined;

    const roles = decoded?.UserInfo?.roles || [];

    return (
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.accessToken
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to={redirectTo} state={{ from: location }} replace />  // ← use prop
    );
};

export default RequireAuth;