import React from 'react'
import Template from '../Components/Template'
import mainimage from "../assets/signup.png"
function SignUp({isLoggedIn,setIsLoggedIn}) {
  return (
    <Template heading="Join the millions learning to code with StudyNotion for free" title1="Build skills for today, tomorrow, and beyond." title2="Education to future-proof your career." mainimage={mainimage} formtype="signup" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Template>
  )
}

export default SignUp