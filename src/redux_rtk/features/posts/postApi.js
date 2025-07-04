import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi=createApi({
    reducerPath:'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (builder)=>({
            getAllOPosts: builder.query({
                query: ()=> '/posts'
            }),
            getPostById: builder.query({
                query:(id)=> `/posts/${id}`
            }),
            addNewPost:builder.mutation({
                query:(newPost)=>({
                    url: '/posts',
                    method: 'POST',
                    body:newPost
                })
            })
        })
})

export const {useGetAllOPostsQuery, useGetPostByIdQuery, useAddNewPostMutation}= postsApi;
export default postsApi
