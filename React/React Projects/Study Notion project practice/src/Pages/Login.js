import React from 'react'
import Template from '../Components/Template'
import mainimage from "../assets/login.png"
function Login({isLoggedIn,setIsLoggedIn}) {
  return (
    <Template heading="Welcome Back" title1="Build skills for today, tomorrow, and beyond." title2="Education to future-proof your career." mainimage={mainimage} formtype="login" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} ></Template>
  )
}

export default Login