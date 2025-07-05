import React from 'react'
import { useGetUsersQuery } from '../../redux_rtk/features/users/usersApi'
import Loader from './Loader'

const Users = () => {
  const {data:users=[], isLoading, error}= useGetUsersQuery()
  console.log(users)
  if(isLoading) return <Loader/>
  if(error) return <p> error</p>
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-5'>
      {users.map((user, index)=>(
        <div key={index} className='shadow-md rounded-lg p-5 space-y-2'>
          <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="profile avatar" className='size-12'/>
          <h2>Name: {user?.name}</h2>
          <p>Email: {user?.email}</p>
          <p>Age: {user?.age}</p>
        </div>
      ))}
    </div>
  )
}

export default Users