import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginForm({isLoggedIn,setIsLoggedIn}) {
  const[showPassword,setShowPassword]=useState(false)
  const[userLoginDetails,setUserLoginDetails]=useState({email:"",
password:""})
const navigate=useNavigate()

function onchangeHandler(e){
      setUserLoginDetails((prevState)=>{
          return {...prevState,[e.target.name]:e.target.value}
      })
}

function onSubmitHandler(e){
  e.preventDefault()
  toast.success("Logged In")
  setIsLoggedIn(true)
  
  console.log("Login Details",userLoginDetails)
  navigate("/dashboard")
}

  return (
   
    <form className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
    <label>
        <p>Email Address <sup className='text-pink-600'>*</sup></p>
        <input onChange={onchangeHandler} value={userLoginDetails.email} required type="email" name="email" id="email" placeholder='Enter Email address' className='w-[75%] p-3 bg-slate-800 rounded-md mt-1'/>
    </label>
    <label className='relative'>
        <p>Password <sup className='text-pink-600'>*</sup></p>
        <input value={userLoginDetails.password} onChange={onchangeHandler} required type={showPassword?"text":"password"} name="password" id="password" placeholder='Enter your password' className='w-[75%] p-3 bg-slate-800 rounded-md mt-1'/>
        <span onClick={()=>{setShowPassword((prevState)=>{return !prevState})}} className='absolute right-[28%] bottom-[15%] text-[1.4rem]'>{showPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</span>
        <p className='text-blue-400 text-[0.8rem] absolute right-[25%] bottom-[30%]]'>Forgot Password</p>   
    </label>
    <button className='bg-yellow-400 w-[75%] p-2 rounded-md cursor-pointer text-black font-semibold mt-8'>Sign In</button>
   

    </form>
  )
}

export default LoginForm