 import { createStore, action, thunk, computed } from "easy-peasy";
// import axiosPrivate from "../api/axios";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";



const createAppStore = (axiosPrivate) => createStore({
    usr:null,
    setUser: action((state, payload) => {
        state.usr = payload;
    }),

  Users: [],
    setUsers: action((state, payload) => {
        state.Users = payload;
    }),

 editBalance: '',
    setBalance: action((state, payload) => {
        state.editBalance = payload;
    }),
   

deductBalance: '',
setDeductBalance: action((state, payload) => {
        state.deductBalance = payload;
    }),


  saveBalance: thunk(async (actions, updatedBalance, helpers) => {
        const { Users } = helpers.getState();
        const { id } = updatedBalance;
        try {
            const response = await axiosPrivate.post(`/Admin/add/${id}`, updatedBalance);

            // console.log(response.data);
            actions.setUsers(Users.map(user => user.usersdetail._id === id ? {...user, balance: response.data.data.returnbalance.balance } : user));
            actions.setBalance('');


                 return {
            success: true,
            data: response.data,
            balance: response.data.data.returnbalance.balance,
            message: 'Balance deducted successfully'
        };
           
        } catch (err) {
            // console.log(`Error: ${err.error}`);

              return {
            success: false,
            error: err.message || 'Failed to deduct balance',
            details: err.response?.data
        };
        }
    }),


     saveDeductBalance: thunk(async (actions, updatedBalance, helpers) => {
        const { Users } = helpers.getState();
        const { id } = updatedBalance;
        try {
            const response = await axiosPrivate.post(`/Admin/subtract/${id}`, updatedBalance);
            // console.log(response.data);
            actions.setUsers(Users.map(user => user.usersdetail._id === id ? {...user, balance: response.data.data.returnbalance.balance } : user));
            actions.setDeductBalance('');

             // Return the response data so it can be accessed by the component
        return {
            success: true,
            data: response.data,
            balance: response.data.data.returnbalance.balance,
            message: 'Balance deducted successfully'
        };
           
        } catch (err) {
            // console.log(`Error: ${err}`);

             // Return error information
        return {
            success: false,
            error: err.message || 'Failed to deduct balance',
            details: err.response?.data
        };
        }
    }),
   
    
    UsersCount: computed((state) => state.Users.length),
    getUserById: computed((state) => {
        return (id) => state.Users.find(user => (user.usersdetail._id).toString() === id);
    })
  
});



export default createAppStore;





