import React from 'react'
import { useForm } from "react-hook-form"
import { useAddUserMutation } from '../../redux_rtk/features/users/usersApi'
import { useNavigate } from 'react-router'


const Adduser = () => {
     const {register,handleSubmit, watch,formState: { errors }, } =useForm()
     const navigate= useNavigate()

     const [addUser]=useAddUserMutation()
      const onSubmit= async (data) => {
        try{
            await addUser({...data, isActive: false})
            alert('User added successfully')
            navigate('/')
        }catch(error){
            console.error(error)
        }
      }
  return (
    <div className='shadow-md rounded-lg p-8'>
        <h2 className='text-xl font-semibold mb-5'>Add new user</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
           <div>
             <label>Name: </label>
            <input {...register("name", { required: true })}  type="text" placeholder='Enter your name' className='border focus:outline-0 ml-3' />
           </div>
           <div>
             <label>Email: </label>
            <input {...register("email", { required: true })}  type="email" placeholder='Enter your email' className='border focus:outline-0 ml-3' />
           </div>
           <div>
             <label>Age: </label>
            <input {...register("age", { required: true })}  type="number" placeholder='Enter your age' className='border focus:outline-0 ml-3' />
           
           </div>

           <button type='submit' className='px-6 py-2 rounded border text-blue-600'>Add User</button>
        </form>
    </div>
  )
}

export default Adduser