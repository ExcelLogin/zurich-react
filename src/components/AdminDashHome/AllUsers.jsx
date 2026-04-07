import Lists from './List';

  

const AllUsers = () => {

      // const Users = useStoreState((state) => state.Users);
      // console.log(Users)
  return (
      <>
      <div className='bg-slate-950 text-slate-50 rounded-md mt-10'>
            <Lists/>
              
      </div>
      
           
 </>
  )
}
// Users.map((val) => <li key={val?.usersdetail._id}> {val.usersdetail.email}</li>)
export default AllUsers
