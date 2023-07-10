import React from 'react'
import { useDispatch } from 'react-redux'
import { postCarts } from '../features/Cart/CartSlice'
import toast from 'react-hot-toast'

function ProductCard(prop) {
    // console.log(id)
    const dispatch=useDispatch()
  return (
    <div className='flex flex-col p-4 h-[27em] items-center gap-4 w-[15em] bg-white rounded-lg shadow-xl  duration-300 hover:scale-110 hover:shadow-5xl '>
      <h1 className='h-[10%] font-bold text-[1rem]'>{prop.product.title}</h1>
      <p className='h-[20%] text-gray-600 text-[0.8em] font-bold'>{prop.product.description.substring(0, 101)}...</p>
      <img src={prop.product.thumbnail} className='w-full object-cover h-[40%] rounded-md' alt="" />
      <div className='flex w-full h-[20%] items-center justify-between'>
     <p className='text-green-500 font-bold text-[1.25rem]'>${prop.product.price}</p>
     <button className='border-2 px-2 py-1 hover:font-bold duration-150 rounded-md' onClick={()=>{
     toast.success('Item Added Successfully!')
      dispatch(postCarts(prop.product))
     }
     }>Add To Cart</button>
      </div>
    
    </div>
  )
}

export default ProductCard