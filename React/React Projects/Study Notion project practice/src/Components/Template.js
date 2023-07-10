import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import backgroundimage from "../assets/frame.png"
import {FcGoogle} from "react-icons/fc"


function Template({heading,title1,title2,mainimage,formtype,isLoggedIn,setIsLoggedIn}) {
  return (
    <div className='flex h-[90%] w-[85%] mx-auto'>
           <div className='w-[50%] h-[100%] text-white flex flex-col gap-4'>
            <h1 className='text-[2rem] font-medium w-[80%]'>{heading}</h1>
            <p className='text-[1.2rem] opacity-70'>{title1} <br/>
            <span className='text-cyan-400 text-[1.2rem] italic'>{title2}</span>
            </p>
           {formtype==="login"?<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>:<SignUpForm setIsLoggedIn={setIsLoggedIn}/>} 
          
            <div className='flex w-[75%] items-center text-slate-600 '><hr className='w-[45%] border-slate-600'/><p className='w-[10%] text-center'>OR</p><hr className='w-[45%] border-slate-600'/></div>
            <button className='w-[75%] flex items-center justify-center gap-2 p-2 border-[0.1rem] rounded-md border-slate-600'><FcGoogle/><span>Sign in with Google</span></button>
           </div>


           <div className='relative w-[50%] min-h-full flex justify-end'>
           <div className='w-[80%] relative'>
           <img src={backgroundimage} alt="background" className='absolute z-10 left-4 top-4 w-[100%]' />
               <img src={mainimage} alt="main" className='absolute z-20 w-[100%]' />
           </div>
               
           </div>
           
           
    </div>
 
  )
}

export default Template