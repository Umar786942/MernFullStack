import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignUpForm({isLoggedIn,setIsLoggedIn}) {
  const[userType,setUserType]=useState("student")
  const[showConfirmPassword,setshowConfirmPassword]=useState(false)
  const[showPassword,setShowPassword]=useState(false)
  const[userData,setUserData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    createPassword:"",
    confirmPassword:""
  })
  const navigate=useNavigate()
  

  function onChangeHandler(e){
    const{name,value}=e.target
    setUserData((prevSate)=>{
         return ({...prevSate,[name]:value})
    })
  }

  function submitHandler(e){
    e.preventDefault()
    if(userData.createPassword !== userData.confirmPassword){
       toast.error("Passwords Do Not match") 
      return
    }
    const completeUserDetails={...userData,userType}
    console.log(completeUserDetails)
    toast.success("User Created Successfully")
    setIsLoggedIn(true)
    navigate("/dashboard")
  }
  return (
    <div className='flex flex-col gap-4 w-full'>
       <div className='w-max flex rounded-full bg-gray-800 border-b-[0.1rem] border-slate-700 p-1'>
      <button onClick={()=>{setUserType("student")}} className={`${userType==="student"?"bg-gray-900 py-2 px-6 rounded-full":"py-2 px-6 w-[50%]"}`}>Student</button>
      
      <button onClick={()=>{setUserType("instructor")}} className={`${userType==="instructor"?"bg-gray-900 py-2 px-6 rounded-full w-[50%]":"py-2 px-6 "}`}>Instructor</button>
    </div>

    <form onSubmit={submitHandler} className='flex flex-col gap-4 w-[75%]'>
      
      <div className='flex justify-between'>
      <label>
        <p>First Name<sup className='text-pink-600'>*</sup></p>
        <input value={userData.firstName} onChange={onChangeHandler} required type="text" name="firstName" id="firstName" placeholder='Enter Your First Name' className='p-3 bg-slate-800 rounded-md mt-1'/>
    </label>

      <label>
        <p>Last Name<sup className='text-pink-600'>*</sup></p>
        <input value={userData.lastName} onChange={onChangeHandler} required type="text" name="lastName" id="lastName" placeholder='Enter Your Last Name' className='p-3 bg-slate-800 rounded-md mt-1'/>
    </label>

      </div>

      <div>
      <label>
        <p>Email Address <sup className='text-pink-600'>*</sup></p>
        <input value={userData.email} onChange={onChangeHandler} required type="email" name="email" id="email" placeholder='Enter Your Email address' className='p-3 bg-slate-800 rounded-md mt-1 w-full'/>
    </label>
      </div>

      <div className='flex justify-between gap-2'>
              
      <label className='relative'>
        <p>Create Password <sup className='text-pink-600'>*</sup></p>
        <input value={userData.createPassword} onChange={onChangeHandler} required type={showPassword?"text":"password"} name="createPassword" id="createPassword" placeholder='Enter your password' className='p-3 bg-slate-800 rounded-md mt-1'/>
        <span onClick={()=>{setShowPassword((prevState)=>{return !prevState})}} className='absolute right-[6%] bottom-[15%] text-[1.4rem]'>{showPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</span>
          
    </label>

    <label className='relative'>
        <p>Confirm Password <sup className='text-pink-600'>*</sup></p>
        <input value={userData.confirmPassword} onChange={onChangeHandler} required type={showConfirmPassword?"text":"password"} name="confirmPassword" id="confirmPassword" placeholder='Confirm password' className='p-3 bg-slate-800 rounded-md mt-1'/>
        <span onClick={()=>{setshowConfirmPassword((prevState)=>{return !prevState})}} className='absolute right-[6%] bottom-[15%] text-[1.4rem]'>{showConfirmPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</span>
        
    </label>
      </div>

      <button className='bg-yellow-400 p-2 rounded-md cursor-pointer text-black font-semibold mt-8'>Sign In</button>


      </form>
      
    </div>
   
   
  )
}

export default SignUpForm