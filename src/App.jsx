
import { Link, Outlet } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Users from './pages/user/Users'

function App() {
 

  return (
    <>
    <nav className='bg-slate-800 text-white py-5 space-x-7 flex items-center justify-center'>
      <Link to='/'>Home</Link>
      <Link to='/users'>User</Link>
      <Link to='/user-add'>Add-User</Link>
      <Link to='/user-edit/:id'>Edi-User</Link>
    </nav>
 <Outlet/>
 
    </>
  )
}

export default App
