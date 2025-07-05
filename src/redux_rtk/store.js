import { configureStore } from "@reduxjs/toolkit";
import postsApi from "./features/posts/postApi";
import userApi from "./features/users/usersApi";
const store = configureStore({
    reducer:{
        [postsApi.reducerPath]:postsApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },

     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, userApi.middleware),
})
export default store