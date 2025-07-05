import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";

const userApi= createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
     endpoints:(builder)=>({
        // get all users from server
        getUsers: builder.query({
            query:()=>  '/users'
        })
     })
})

export const{useGetUsersQuery}= userApi
export default userApi;