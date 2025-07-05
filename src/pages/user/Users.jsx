import React, { useState } from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "../../redux_rtk/features/users/usersApi";
import Loader from "./Loader";
import { Link } from "react-router";

const Users = () => {
  const[page, setPage]= useState(1)
  const { data: users = [], isLoading, error } = useGetUsersQuery({page, limit:2});
  const [deleteUser]=useDeleteUserMutation() 
  console.log(users.data)
   if (error) return <p> error</p>;
  if (isLoading) return <Loader />;
 

  const handleDeleteUser=async(id)=>{
try{
  await deleteUser(id); // invalidate only the deleted user
  alert('delete user successfully')
}catch(error){
  console.error(error)
}
  }
  return (
   <div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-5">
      {users?.data.map((user, index) => (
        <div key={index} className="shadow-md rounded-lg p-5 space-y-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
            alt="profile avatar"
            className="size-12"
          />
          <h2>Name: {user?.name}</h2>
          <p>Email: {user?.email}</p>
          <p>Age: {user?.age}</p>
          <div className="space-x-4">
            <Link to={`/user-edit/${user.id}`}> <button className="px-6 py-1 bg-blue-600">Update</button></Link>
           

            <button onClick={()=> handleDeleteUser(user?.id)} className="px-6 py-1 bg-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
    <div className="my-8 flex items-center justify-center space-x-8">
      <button onClick={()=>setPage(prev => Math.max(prev-1, 1))} className="py-1 px-5 text-white bg-blue-600">Previous</button>
        <span className="font-semibold">Page {page}</span>
      <button onClick={()=>setPage(prev => Math.max(prev+1, ))} className="py-1 px-5 text-white bg-blue-600">Next</button>
    </div>
   </div>
  );
};

export default Users;
