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
            query:({page,limit})=>  `/users?_page=${page}&_per_page=${limit}`,
            //providesTags:['Users']
            providesTags: (result)=> result ? result?.data.map(({id})=> ({type:'Users', id})):['Users']
        }),

        // get single user details
        getUserById:builder.query({
            query:(id)=> `/users/${id}`,

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
        }),
        updateUserById:builder.mutation({
            query: ({id, ...rest})=>({
                url: `/users/${id}`,
                method:"PATCH",
                body: rest
            }),
             invalidatesTags: (result, error, {id}) => [{type:'Users', id:id}]
        })
     })
})

export const{useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useGetUserByIdQuery, useUpdateUserByIdMutation}= userApi
export default userApi;