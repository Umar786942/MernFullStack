import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../Components/CartCard'
import { fetchCarts } from './CartSlice'
import { useNavigate } from 'react-router-dom'



function Cart() {
  // const quantity=useSelector((state)=>state.allCartItems.cart)
  const dispatch=useDispatch()
  const {loading,error,cart}=useSelector((state)=>state.allCartItems)
  // console.log("cart value in cart.js : -",cart)
  // console.log("loading value in cart.js : -",loading)
   useEffect(()=>{
      dispatch(fetchCarts())
   },[cart.length] )
   const navigate=useNavigate()
  

  return (
    <div className='w-[90%] min-h-[75%]  mx-auto flex  gap-y-6 gap-6 justify-center mt-10 mb-10 '>
        {loading?(<div className='text-[1.3rem] text-gray-600 font-bold w-[100%] flex justify-center items-center '><p>Loading...</p></div>):
           (error?
           ( <div className='text-[1.3rem] text-gray-600 font-bold w-[100%] flex justify-center items-center'>{error}</div>) :
           (cart.length===0?(<div className='text-[1.3rem] text-gray-600 font-bold w-[100%] flex justify-center items-center'><div className='flex flex-col gap-6'>
           <h1>Your Cart is Empty!</h1>
           <button onClick={()=>{navigate('/')}} className='bg-green-600 text-white text-center px-3 py-2 rounded-md duration-150 hover:bg-white hover:text-green-600 hover:border-green-600 hover:border uppercase'>Shop Now</button>
           
           </div></div>): (<div className='flex gap-4 w-[80%] mx-auto justify-between'>
           <div className='flex flex-col gap-6 w-[55%]'>{cart.map((product)=><CartCard key={product.id} cartItem={product}></CartCard>)}</div>
           
           <div className='flex flex-col gap-8 w-[40%] '>
            <h1 className='font-bold text-green-500 text-[2rem]'>Your Cart Summary</h1>
            <p className='font-bold text-[1.25rem] text-gray-700'>Total Amount : ${cart.reduce((a,b)=>{return(a+b.price*b.quantity)},0)} </p>
            <button className='px-3 py-3 uppercase font-bold bg-green-500 text-white rounded-md'>checkout</button>
           </div>
           </div>
           
           ))
           )
        }
    </div>
  )
    
    
}

export default Cart