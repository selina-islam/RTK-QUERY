import React from 'react'
import { useParams } from 'react-router'
import { useGetPostByIdQuery } from '../redux_rtk/features/posts/postApi'

const SinglePost = () => {
   const{id}= useParams()
   const{data, isLoading, error}= useGetPostByIdQuery(id)
    if(error) return <div>something went wrong!</div>
  if(isLoading) return <div>loading</div>
  return (
    <div>
        <h1 className='text-xl font-semibold'>{id}. {data.title}</h1>
        <p>{data.body}</p>
        <p>Author: {data.userId}</p>
    </div>
  )
}

export default SinglePost