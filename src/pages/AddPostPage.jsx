import React, { useState } from 'react'
import { useAddNewPostMutation } from '../redux_rtk/features/posts/postApi'

const AddPostPage = () => {
    const[title, setTitle]=useState('')
    const[body, setBody]=useState('')
    const[useId, setUserId]=useState('')

    const[addNewPost]= useAddNewPostMutation()

    const handleSubmitPost= async (e)=>{
        e.preventDefault()
       const newPost={
        title,
        body,
        useId
       }
      await addNewPost(newPost)
    }
  return (
    <div className='p-5 shadow-md rounded-lg border max-w-md'>
        <h1>Add New Post</h1>
        <form onSubmit={handleSubmitPost} className='space-y-2'>
            <div>
                <label className='block mb-1'>Title: </label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Post title' className='p-1 border focus:outline-0 w-full'/>
            </div>
            <div>
                <label className='block mb-1'>Description: </label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} type="text" placeholder='Description ' className='p-1 border focus:outline-0 w-full'/>
            </div>
            <div>
                <label className='block mb-1'>UseID: </label>
                <input value={useId} onChange={(e)=>setUserId(e.target.value)} type="text" placeholder='Post userId' className='p-1 border focus:outline-0 w-full'/>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white py-1 mt-3 rounded'>Add Post</button>
        </form>
    </div>
  )
}

export default AddPostPage