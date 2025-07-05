import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";

const userApi= createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    tagTypes:['Users'],
     endpoints:(builder)=>({
        // get all users from server
        getUsers: builder.query({
            query:()=>  '/users',
            //providesTags:['Users']
            providesTags: (result) => result ? result.map(({id}) => ({type: 'Users', id})): ['Users']
        }),
        // add a new user to api
        addUser:builder.mutation({
            query: (data) => ({
                url:'/users',
                method: "POST",
                body: data
            }),
            invalidatesTags:['Users']
        }),
        // delete a user from api
        deleteUser:builder.mutation({
            query:(id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
           // invalidatesTags:['Users']
           invalidatesTags: (result, error, userId) => [{type:'Users', id:userId}]
        })
     })
})

export const{useGetUsersQuery, useAddUserMutation, useDeleteUserMutation}= userApi
export default userApi;