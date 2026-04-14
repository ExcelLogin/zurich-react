
import { useStoreActions,useStoreState } from 'easy-peasy';
import AllUsers from './AllUsers';
import { useEffect } from 'react';

const AdminBoardHome = ({ isLoading, fetchError }) => {
  
   
    const Users = useStoreState((state) => state.Users);
    


  return (
    <>
    <div className="py-5 mx-1">

      
       <ul>
           {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (Users.length ? <AllUsers/> : <p className="statusMsg">No posts to display.</p>) }
             {/* {Users.map((user, i) => <li key={user?.usersdetail._id}>{user?.usersdetail.email } {user?.usersdetail.firstname } {user?.usersdetail.lastname } {user?.balance }</li>)} */}
         
        </ul>


    </div>
    </>
  )
}

export default AdminBoardHome
