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
            })
        })
})

export const {useGetAllOPostsQuery, useGetPostByIdQuery}= postsApi;
export default postsApi
