
import { useStoreActions,useStoreState } from 'easy-peasy';
import AllUsers from './AllUsers';
import { useEffect } from 'react';

const AdminBoardHome = ({ isLoading, fetchError }) => {
  
   
    const Users = useStoreState((state) => state.Users);
    


  return (
    <>
    <div className="py-10 mx-1">

        <div className='py-2'>
         <form className="flex items-center border rounded-md px-2 border-slate-500" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search" className='w-32'>Search Users</label>
                <input
                   className='w-full py-2 border-none outline-none bg-transparent'
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    // value={}
                    // onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
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
