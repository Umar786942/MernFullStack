import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { decrement, getUserAccountAmount, increment, incrementByAmount } from '../Actions'
import { increment } from '../slices/AccountSlicer'
import { decrement } from '../slices/AccountSlicer'
import { incrementByAmount } from '../slices/AccountSlicer'
import { fetchUserAmountById } from '../slices/AccountSlicer'

function AccountComponent() {
    const amount=useSelector((state)=>state.account.amount)
const points=useSelector((state)=>state.bonus.points)
const[value,setValue]=useState(0)
const dispatch=useDispatch()
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <h1>Account Component</h1>
        <h2>Amount : ${amount}</h2>
        <h2>Points : ${points}</h2>
        <div className='flex gap-4'>
        <button onClick={()=>dispatch(increment())} className='font-semibold bg-slate-800 px-4 py-2 rounded-md'>Increment</button>
        <button onClick={()=>dispatch(decrement())} className='font-semibold bg-slate-800 px-4 py-2 rounded-md'>Decrement</button>
        <input  type="text" name="" id="" onChange={(e)=>{setValue(+e.target.value)}} className='text-black px-2'/>
        <button onClick={()=>{dispatch(incrementByAmount(value))}} className='font-semibold bg-slate-800 px-4 py-2 rounded-md'>Increment by amount : {value}</button>
        </div>
        
        {/* <button onClick={()=>{
            dispatch(getUserAccountAmount(1))
            
            }
        
        } className='font-semibold bg-slate-800 px-4 py-2 rounded-md'>Get UserAmount</button> */}

        <button onClick={()=>{
            dispatch(fetchUserAmountById(1))
            
            }
        
        } className='font-semibold bg-slate-800 px-4 py-2 rounded-md'>Get UserAmount</button>
    </div>
  )
}

export default AccountComponent