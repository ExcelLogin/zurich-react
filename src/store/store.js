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

RecentTransactions:[],
setRecentTransactions: action((state, payload) => {
        state.RecentTransactions = payload;
    }),

    
editBalance: '',
setBalance: action((state, payload) => {
        state.editBalance = payload;
    }),
   

deductBalance: '',
setDeductBalance: action((state, payload) => {
        state.deductBalance = payload;
    }),



    // save top user balance async function
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

         // save deduct user balance with async function 
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




saveRecentTransactions: thunk(async (actions, payload, helpers) => {
        const { RecentTransactions } = helpers.getState();
    const { id } = payload;

    try {
        const response = await axiosPrivate.patch(`/Admin/transfer/${id}`, payload);

        // Store the returned API data by replacing the matched transaction
        actions.setRecentTransactions(
            RecentTransactions.map(history =>
                history._id === id.toString()
                    ? { ...history, ...response.data.data }  // merge returned data into existing
                    : history
            )
        );

        return {
            success: true,
            data: response.data,
            balance: response.data.data,
            message: 'saved'
        };

    } catch (err) {
        return {
            success: false,
            error: err.message || 'Failed',
            details: err.response?.data
        };
    }
}),
   
    

UsersCount: computed((state) => state.Users.length),
    getUserById: computed((state) => {
        return (id) => state.Users.find(user => (user.usersdetail._id).toString() === id);
}),
  


RecentTransactionsCount:computed((state) => state.RecentTransactions.length),



//get all users history
getTFsById: computed((state) => {
    return (id) =>
      state.RecentTransactions.filter(
        (tfHistory) => tfHistory?.uniqId?._id?.toString() === id
      );
}),

//get all user history
getTFById: computed((state) => {
    return (id) => state.RecentTransactions.find(history => history?._id?.toString() === id);
}),



});



export default createAppStore;





