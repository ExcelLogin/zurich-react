 import { createStore, action, thunk, computed } from "easy-peasy";
// import api from '../api/posts';

export default createStore({
    usr:null,
    setUser: action((state, payload) => {
        state.usr = payload;
    }),

  Users: [],
    setUsers: action((state, payload) => {
        state.Users = payload;
    }),

 Balance: '',
    setBalance: action((state, payload) => {
        state.Balance = payload;
    }),
     search: '',
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.searchResults = payload;
    }),
    
     UsersCount: computed((state) => state.Users.length),
    getUserById: computed((state) => {
        return (id) => state.Users.find(user => (user.usersdetail._id).toString() === id);
    })
  
});











// import { useState, useEffect } from "react";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";

// const Users = () => {
//     const [users, setUsers] = useState();
//     const axiosPrivate = useAxiosPrivate();
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         let isMounted = true; 
//         const controller = new AbortController();

//         const getUsers = async () => {
//             try {
//                 const response = await axiosPrivate.get('/users', {
//                     signal: controller.signal
//                 });
//                 console.log(response.data);
//                 isMounted && setUsers(response.data);
//             } catch (err) {
//                 console.error(err);
//                 navigate('/login', { state: { from: location }, replace: true });
//             }
//         }

//         getUsers();

//         return () => {
//             isMounted = false;
//             controller.abort();
//         }
//     }, [])

//     return (
//         <article>
//             <h2>Users List</h2>
//             {users?.length
//                 ? (
//                     <ul>
//                         {users.map((user, i) => <li key={i}>{user?.username}</li>)}
//                     </ul>
//                 ) : <p>No users to display</p>
//             }
//         </article>
//     );
// };

// export default Users;
