import React from 'react'
import {deleteCarts} from '../features/Cart/CartSlice.js'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import {updateCarts} from '../features/Cart/CartSlice'

function CartCard(prop) {
    // console.log(prop.cartItem)
    const dispatch=useDispatch()
    
    return (
        <div className='flex flex-col p-4 max-h-content items-center gap-4 w-[100%] bg-white rounded-lg shadow-xl  '>

          <h1 className='h-[5%] font-bold text-[1.5em]'>{prop.cartItem.title}</h1>
          <p className='h-[20%] text-gray-400 text-[1.25em]'>{prop.cartItem.description}</p>
          <img src={prop.cartItem.thumbnail} className='w-full object-cover h-[60%] rounded-md' alt="" />
          <div className='flex w-full h-[20%] items-center justify-between'>
         <p className='text-green-500 font-bold text-[1.25rem]'>${prop.cartItem.price}</p>
         <label htmlFor="quantity">Quantity : 
         <select onChange={(e)=>{dispatch(updateCarts({id:prop.cartItem.id,change:{quantity:+e.target.value}}
         )
         )
         }} value={prop.cartItem.quantity} name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
         </label>
        
         <button onClick={()=>{
            toast.error("Item Removed Successfully!!")
            dispatch(deleteCarts(prop.cartItem.id))
         
         }} className='border-2 px-2 py-1 hover:font-bold duration-150 rounded-md' >Remove</button>
          </div>
        
        </div>
      )
}

export default CartCard