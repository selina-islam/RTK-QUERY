import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux_rtk/store';
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import SinglePost from './pages/SinglePost.jsx'
import AddPostPage from './pages/AddPostPage.jsx'
import EditUser from './pages/user/EditUser.jsx'
import Users from './pages/user/Users.jsx'
import Adduser from './pages/user/Adduser.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode >
   <BrowserRouter>
   <Routes>
    <Route element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs/:id' element={<SinglePost/>}/>
      <Route path='/add-post' element={<AddPostPage/>}/>
      <Route path='/user-edit' element={<EditUser/>}/>
      <Route path='//user-add' element={<Adduser/>}/>
      <Route path='/users' element={<Users/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  </StrictMode>
  </Provider>
)
