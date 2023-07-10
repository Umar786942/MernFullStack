import React from 'react'
import { BsCartCheck } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate()
    // const quantity=useSelector((state)=>state.allCartItems.cart).reduce((a, b) => a + b.quantity, 0)
    const quantity=useSelector((state)=>state.allCartItems.cart).length
    // const cart=useSelector((state)=>state.allCartItems.cart)
    
    // console.log(quantity)
  return (
    <div className='w-full bg-slate-700'>
        <div className='w-[60%] text-[1.5rem] py-4 text-white mx-auto flex justify-between items-center'>
            <h1 className='cursor-pointer' onClick={()=>{navigate('/')}}>FlipKart</h1>
            <div className='flex'>
            <BsCartCheck className='cursor-pointer' onClick={()=>
            {
              navigate('./cart')
             
              }
              }></BsCartCheck>
            <sup ><div className='bg-white font-bold py-3 px-2 text-center text-green-400 rounded-[100%]'>{quantity}</div></sup>

            </div>
       
        </div>
    </div>
  )
}

export default Navbar