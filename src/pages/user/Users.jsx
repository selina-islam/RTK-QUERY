import React from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "../../redux_rtk/features/users/usersApi";
import Loader from "./Loader";
import { Link } from "react-router";

const Users = () => {
  const { data: users = [], isLoading, error } = useGetUsersQuery();
  const [deleteUser]=useDeleteUserMutation() 
  if (isLoading) return <Loader />;
  if (error) return <p> error</p>;

  const handleDeleteUser=async(id)=>{
try{
  await deleteUser(id); // invalidate only the deleted user
  alert('delete user successfully')
}catch(error){
  console.error(error)
}
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-5">
      {users.map((user, index) => (
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
  );
};

export default Users;
