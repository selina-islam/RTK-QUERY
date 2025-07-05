import React from 'react'
import { Link } from 'react-router'
import { useGetAllOPostsQuery } from '../redux_rtk/features/posts/postApi'

const Home = () => {
     const{data, isLoading, error}= useGetAllOPostsQuery()
  if(error) return <div>something went wrong!</div>
  if(isLoading) return <div>loading</div>
  return (
    <div>
         <ul className='p-5'>
      {data.slice(0, 10).map((data)=>(
        <Link to={`/blogs/${data.id}`} key={data.id}>{data.id}. {data.title}</Link>
      ))}
    </ul>
    </div>
  )
}

export default Home