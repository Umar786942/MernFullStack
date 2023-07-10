import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

function Navbar({isLoggedIn,setIsLoggedIn}) {
  return (
    <div className='text-white flex justify-between h-[10%] items-center w-[85%] mx-auto pt-4 '>
    <Link to="/">
    <img src={logo} alt="Logo" width={160} height={160} className='cursor-pointer' />
    </Link>
   
  <ul className='flex gap-4 text-[1.1rem] text-slate-300'>
    
    <li className='cursor-pointer duration-100 hover:text-white'><Link to="/">Home</Link> </li>
    <li className='cursor-pointer duration-100 hover:text-white'><Link to="/about">About</Link> </li>
    <li className='cursor-pointer duration-100 hover:text-white'><Link to="/contact">Contact</Link> </li>
  </ul>
  <div className='text-[1.1rem] text-slate-300 flex gap-4'>
  {!isLoggedIn && <Link to="/login">
  <button className='bg-slate-800 px-3 py-2 rounded-md border-[0.1rem] border-slate-600 hover:text-white hover:border-white duration-150'>Log in</button>
  </Link>}
  
  {!isLoggedIn &&  <Link to="/signup">
   <button className='bg-slate-800 px-3 py-2 rounded-md border-[0.1rem] border-slate-600 hover:text-white hover:border-white duration-150'>Sign up</button>
   </Link>}

   {isLoggedIn && <Link to="/login">
   <button onClick={()=>{setIsLoggedIn(false)
                            toast.success("Logged Out")}}
    className='bg-slate-800 px-3 py-2 rounded-md border-[0.1rem] border-slate-600 hover:text-white hover:border-white duration-150'>Log Out</button>
   </Link> }

   {isLoggedIn &&  <Link to="/dashboard">
   <button className='bg-slate-800 px-3 py-2 rounded-md border-[0.1rem] border-slate-600 hover:text-white hover:border-white duration-150'>Dashboard</button>
   </Link>}
  
       
  </div>
    </div>
  )
}

export default Navbar