import React from 'react'
import { useParams } from 'react-router'
import { useDeletePostByIdMutation, useGetPostByIdQuery, useUpdatePostsByIdMutation } from '../redux_rtk/features/posts/postApi'

const SinglePost = () => {
   const{id}= useParams()
   const{data, isLoading, error}= useGetPostByIdQuery(id)
   const [deletePostById]= useDeletePostByIdMutation()
   const [updatePostsById]= useUpdatePostsByIdMutation()
    if(error) return <div>something went wrong!</div>
  if(isLoading) return <div>loading</div>

  const handleDelete=async()=>{
   
    try{
     const response= await deletePostById(id)
     console.log(response)
    }catch(error){
      console.error("Error deleting post:", error)
    }
  }

  const handleUpdate=async()=>{
     const data={
      title:'Title',
      body:'body',
      useId:5,
    }
try{
     const response= await updatePostsById({id, data})
     console.log('update successfully')
    }catch(error){
      console.error("Error updating post:", error)
    }
  }
  return (
    <div>
        <h1 className='text-xl font-semibold'>{id}. {data.title}</h1>
        <p>{data.body}</p>
        <p>Author: {data.userId}</p>

        <button onClick={handleDelete} className='px-6 py-2 text-red-700 border rounded'>Delete this post</button>
        <button onClick={handleUpdate} className='px-6 py-2 text-blue-700 border rounded'>Update this post</button>
    </div>
  )
}

export default SinglePost